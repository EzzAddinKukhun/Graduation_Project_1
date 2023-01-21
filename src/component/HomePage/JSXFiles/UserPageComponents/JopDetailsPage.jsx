import React, { useEffect, useState } from 'react'
import '../../CSSFiles/UserCss/jobs.css'
import coverApplyPage from '../../../../imgs/cover_apply.png'
import { Fade, Zoom } from 'react-reveal';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function JopDetailsPage() {
    let [searchParam, setSearchParam] = useSearchParams();
    let [job, setJob] = useState({});
    let [org, setOrg] = useState({}); 


    async function getJobInformation(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/getJob/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setJob(json.job[0]);
                console.log(json.job[0])
                // console.log(json.json.jobs)
            });


    }

    async function getOrgInfo(channelID) {
        console.log(channelID)
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrgInfo/${channelID}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setOrg(json.orgInfo);
            });
    }



    useEffect(() => {
        let id = searchParam.get('id');
        let orgId = searchParam.get('orgId');
        getJobInformation(id);
        getOrgInfo(orgId)
        console.log(orgId);

    }, [])
    return (
        <>
            <div className="outlet ms-auto">
                <Fade>
                    <div className="cover-page-apply-photo">
                        <img src={coverApplyPage} />
                    </div>
                </Fade>
                <div className="container p-4 ">
                    <Fade delay={1500}>
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
                                            <h6>Posted At:{new Date(job.postDate).toLocaleDateString()}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="job-apply-title-child d-flex align-items-center justify-content-end  w-100">
                                <button
                                onClick={async ()=>{
                                    let userData = localStorage.getItem("ACCOUNT"); 
                                    let dataParsed = JSON.parse(userData); 
                                    let _id = dataParsed.id; 
                                    let jobId = job._id; 
                                

                                    let data = {
                                        _id,
                                        jobId
                                    }
                                    
                                    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/applyToJob`, {
                                            method: 'PUT',
                                            body: JSON.stringify(data),
                                            headers: {
                                                "Content-type": "application/json; charset=UTF-8"
                                            }
                                        }).then(response => response.json())
                                            .then(json => {

                                                if (json.message == "success"){
                                                    Swal.fire("Good Job", "Your Application Send Successfully", "success")

                                                }
                                                else if (json.message == "user cv needed"){ 
                                                    Swal.fire("Ops!", "Your CV needed", "error")  
                                                }

                                            


                                            });
                                }}
                                 className='job-apply-btn-final'>
                                    Apply Now!
                                </button>
                            </div>
                        </div>
                    </Fade>

                    <div className="job-info-container mb-4">
                        <div className="container personal-info">
                            <Zoom delay={1800}>
                                <h2 className='mb-4'><b><span className='span-style '>Employment </span></b> Information</h2>
                            </Zoom>
                            <div className="row flex-nowrap justify-content-around">
                                <Zoom delay={2000}>
                                    <div className="col-md-3">
                                        <div className="sign-up-field mb-4 d-flex flex-nowrap">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-industry"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="Industry" className="form-label">Industry</label>
                                                <h6 name="Industry"><b>{job.industry}</b></h6>
                                            </div>
                                        </div>

                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-dollar-sign"></i>
                                            </div>
                                            <div className="field-form ">
                                                <label for="Salary" className="form-label">Salary</label>
                                                <h6 name="Salary"><b>{job.salary}</b></h6>
                                            </div>

                                        </div>

                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-briefcase"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="JobType" className="form-label">Job Type</label>
                                                <h6 name="JobType"><b>{job.jobType}</b></h6>


                                            </div>
                                        </div>



                                    </div>
                                </Zoom>

                                <Zoom delay={2500}>

                                    <div className="col-md-3">
                                        <div className="sign-up-field mb-4 d-flex">
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

                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-medal"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="lastNameTextField" className="form-label">Experience</label>
                                                <h6 name="phone"><b>
                                                    {job.experience}</b></h6>

                                            </div>
                                        </div>

                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-clock"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="Deadline" className="form-label">Deadline</label>
                                                <h6 name="Deadline"><b>{new Date(job.deadline).toLocaleDateString()}</b></h6>
                                            </div>
                                        </div>

                                    </div>
                                </Zoom>

                                <Fade delay={2700}>


                                    <div className="job-address-info b-r col-md-4 text-light  p-3">
                                        <h2><b>Our Location</b></h2>
                                        <ul>
                                            <li>Location: {org.country + "/" + org.city} </li>
                                            <li>Phone: {org.expertPhoneNumber}</li>
                                            <li>Email: {org.expertEmailAddress}</li>
                                        </ul>
                                    </div>

                                </Fade>
                            </div>
                        </div>
                    </div>

                    <Fade>
                        <div className="skills container mb-4 ">
                            <h2 className='mb-2 p-3'><b><span className='span-style '>Essential Knowledge, Skills, and Experience</span></b></h2>
                            <ul className='ps-5'>
                                {
                                    job.requiredSkills?.map((skill) => {
                                        return (
                                            <li>{skill}</li>
                                        );
                                    })
                                }

                            </ul>
                        </div>
                    </Fade>

                    <Fade delay={1000}>
                        <div className="skills container mb-4 ">
                            <h2 className='mb-2 p-3'><b><span className='span-style '>Preferred Experience</span></b></h2>
                            <ul className='ps-5'>
                                {
                                    job.preferredExperience?.map((skill) => {
                                        return (
                                            <li>{skill}</li>
                                        );
                                    })
                                }

                            </ul>
                        </div>
                    </Fade>
                </div>
            </div>

        </>
    )
}
