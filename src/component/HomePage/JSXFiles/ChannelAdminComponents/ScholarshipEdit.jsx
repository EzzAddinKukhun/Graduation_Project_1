import React from 'react'
import { useState } from 'react';
import Combobox from "react-widgets/Combobox";

export default function ScholarshipEdit() {
    let [skillPt, addSkillPt] = useState([]);
    const a = [];
    const b = [];
    return (
        <>
            <div className='ms-auto outlet'>
                <div className="job-info-part-1 mb-3">
                    <h2>Scholarship <span className='span-style'><b>Information</b></span></h2>
                    <div className=" container pt-4">
                        <div className="row">
                            <div class="form-group mb-3 col-md-12 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-font"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Scholarship Name</label>
                                    <input type="text" class="form-control" id="city"
                                        placeholder="Job Name" />
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

                            <div class="form-group mb-3 col-md-12 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-font"></i>
                                </div>
                                <div className=" w-100">
                                    <label className='mb-2' for="firstNameEdit">Scholarship Description</label>

                                    <div className="row">
                                        <div class="mb-3">
                                            <textarea rows="6" type="email" placeholder='Write an over view about this job..' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <div className="job-info-part-2">
                    <h2> <span className='span-style'><b>Scholarship</b> Overview</span></h2>
                    <div className=" container pt-3">
                        <div className="row">
                            <div class="mb-3">
                                <textarea rows="6" type="email" placeholder='Write an over view about this job..' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="job-info-part-3">
                    <h2><span className='span-style'><b>Scholarship Missions</b></span></h2>
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
                                                skillPointInput: skillPointInput
                                            }
                                            a.push(obj);
                                            var liString = "";
                                            a.map((element) => {
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


            </div>

        </>
    )
}
