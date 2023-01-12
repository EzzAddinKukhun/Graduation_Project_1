import React from 'react'
import { Fade } from 'react-reveal';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

export default function Positions() {
    let [pos, setPos] = useState([]);
    let [modalOpenID, setModalOpenID] = useState(0);
    let [modalDataObject, setModalDataObject] = useState({});
    let [userID, setUserID] = useState("");


    // let positions = [
    //     {
    //         "positionId": 1,
    //         "company": "AI and MAcahine Learningg",
    //         "startDate": "2004-12-31",
    //         "positionName": "Back End Engineer",
    //         "positionDetails": "THIS IS A NEW POISTION AS AN AI ENGINEER"
    //     },
    //     {
    //         "positionId": 2,
    //         "company": "Harri",
    //         "startDate": "2004-12-31",
    //         "positionName": "Back End Engineer",
    //         "positionDetails": "THIS IS A NEW POISTION AS BACK END ENGINEER"
    //     }
    // ]

    async function getPos(id) {
        fetch(`https://alumnibackend-fathifathallah.onrender.com/getPositions/${id}`)

            .then(response => response.json())
            .then(json => {
                setPos(json.positions);
            });
    }

    function setEndMonthEducation() {
        let monthsEnd = "";
        if (Object.keys(modalDataObject).length != 0) {
            for (var i = 1; i < 13; i++) {

                if (modalDataObject.startDate.split("-")[1] == i) {
                    monthsEnd += `<option selected>${i}</option>`;
                }
                else {
                    monthsEnd += `<option>${i}</option>`;
                }
            }
        }
        document.getElementById("month_option").innerHTML = monthsEnd;

    }

    function setEndYearEducation() {
        let yearEnd = "";
        if (Object.keys(modalDataObject).length != 0) {
            for (var i = 2000; i < 2024; i++) {

                if (modalDataObject.startDate.split("-")[0] == i) {
                    yearEnd += `<option selected>${i}</option>`;
                }
                else {
                    yearEnd += `<option>${i}</option>`;
                }
            }
        }
        document.getElementById("year_option").innerHTML = yearEnd;
    }

    useEffect(() => {
        let userString = localStorage.getItem("ACCOUNT");
        let user = JSON.parse(userString);
        let id = user.id;
        userID = id;
        setUserID(userID);
        getPos(userID);
    }, []);

    return (
        <>
            {console.log(userID)}
            <div className='outlet ms-auto mt-4'>
                <div className="container">
                    <div className="row justify-content-around">
                        {pos.map((pos) => {
                            return (
                                <Fade delay={0}>
                                    <div className="education col-md-5 mb-4  d-flex">
                                        <div className="edu-year">
                                            <section className="year-icon year-icon-pos">
                                                <i class="fa-solid fa-briefcase"></i>
                                                <h5 className='mt-3 yearPos'><b>{pos.startDate.split("-")[0]}</b></h5>
                                            </section>
                                        </div>
                                        <div className="edu-description p-4">
                                            <h5 className='organization'><b>{pos.company}</b></h5>
                                            <h5 className='study'>{pos.positionName}</h5>
                                        </div>
                                        <div
                                            onClick={() => {
                                                setModalOpenID(pos.positionId);
                                                modalDataObject = pos;
                                                console.log(modalDataObject)
                                                setModalDataObject(modalDataObject);
                                                setEndMonthEducation();
                                                setEndYearEducation();
                                            }}
                                            className="edit-edu-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >

                                            <i className="fa-solid fa-pen"></i>
                                        </div>
                                    </div>
                                </Fade>
                            );
                        })}
                    </div>
                </div>
            </div>




            <div className="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Edit This Position</b></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span data-bs-dismiss="modal" aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <section className='settings-tab settings-tab-edit h-100 w-100'>
                                <div class="form-group mb-3">
                                    <label className='mb-2' for="userNameEdit">Company</label>
                                    <input type="text" class="form-control" id="companyEdit" aria-describedby="fname" placeholder="Company"
                                        defaultValue={modalDataObject.company}
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <label className='mb-2' for="startDateExp">Start Date</label>
                                    <div className='d-flex'>
                                        <div className="select-div w-50 ">
                                            <select id="month_option" className='state-option-settings'>
                                                <option selected disabled>Month</option>
                                            </select>

                                        </div>
                                        <div className="select-div w-50 ">
                                            <select id="year_option" className='state-option-settings'>
                                                <option selected disabled>Year</option>

                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label className='mb-2' for="PositionName">Position Name</label>
                                    <input
                                        defaultValue={modalDataObject.positionName}
                                        type="text" class="form-control" id="PositionNameEdit" aria-describedby="PositionName" placeholder="Position Name" />
                                </div>
                                <div class="form-group mb-3">
                                    <label className='mb-2' for="experienceDetails">Position Details</label>
                                    <textarea defaultValue={modalDataObject.positionDetails} class="form-control" id="posDetailsEdit" rows="3">

                                    </textarea>
                                </div>


                            </section>

                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={async () => {
                                    let _id = userID;
                                    let positionId = modalOpenID;
                                    let data = {
                                        _id,
                                        positionId
                                    }
                                    await fetch(`https://alumnibackend-fathifathallah.onrender.com/deletePosition/update`, {
                                        method: 'DELETE',
                                        body: JSON.stringify(data),
                                        headers: {
                                            "Content-type": "application/json; charset=UTF-8"
                                        }
                                    }).then(response => response.json())
                                        .then(json => {
                                            if (json.message == "success") {
                                                Swal.fire("Good job!", "Position Deleted Successfully!", "success");
                                                setTimeout(() => {
                                                    window.location.reload()
                                                }, 2000)
                                            }
                                        });

                                }}
                                type="button" className="btn btn-danger">Delete Position</button>
                            <button
                                onClick={async () => {

                                    var company = document.getElementById("companyEdit").value;
                                    var msdate = document.getElementById("month_option").value;
                                    var ysdate = document.getElementById("year_option").value;
                                    var positionName = document.getElementById("PositionNameEdit").value;
                                    var positionDetails = document.getElementById("posDetailsEdit").value;
                                    let positionId = modalOpenID;
                                    let _id = userID;

                                    var data = {
                                        _id,
                                        positionId,
                                        company,
                                        startDate: ysdate + "-" + msdate,
                                        positionName,
                                        positionDetails
                                    }

                                    await fetch(`https://alumnibackend-fathifathallah.onrender.com/changePosition/update`, {
                                        method: 'PUT',
                                        body: JSON.stringify(data),
                                        headers: {
                                            "Content-type": "application/json; charset=UTF-8"
                                        }
                                    }).then(response => response.json())
                                        .then(() => {
                                            Swal.fire("Good job!", "The Selected Position Updated successfully!", "success");
                                            setTimeout(() => {
                                                window.location.reload();
                                            }, 2000)
                                        });
                                }}

                                type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
