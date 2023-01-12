import React, { useState } from 'react'
import Combobox from "react-widgets/Combobox";
import Swal from 'sweetalert2';


export default function NewJob() {

    let [jobType, setJobType] = useState("");
    let [requiredSkills, setRequiredSkills] = useState([]);
    let [preferredExperience, setPreferredExperience] = useState([]);

    return (
        <>
            <div className='outlet ms-auto'>
                <div className="job-info-part-1">
                    <h2>Employment <span className='span-style'><b>Information</b></span></h2>
                    <div className=" container pt-4">
                        <div className="row">
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-font"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Job Name</label>
                                    <input type="text" class="form-control" id="jobName"
                                        placeholder="Job Name" />
                                </div>
                            </div>

                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i className="fa-solid fa-industry"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Industry</label>
                                    <input type="text" class="form-control" id="jobIndustry" aria-describedby="emailHelp"
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
                                        placeholder="Experience" />
                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i className="fa-solid fa-briefcase"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Job Type</label>
                                    <Combobox onChange={(e) => {
                                        setJobType(e);
                                    }} defaultValue="Full Time" data={["Full Time", "Part Time", "Volunteer", "Freelance", "Internship"]} />

                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-calendar-days"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Post Date</label>
                                    <input type="date" class="form-control" id="jobPostDate"
                                    />
                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-calendar-days"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Deadline</label>
                                    <input type="date" id="jobDeadline" class="form-control" placeholder="City" />
                                </div>

                            </div>



                        </div>
                    </div>
                </div>


                <div className="job-info-part-2">
                    <h2>Job <span className='span-style'><b>Overview</b></span></h2>
                    <div className=" container pt-3">
                        <div className="row">
                            <div class="mb-3">
                                <textarea rows="6" id="jobOverView" type="" placeholder='Write an over view about this job..' class="form-control" aria-describedby="emailHelp"></textarea>
                            </div>
                        </div>
                    </div>
                </div>


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
                                            requiredSkills.push(skill);
                                            setRequiredSkills(requiredSkills);
                                            requiredSkills.map((skill) => {
                                                skillsConcatenate += `<li>${skill}</li>`
                                            })
                                            skillContainer.innerHTML = skillsConcatenate;
                                        }}
                                    >Add  </button>
                                </div>
                            </div>
                            <div id="skill-point-container">
                                <ul id="skillList" >

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

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
                                            preferredExperience.push(skill);
                                            setPreferredExperience(preferredExperience);
                                            preferredExperience.map((skill) => {
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

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div className=' addJobContainer'>
                    <button
                        onClick={async () => {
                            let jobName = document.getElementById("jobName").value;
                            let industry = document.getElementById("jobIndustry").value;
                            let jobLevel = document.getElementById("jobLevel").value;
                            let salary = document.getElementById("jobSalary").value;
                            let experience = document.getElementById("jobExperience").value;
                            let postDate = document.getElementById("jobPostDate").value;
                            let deadline = document.getElementById("jobDeadline").value;
                            let jobOverview = document.getElementById("jobOverView").value;
                            let dataLocal = localStorage.getItem("ACCOUNT"); 
                            let dataParsed = JSON.parse(dataLocal); 
                            let orginizationId = dataParsed.id; 


                            let data = {
                                orginizationId,
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
                            console.log(data)


                            await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/addNewJob`, {
                                method: 'PUT',
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                }
                            }).then(response => response.json())
                                .then(json => {
                                    if (json.message == "success") {
                                        Swal.fire("Good job!", "The Job is published successfully!", "success");

                                    }
                                    else{
                                        Swal.fire("Oh No!", "There is an error, try to republish the job!", "error");

                                    }
                                   

                                });





                        }} className='addJob'>
                        Add Job
                    </button>
                </div>

            </div>

        </>
    )
}
