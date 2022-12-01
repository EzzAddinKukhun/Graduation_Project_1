import React from 'react'
import { Fade } from 'react-reveal';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Positions() {
    let [pos, setPos] = useState([]);
    async function getPos() {
        fetch("http://localhost:5000/getPositions/637244067f8eb54bbde72295")

            .then(response => response.json())
            .then(json => {
                setPos(json.positions);
            });
    }

    useEffect(() => {
        getPos();
    }, []);
    return (
        <>
            <div className='outlet ms-auto mt-4'>
                <div className="container">
                    <div className="row justify-content-around">
                        {pos.map((pos) => {
                            <Fade delay={0}>
                                <div className="education col-md-5 mb-4  d-flex">
                                    <div className="edu-year">
                                        <section className="year-icon">
                                            <i class="fa-solid fa-briefcase"></i>
                                            <h5 className='mt-3'><b>{pos.startDate.split("-")[0]}</b></h5>
                                        </section>
                                    </div>
                                    <div className="edu-description p-4">
                                        <h5 className='organization'><b>{pos.company}</b></h5>
                                        <h5 className='study'>{pos.positionName}</h5>
                                    </div>
                                    <div className="edit-edu-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >

                                        <i className="fa-solid fa-pen"></i>
                                    </div>
                                </div>

                            </Fade>
                        })}




                    </div>

                </div>
            </div>

            {/* <!-- EDIT POSITION POP UP GENERATION  --> */}

            {pos.map((pos) => {
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
                                        <input type="text" class="form-control" id="userNameEdit" aria-describedby="fname" placeholder="Company"
                                            value={pos.company}
                                        />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label className='mb-2' for="startDateExp">Start Date</label>
                                        <div className='d-flex'>
                                            <div className="select-div w-50 ">
                                                <select id="month_option" className='state-option-settings'>
                                                    <option selected disabled>Month</option>
                                                    {(() => {
                                                        let months = [];
                                                        for (var i = 1; i < 13; i++) {
                                                            pos.startDate.split("-")[1] === i ?
                                                                months.push(<option selected>{i}</option>) :
                                                                months.push(<option >{i}</option>)
                                                        }
                                                        return months;
                                                    })()}
                                                </select>

                                            </div>
                                            <div className="select-div w-50 ">
                                                <select id="state_option" className='state-option-settings'>
                                                    <option selected disabled>Year</option>
                                                    {(() => {
                                                        let years = [];
                                                        for (var i = 1990; i < 2023; i++) {
                                                            pos.startDate.split("-")[0] === i?
                                                            years.push(<option selected >{i}</option>):
                                                            years.push(<option >{i}</option>)
                                                        }
                                                        return years;
                                                    })()}

                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label className='mb-2' for="PositionName">Position Name</label>
                                        <input type="text" class="form-control" id="PositionName" aria-describedby="PositionName" placeholder="Position Name" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label className='mb-2' for="experienceDetails">Position Details</label>
                                        <textarea class="form-control" id="experienceDetails" rows="3">
                                            {pos.positionDetails}
                                        </textarea>
                                    </div>


                                </section>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            })}



        </>
    )
}
