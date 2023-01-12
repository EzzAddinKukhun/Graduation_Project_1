import React from 'react'
import { Fade } from 'react-reveal';
import { Zoom } from 'react-reveal';
import coverApplyPage from '../../../../imgs/cover_apply.png';
import Combobox from "react-widgets/Combobox";
import Scroll from '../Scroll'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { data } from '../TopAdminComp/PieChart';

export default function JobAdminView() {
    const a = [];
    let [searchParam, setSearchParam] = useSearchParams();
    let [jobProfile, setJobProfile] = useState({});
    let [jobType, setJobType] = useState("");
    

    async function getJobProfile(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/getJob/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setJobProfile(json.job[0]);
           
            });
    }


    useEffect(() => {

        let id = searchParam.get('id');
        console.log(id);
        getJobProfile(id);
        

    }, [])
   

    return (
        <>
            <div className="outlet ms-auto">
                <Fade>
                    <div className="cover-page-apply-photo">
                        <img src={coverApplyPage} />
                    </div>
                </Fade>
                <div className="container p-4 personal-container">
                    <Fade delay={1500}>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h2>Employment <span className='span-style'><b>Information</b></span></h2>
                            </div>
                            <div>
                                <button
                                    onClick={async () => {

                                        let _id = jobProfile._id;
                                        let jobName = document.getElementById("jobName").value;
                                        let industry = document.getElementById("jobIndustry").value;
                                        let jobLevel = document.getElementById("jobLevel").value;
                                        let salary = document.getElementById("jobSalary").value;
                                        let experience = document.getElementById("jobExperience").value;
                                        let postDate = document.getElementById("jobPostDate").value;
                                        let deadline = document.getElementById("jobDeadline").value;
                                        let jobOverview = document.getElementById("jobOverView").value;
                                        let requiredSkills = jobProfile.requiredSkills; 
                                        let preferredExperience = jobProfile.preferredExperience; 
                                        let jobType = jobProfile.jobType; 

                                        let data = {
                                            _id,
                                            jobName,
                                            jobLevel,
                                            industry,
                                            salary,
                                            experience,
                                            jobType,
                                            postDate,
                                            deadline,
                                            jobOverview,
                                            requiredSkills,
                                            preferredExperience
                                        }

                                        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/updateJob`, {
                                            method: 'PUT',
                                            body: JSON.stringify(data),
                                            headers: {
                                                "Content-type": "application/json; charset=UTF-8"
                                            }
                                        }).then(response => response.json())
                                            .then(json => {
                                                if (json.message == "success") {
                                                    Swal.fire("Good job!", "The Job is updated successfully!", "success");

                                                }
                                                else {
                                                    Swal.fire("Oh No!", "There is an error, try to republish the job!", "error");

                                                }


                                            });




                                        console.log(data)

                                    }}

                                    className='job-apply-btn'>
                                    Save Edit
                                </button>
                            </div>
                        </div>
                    </Fade>
                    <div className="job-info-container mb-4">
                        <Fade delay={2000}>
                            <div className=" container pt-4">
                                <div className="row">
                                    <div class="form-group mb-3 col-md-6 d-flex">
                                        <div className='me-3 job-symbol'>
                                            <i class="fa-solid fa-font"></i>
                                        </div>
                                        <div className='w-100'>
                                            <label className='mb-2' for="firstNameEdit">Job Name</label>
                                            <input type="text" class="form-control" id="jobName"
                                                defaultValue={jobProfile.jobName} placeholder="Job Name" />
                                        </div>
                                    </div>

                                    <div class="form-group mb-3 col-md-6 d-flex">
                                        <div className='me-3 job-symbol'>
                                            <i className="fa-solid fa-industry"></i>
                                        </div>
                                        <div className='w-100'>
                                            <label className='mb-2' for="firstNameEdit">Industry</label>
                                            <input type="text" class="form-control" id="jobIndustry" aria-describedby="emailHelp"
                                                defaultValue={jobProfile.industry}
                                                placeholder="Industry" />
                                        </div>

                                    </div>

                                    <div class="form-group mb-3 col-md-6 d-flex">
                                        <div className='me-3 job-symbol'>
                                            <i className="fa-solid fa-user-tie"></i>
                                        </div>
                                        <div className='w-100'>
                                            <label className='mb-2' for="firstNameEdit">Job Level</label>
                                            <input type="text" class="form-control" id="jobLevel" aria-describedby="emailHelp"
                                                defaultValue={jobProfile.jobLevel}
                                                placeholder="Job Level" />
                                        </div>

                                    </div>

                                    <div class="form-group mb-3 col-md-6 d-flex">
                                        <div className='me-3 job-symbol'>
                                            <i class="fa-solid fa-dollar-sign"></i>
                                        </div>
                                        <div className='w-100'>
                                            <label className='mb-2' for="firstNameEdit">Salary</label>
                                            <input type="text" class="form-control" id="jobSalary"
                                                defaultValue={jobProfile.salary}
                                                placeholder="Salary" />
                                        </div>

                                    </div>

                                    <div class="form-group mb-3 col-md-6 d-flex">
                                        <div className='me-3 job-symbol'>
                                            <i className="fa-solid fa-medal"></i>
                                        </div>
                                        <div className='w-100'>
                                            <label className='mb-2' for="firstNameEdit">Experience</label>
                                            <input type="text" class="form-control" id="jobExperience" aria-describedby="emailHelp"
                                                defaultValue={jobProfile.experience}
                                                placeholder="Experience" />
                                        </div>

                                    </div>


                                    <div class="form-group mb-3 col-md-6 d-flex">
                                        <div className='me-3 job-symbol'>
                                            <i className="fa-solid fa-briefcase"></i>
                                        </div>
                                        <div className='w-100'>
                                            <label className='mb-2' for="firstNameEdit">Job Type</label>
                                            { jobProfile.jobType &&
                                            <Combobox
                                                onChange={(e) => {
                                                    jobProfile.jobType = e
                                                }}
                                                defaultValue={jobProfile.jobType} data={["Full Time", "Part Time", "Volunteer", "Freelance", "Internship"]} />
                                            }
                                        </div>
                                    </div>


                                    <div class="form-group mb-3 col-md-6 d-flex">
                                        <div className='me-3 job-symbol'>
                                            <i class="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className='w-100'>
                                            <label className='mb-2' for="firstNameEdit">Post Date</label>
                                            <input type="date" class="form-control" id="jobPostDate"
                                                defaultValue={jobProfile.postDate}

                                            />
                                        </div>

                                    </div>
                                    <div class="form-group mb-3 col-md-6 d-flex">
                                        <div className='me-3 job-symbol'>
                                            <i class="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className='w-100'>
                                            <label className='mb-2' for="firstNameEdit">Deadline</label>
                                            <input
                                                defaultValue={jobProfile.deadline}
                                                id="jobDeadline" type="date" class="form-control" placeholder="City" />
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </Fade>

                        <Fade delay={500}>
                            <div className="job-info-part-2">
                                <h2>Job <span className='span-style'><b>Overview</b></span></h2>
                                <div className=" container pt-3">
                                    <div className="row">
                                        <div class="mb-3">
                                            <textarea
                                            defaultValue={jobProfile.jobOverview}
                                             rows="6" type="email" placeholder='Write an over view about this job..' class="form-control" id="jobOverView" aria-describedby="emailHelp"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <Fade delay={500}>
                            <div className="job-info-part-3">
                                <h2><span className='span-style'><b>Essential Knowledge, Skills, and Experience</b></span></h2>
                                <div className=" container pt-3">
                                    <div className="row">
                                        <div className="add-skill-for-job d-flex">
                                            <div class="mb-3 me-1 w-90">
                                                <input placeholder='Add Essential Knowledge, Skill or and Experience..' type="email" class="form-control" id="addSkillPoint" aria-describedby="emailHelp" />
                                            </div>

                                            <div className='addJobSkillBtn'>
                                                <button
                                                    onClick={function () {
                                                        let skill = document.getElementById("addSkillPoint").value;
                                                        let skillContainer = document.getElementById("skillList");
                                                        let skillsConcatenate = "";
                                                        jobProfile.requiredSkills.push(skill);
                                                        jobProfile.requiredSkills.map((skill) => {
                                                            skillsConcatenate += `<li>${skill}</li>`
                                                        })
                                                        skillContainer.innerHTML = skillsConcatenate;

                                                    }}
                                                >Add  </button>
                                            </div>
                                        </div>
                                        <div id="skill-point-container">
                                            <ul id="skillList" >
                                                {
                                                    
                                                    jobProfile.requiredSkills?.map((skill) => {
                                                        return <li>{skill}</li>
                                                    })
                                                    
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <Fade delay={500}>
                            <div className="job-info-part-4">
                                <h2><span className='span-style'><b>Preferred Experience</b></span></h2>
                                <div className=" container pt-3">
                                    <div className="row">
                                        <div className="add-skill-for-job d-flex">
                                            <div class="mb-3 me-1 w-90">
                                                <input placeholder='Preferred Experience.. ' type="email" class="form-control" id="addPreferredSkillPoint" aria-describedby="emailHelp" />
                                            </div>

                                            <div className='addJobSkillBtn'>
                                                <button
                                                    onClick={function () {

                                                        let skill = document.getElementById("addPreferredSkillPoint").value;
                                                        let skillContainer = document.getElementById("preferredSkillsContainer");
                                                        let skillsConcatenate = "";
                                                        jobProfile.preferredExperience.push(skill);
                                                        jobProfile.preferredExperience.map((skill) => {
                                                            skillsConcatenate += `<li>${skill}</li>`
                                                        })

                                                        skillContainer.innerHTML = skillsConcatenate;
                                                        
                                                    }

                                                    }
                                                >Add  </button>
                                            </div>
                                        </div>
                                        <div id="skill-point">
                                            <ul className='d-block' id="preferredSkillsContainer">
                                                {
                                                    jobProfile.preferredExperience?.map((skill) => {
                                                        return <li>{skill}</li>
                                                    })
                                                }

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>


                    </div>
                </div>


            </div>
            <Scroll />
        </>
    )
}


