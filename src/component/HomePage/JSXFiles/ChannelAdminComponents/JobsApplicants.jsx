import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Fade, Zoom } from 'react-reveal';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useEffect } from 'react';

export default function JobsApplicants() {
    let navigator = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    let [jobID, setJobID] = useState("");
    let [searchToken, setSearchToken] = useState("");
    let [applicants, setApplicants] = useState([]); 
    let [job, setJob] = useState({}); 

    //WE HAVE TO COMMENT THIS
    // let applicants = [
    //     {
    //         "_id": "637244067f8eb54bbde72295",
    //         "applicantName": "FATHI FATHALLAH ALI",
    //         "jobName": "Data Engineering"
    //     },
    //     {
    //         "_id": "638669b35dca4b6b30551e26",
    //         "applicantName": "EZZ HELAL  KUKHUN",
    //         "jobName": "Data Engineering"
    //     },
    //     {
    //         "_id": "6372bbeb064d4873ecbaf9e8",
    //         "applicantName": "OMAR MOHAMMAD RAYAN",
    //         "jobName": "Data Engineering"
    //     }
    // ]

    async function getJobProfile(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/getJob/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setJob(json.job[0]);
           
            });
    }


    async function getApplicantsOfJob(id) {
        
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/getJobApplicants/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                console.log(json.applicantsArray)    
                setApplicants(json.applicantsArray);
            });
    }

    function renderApplicants() {
        return (
            applicants.filter((app) =>
                app.applicantName.toLocaleLowerCase().includes(searchToken)
            ).map((applicant, key) => {
                return (
                    <tr>
                        <th scope="row">{key + 1}</th>
                        <td>
                            {applicant.applicantName}
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    navigateToApplicant(applicant._id);

                                }}
                                type="button" class="btn btn-primary">

                                <i class="fa-solid fa-file-contract text-light"></i>

                            </button>
                        </td>

                        <td>
                            <button
                                onClick={() => {
                                    deleteApplication(jobID, applicant._id)
                                }}
                                type="button" class="btn btn-danger">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                );
            }))

    }

    useEffect(() => {
        let jobId = searchParams.get('id');
        setJobID(jobId);
        getJobProfile(jobId)
        getApplicantsOfJob(jobId); 


    }, [])


    function navigateToApplicant(id) {
        navigator({
            pathname: 'jopApplication',
            search: `?id=${id}`
        });
    }


    return (
        <>
            <div className="outlet ms-auto">
                <div className='jobInformation'>
                    <div className="container p-4 ">
                        <Fade>
                            <div className="job-apply-title d-flex">
                                <div className="job-apply-title-child w-50 h-100  d-flex align-items-center ">
                                    <div>
                                        <h2><b>{job.jobName}</b></h2>
                                        <div className="meta-job-data d-flex justify-content-start text-muted">
                                            <div className="job-type-card d-flex me-4">
                                                <i className="fa-solid fa-briefcase me-1"></i>
                                                <h6>{job.jobType}</h6>
                                            </div>
                                            <div className="job-type-time d-flex">
                                                <i className="fa-solid fa-clock me-1"></i>
                                                <h6>Posted: {job.postDate}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Fade>

                        <Fade delay={1000}>
                            <div className="job-info-container ">
                                <div className="container ">  
                                        <h2 className='mb-4'><b><span className='span-style '>Employment </span></b> Information</h2>
                                    <div className="jobEntries">
                                        <div className="jobEntryInfo col-md-3  d-flex flex-nowrap">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-industry"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="Industry" className="form-label">Industry</label>
                                                <h6 name="Industry"><b>{job.industry}</b></h6>
                                            </div>
                                        </div>

                                        <div className="jobEntryInfo col-md-3 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-dollar-sign"></i>
                                            </div>
                                            <div className="field-form ">
                                                <label for="Salary" className="form-label">Salary</label>
                                                <h6 name="Salary"><b>{job.salary}</b></h6>
                                            </div>

                                        </div>

                                        <div className="jobEntryInfo col-md-3 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-briefcase"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="JobType" className="form-label">Job Type</label>
                                                <h6 name="JobType"><b>{job.jobType}</b></h6>


                                            </div>
                                        </div>


                                        <div className="jobEntryInfo col-md-3 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-location-dot"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="lastNameTextField" className="form-label">Location</label>
                                                <h6 name="studystate"><b>{job.location}</b></h6>
                                            </div>
                                        </div>



                                        <div className="jobEntryInfo col-md-3 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-user-tie"></i>                                        </div>
                                            <div className="field-form ">
                                                <div className="field-form ">
                                                    <label for="Joblevel" className="form-label">
                                                        Job level</label>
                                                    <h6 name="Joblevel"><b>{job.jobLevel}</b></h6>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="jobEntryInfo col-md-3 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-medal"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="lastNameTextField" className="form-label">Experience</label>
                                                <h6 name="phone"><b>
                                                    {job.experience}</b></h6>

                                            </div>
                                        </div>

                                        <div className="jobEntryInfo col-md-3 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-clock"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="Deadline" className="form-label">Deadline</label>
                                                <h6 name="Deadline"><b>{job.deadline}</b></h6>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </Fade>
                    </div>

                </div>
                <Fade delay={1500}>
                    <div className='jobsApplicationSearchBar d-flex justify-content-between'>
                        <div class="mb-3 w-100">
                            <label for="exampleInputEmail1" class="form-label">Search</label>
                            <input
                                onKeyUp={(e) => {
                                    searchToken = e.target.value;
                                    setSearchToken(searchToken);
                                }}
                                placeholder='Search using job applicant name..' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="searchApplications" />
                        </div>
                    </div>
                </Fade>
                <Fade delay={2000}>
                    <div className='jobsTableContainer'>
                        <table class="table table-hover jobsTable">
                            <thead>
                                <tr>
                                    <th className='JT-H1' scope="col">Applicant ID</th>
                                    <th className='JT-H2' scope="col">Applicant Name</th>
                                    {/* <th className='JT-H3' scope="col">Job Name</th> */}
                                    <th className='JT-H4' scope="col">Application</th>
                                    <th className='JT-H5' scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody id="tableApplicantsBody">
                                {/* GENERATE JOBS HERE */}
                                {renderApplicants()}

                            </tbody>
                        </table>
                    </div>
                </Fade>
            </div>

            <Outlet />
        </>
    )
}



async function deleteJobAPI(data) {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/deleteApplication`, {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
        .then(json => {
            if (json.message == "success") {
                Swal.fire("Good job!", "Job Application Deleted Successfully!", "success");
            }
            setTimeout(()=>{
                window.location.reload(); 
            },2500)
        });
}


function deleteApplication(jobId, applicantId) {

    let data = {
        jobId,
        applicantId
    }
    deleteJobAPI(data);

}

