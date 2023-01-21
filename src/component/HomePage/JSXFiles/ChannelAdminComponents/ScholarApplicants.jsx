import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Fade, Zoom } from 'react-reveal';
import Swal from 'sweetalert2';
export default function ScholarApplicants() {

    let [applicants, setApplicants] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    let [searchToken, setSearchToken] = useState("");
    let [scholar, setScholar] = useState({});
    let navigator = useNavigate();

    function navigateToApplicant(id) {
        navigator({
            pathname: 'scholarApplication',
            search: `?id=${id}`
        });
    }



    async function getScholarshipInformation(id) {

        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/getScholarshipInfo/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setScholar(json.scholarship[0]);
            });
    }


    async function deleteApplication(id1, id2) {

        let data = {
            applicantId: id2,
            scholarshipId: id1
        }
        console.log(data)
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/deleteApplication`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(json => {
                if (json.message == "success") {
                    Swal.fire("Good job!", "Application Deleted Successfully!", "success");
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                }
            });
    }










    async function getApplicantsOfScholar(id) {

        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/getScolarshipApplicants/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
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
                                    deleteApplication(applicant.scolarshipId, applicant._id)
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
        let id = searchParams.get('id');
        getScholarshipInformation(id);
        getApplicantsOfScholar(id);


    }, [])
    return (
        <>{console.log(scholar)}
            <div className="outlet ms-auto">

                <div className='jobInformation'>
                    <div className="container p-4 ">
                        <Fade>
                            <div className="job-apply-title d-flex">
                                <div className="job-apply-title-child w-50 h-100  d-flex align-items-center ">
                                    <div>
                                        <h2><b>{scholar.scolarshipName}</b></h2>
                                        <div className="meta-job-data d-flex justify-content-start text-muted">
                                            {/* <div className="job-type-card d-flex me-4">
                                                <i className="fa-solid fa-briefcase me-1"></i>
                                                <h6>{job.jobType}</h6>
                                            </div> */}
                                            <div className="job-type-time d-flex me-3">
                                                <i className="fa-solid fa-clock me-1"></i>
                                                <h6>Posted: {new Date(scholar.postDate).toLocaleDateString()}</h6>
                                            </div>
                                            <div className="job-type-time d-flex">
                                                <i className="fa-solid fa-clock me-1"></i>
                                                <h6>Deadline: {new Date(scholar.deadline).toLocaleDateString()}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Fade>
                        <Zoom delay={500}>
                            <div className="container">
                                <div className="skills container mb-4 ">
                                    <div className='d-flex justify-content-between'>

                                        <h2 className='mb-2 p-3'><b><span className='span-style '>Overview</span></b></h2>
                                    </div>
                                    <p id="aboutPara">
                                        {
                                            scholar.scholarshipOverview
                                        }
                                    </p>
                                </div>
                            </div>
                        </Zoom>

                        <Zoom delay={1000}>
                            <div className="container">
                                <div className="skills container mb-4 ">
                                    <h2 className='mb-2 p-3'><b><span className='span-style '>Mission</span></b></h2>
                                    <ol className='ms-4'>
                                        {
                                            scholar.scholarshipMissions?.map((ee) => {
                                                return (<li>{ee}</li>
                                                );

                                            })

                                        }

                                    </ol>
                                </div>

                            </div>
                        </Zoom>

                    </div>

                </div>

                <div className='jobsApplicationSearchBar d-flex justify-content-between'>
                    <div class="mb-3 w-90">
                        <label for="exampleInputEmail1" class="form-label">Search</label>
                        <input
                            onChange={(e) => {
                                setSearchToken(e.target.value);
                            }}
                            placeholder='Search using job applicant name..' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="searchApplications" />
                    </div>
                    <button className='searchJobBtn'>
                        Search
                    </button>
                </div>

                <div className='jobsTableContainer'>
                    <table class="table table-hover jobsTable">
                        <thead>
                            <tr>
                                <th className='JT-H1' scope="col">Applicant ID</th>
                                <th className='JT-H2' scope="col">Applicant Name</th>
                                <th className='JT-H4' scope="col">Application</th>
                                <th className='JT-H5' scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* GENERATE JOBS HERE */}
                            {renderApplicants()}






                        </tbody>
                    </table>
                </div>

            </div>

            <Outlet />
        </>
    )
}
