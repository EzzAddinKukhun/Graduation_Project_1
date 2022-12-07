import React, { useState } from 'react'
import Combobox from "react-widgets/Combobox";


export default function NewJob() {
    let [skillPt, addSkillPt] = useState([]);
    const a = [];
    const b = [];
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
                                    <input type="text" class="form-control" id="city"
                                        placeholder="Job Name" />
                                </div>
                            </div>

                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i className="fa-solid fa-industry"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Industry</label>
                                    <input type="text" class="form-control" id="city" aria-describedby="emailHelp"
                                        placeholder="Industry" />
                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i className="fa-solid fa-user-tie"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Job Level</label>
                                    <input type="text" class="form-control" id="city" aria-describedby="emailHelp"
                                        placeholder="Job Level" />
                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-dollar-sign"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Salary</label>
                                    <input type="text" class="form-control" id="city"
                                        placeholder="Salary" />
                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i className="fa-solid fa-medal"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Experience</label>
                                    <input type="text" class="form-control" id="city" aria-describedby="emailHelp"
                                        placeholder="Experience" />
                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i className="fa-solid fa-briefcase"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Job Type</label>
                                    <Combobox defaultValue="Full Time" data={["Full Time", "Part Time", "Volunteer", "Freelance", "Internship"]} />

                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-calendar-days"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Post Date</label>
                                    <input type="date" class="form-control" id="city"
                                    />
                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-calendar-days"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Deadline</label>
                                    <input type="date" class="form-control" placeholder="City" />
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
                                <textarea rows="6" type="email" placeholder='Write an over view about this job..' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
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
                                            var skillPointInput = document.getElementById("addSkillPoint").value;
                                            var skillPoint = document.getElementById("skill-point");
                                            var obj = {
                                                skillPointInput : skillPointInput
                                            }
                                             a.push (obj);         
                                             var liString = ""; 
                                             a.map((element)=>{
                                                liString += `<li>${element.skillPointInput}</li>`
                                             });                          
                                             skillPoint.innerHTML = liString

                                        }}
                                    >Add  </button>
                                </div>
                            </div>
                            <div id="skill-point">
                                <ul id="skill-point">
                                   
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
                                    <input placeholder='Preferred Experience.. ' type="email" class="form-control" id="addSkillPoint" aria-describedby="emailHelp" />
                                </div>

                                <div className='addJobSkillBtn'>
                                    <button
                                        onClick={function () {
                                            var skillPointInput = document.getElementById("addSkillPoint").value;
                                            var skillPoint = document.getElementById("skill-point");
                                            var obj = {
                                                skillPointInput : skillPointInput
                                            }
                                             a.push (obj);         
                                             var liString = ""; 
                                             a.map((element)=>{
                                                liString += `<li>${element.skillPointInput}</li>`
                                             });                          
                                             skillPoint.innerHTML = liString

                                        }}
                                    >Add  </button>
                                </div>
                            </div>
                            <div id="skill-point">
                                <ul className='d-block' id="skill-point">
                                 
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
