import React from 'react';
import '../../CSSFiles/UserCss/edu.css';
import { Fade } from 'react-reveal';
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';

export default function Education() {
  return (
    <>
      <div className='outlet ms-auto mt-4'>
        <div className="container">
          <div className="row justify-content-around">
            <Fade delay={0}>
              <div className="education col-md-5 mb-4  d-flex">
                <div className="edu-year">
                  <section className="year-icon">
                    <i className="fa-solid fa-building-columns"></i>
                    <h5 className='mt-3'><b>2018-2023</b></h5>
                  </section>
                </div>
                <div className="edu-description p-4">
                  <h5 className='organization'><b>An-Najah National University</b></h5>
                  <h5 className='study'>Engineering & IT</h5>
                  <h6 className='study'>Computer Engineering</h6>
                  <h6 className='degree'><b>Bachaleros</b></h6>
                </div>
                <div className="edit-edu-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >

                  <i className="fa-solid fa-pen"></i>
                </div>
              </div>

            </Fade>
            <Fade delay={1000}>
              <div className="education col-md-5 mb-4  d-flex">
                <div className="edu-year">
                  <section className="year-icon">
                    <i className="fa-solid fa-building-columns"></i>
                    <h5 className='mt-3'><b>2017-2018</b></h5>
                  </section>
                </div>
                <div className="edu-description p-4">
                  <h5 className='organization'><b>An-Najah National University</b></h5>
                  <h5 className='study'>Engineering & IT</h5>
                  <h6 className='study'>Computer Engineering</h6>
                  <h6 className='degree'><b>Bachaleros</b></h6>
                </div>
                <div className="edit-edu-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >

                  <i className="fa-solid fa-pen"></i>
                </div>
              </div>

            </Fade>
           



          </div>

        </div>
      </div>

      {/* <!-- EDIT EDUCATION POP UP GENERATION  --> */}
      <div className="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"><b>Education Edit</b></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span data-bs-dismiss="modal" aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <section className='settings-tab settings-tab-edit h-100 w-100'>
                <div class="form-group mb-3">
                  <label className='mb-2' for="userNameEdit">University</label>
                  <input type="text" class="form-control" id="userNameEdit" aria-describedby="fname" placeholder="University" />
                </div>
                <div className="field-form w-100 mb-3 ">
                  <label for="firstNameTextField" class="form-label">Faculty</label>
                  <div className="select-div w-100 ">
                    <select id="state_option" className='state-option-settings'>
                      <option selected disabled>Select Your Faculty</option>
                      <option value="Engineering & IT">Engineering & IT</option>
                      <option value="Science">Science</option>
                      <option value="Medicine">Medicine</option>
                      <option value="Physical Education">Physical Education</option>
                      <option value="Litreatures">Litreatures</option>
                      <option selected value="Economic">Economic</option>
                      <option value="Public Relationships">Public Relationships</option>
                      <option value="Arts">Arts</option>

                    </select>

                  </div>

                </div>
                <div class="form-group mb-3">
                  <label className='mb-2' for="Specialization">Specialization</label>
                  <input type="text" class="form-control" id="Specialization" aria-describedby="Specialization" placeholder="Specialization" />
                </div>
                <div className="field-form w-100 mb-3 ">
                  <label for="firstNameTextField" class="form-label">Scientific Degree</label>
                  <div className="select-div w-100 ">
                    <select id="state_option" className='state-option-settings'>
                      <option selected disabled>Select Your Degree</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor">Bachelor </option>
                      <option value="Master">Master</option>
                      <option value="PHd">PHd</option>


                    </select>

                  </div>

                </div>
                <div class="form-group mb-3">
                  <label className='mb-2' for="startDateStudy">Start Date</label>
                  <div className='d-flex'>
                    <div className="select-div w-50 ">
                      <select id="month_option" className='state-option-settings'>
                        <option selected disabled>Month</option>
                        {(() => {
                          let months = [];
                          for (var i = 1; i < 13; i++) {
                            months.push(<option>{i}</option>);
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
                            years.push(<option>{i}</option>);
                          }
                          return years;
                        })()}

                      </select>

                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <label className='mb-2' for="endDateStudy">End Date</label>
                  <div className='d-flex'>
                    <div className="select-div w-50 ">
                      <select id="month_option" className='state-option-settings'>
                        <option selected disabled>Month</option>
                        {(() => {
                          let months = [];
                          for (var i = 1; i < 13; i++) {
                            months.push(<option>{i}</option>);
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
                            years.push(<option>{i}</option>);
                          }
                          return years;
                        })()}

                      </select>

                    </div>
                  </div>
                  <small id="emailHelp" class="form-text text-danger">If you still a student, select an expected date for your graduation</small>

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


    </>
  )
}
