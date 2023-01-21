import React from 'react'
import { useState } from 'react';
import Combobox from "react-widgets/Combobox";
import Swal from 'sweetalert2';

export default function NewScholar() {
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
                                    <input type="text" class="form-control" id="scolarshipName"
                                        placeholder="Scholarship  Name" />
                                </div>
                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-calendar-days"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Post Date</label>
                                    <input type="date" class="form-control" id="postDate"
                                    />
                                </div>

                            </div>
                            <div class="form-group mb-3 col-md-6 d-flex">
                                <div className='me-3 job-symbol'>
                                    <i class="fa-solid fa-calendar-days"></i>
                                </div>
                                <div className='w-100'>
                                    <label className='mb-2' for="firstNameEdit">Deadline</label>
                                    <input type="date" class="form-control" placeholder="deadline" id="deadline" />
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
                                            <textarea rows="6" type="email" placeholder='Write an over view about this Scholarship ..' class="form-control" id="scholarshipDescription" aria-describedby="emailHelp"></textarea>
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
                                <textarea rows="6" type="email" placeholder='Write an over view about this job..' class="form-control" id="scholarshipOverview" aria-describedby="emailHelp"></textarea>
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
                <div className='ms-auto submitScholar'>
                    <div>
                        <button
                            onClick={async () => {

                                let scolarshipName = document.getElementById("scolarshipName").value;
                                let postDate = document.getElementById("postDate").value;
                                let deadline = document.getElementById("deadline").value;
                                let scholarshipDescription = document.getElementById("scolarshipName").value;
                                let scholarshipOverview = document.getElementById("scholarshipOverview").value;
                                console.log(a);
                                let scholarshipMissions = [];

                                a.map((mission, key) => {
                                    scholarshipMissions[key] = mission.skillPointInput;
                                })

                                let dataFromLocalStorage = localStorage.getItem("ACCOUNT");
                                let jsonData = JSON.parse(dataFromLocalStorage);
                                let universityId = jsonData.id;


                                let data = {
                                    universityId,
                                    scolarshipName,
                                    postDate,
                                    deadline,
                                    scholarshipDescription,
                                    scholarshipOverview,
                                    scholarshipMissions
                                }
                                console.log(data)


                                await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/AddScholarships`, {
                                    method: 'PUT',
                                    body: JSON.stringify(data),
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                }).then(response => response.json())
                                    .then(json => {
                                        if (json.message == "success") {
                                            Swal.fire("Good job!", "Scholarship added successfully!", "success");
                                            setTimeout(()=>{
                                                window.location.reload(); 
                                            },2000)

                                        }
                                        else {
                                            Swal.fire("Oh No!", "There is an error, try to republish the job!", "error");

                                        }


                                    });
                            }}
                        >Add</button>
                    </div>
                </div>
            </div>


        </>
    )
}
