import React from 'react';
import '../../CSSFiles/UserCss/edu.css';
import { Fade } from 'react-reveal';
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';

export default function Education() {

  let [edus, setEdus] = useState([]);
  let counter  = 0 ;
  async function getEdus() {
    fetch("http://localhost:5000/getEducation/637244067f8eb54bbde72295",{
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setEdus(json.education);
      });
  }

  useEffect(() => {
    getEdus();
  }, []);

  return (
    <>
      <div className='outlet ms-auto mt-4'>
        <div className="container">
          <div className="row justify-content-around">
            {edus.map((edu) => {
             return (<Fade delay={0}>
                <div className="education col-md-5 mb-4  d-flex">
                  <div className="edu-year">
                    <section className="year-icon">
                      <i className="fa-solid fa-building-columns"></i>
                      <h5 className='mt-3'><b>{edu.endDate.split("-")[0]}-{edu.startDate.split("-")[0]}</b></h5>
                    </section>
                  </div>
                  <div className="edu-description p-4">
                    <h5 className='organization'><b>{edu.university}</b></h5>
                    <h5 className='study'>{edu.faculty}</h5>
                    <h6 className='study'>{edu.specialization}</h6>
                    <h6 className='degree'><b>{edu.degree}</b></h6>
                  </div>
                  <div className="edit-edu-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >

                    <i className="fa-solid fa-pen"></i>
                  </div>
                </div>

              </Fade>); 
            })}





          </div>

        </div>
      </div>

      {/* <!-- EDIT EDUCATION POP UP GENERATION  --> */}

      {
        edus.map((edu) => {
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
                      <input type="text" class="form-control" id="userNameEdit" aria-describedby="fname" placeholder="University"
                        value={edu.university}
                      />
                    </div>
                    <div class="form-group mb-3">
                      <label className='mb-2' for="userNameEdit">Facullty</label>
                      <input type="text" class="form-control" id="userNameEdit" aria-describedby="fname" placeholder="University"
                        value={edu.faculty}
                      />
                    </div>
                    <div class="form-group mb-3">
                      <label className='mb-2' for="Specialization">Specialization</label>
                      <input type="text" class="form-control" id="Specialization" aria-describedby="Specialization" placeholder="Specialization"
                        value={edu.specialization}
                      />
                    </div>
                    <div className="field-form w-100 mb-3 ">
                      <label for="firstNameTextField" class="form-label">Scientific Degree</label>
                      <div className="select-div w-100 ">
                        <select id="state_option" className='state-option-settings'>
                          {edu.degree === "Diploma" ?
                            <>
                              <option disabled>Select Your Degree</option>
                              <option selected value="Diploma">Diploma</option>
                              <option value="Bachelor's">Bachelor's</option>
                              <option value="Master">Master</option>
                              <option value="PhD">PhD</option>
                            </>
                            :""
                          }
                          {edu.degree === "Bachelor's" ?
                            <>
                              <option disabled>Select Your Degree</option>
                              <option  value="Diploma">Diploma</option>
                              <option selected value="Bachelor's">Bachelor's</option>
                              <option value="Master">Master</option>
                              <option value="PhD">PhD</option>
                            </>
                            :""
                          }
                          {edu.degree === "Master" ?
                            <>
                              <option disabled>Select Your Degree</option>
                              <option  value="Diploma">Diploma</option>
                              <option value="Bachelor's">Bachelor's</option>
                              <option selected value="Master">Master</option>
                              <option value="PhD">PhD</option>
                            </>
                            :""
                          }
                          {edu.degree === "PhD" ?
                            <>
                              <option disabled>Select Your Degree</option>
                              <option  value="Diploma">Diploma</option>
                              <option value="Bachelor's">Bachelor's</option>
                              <option value="Master">Master</option>
                              <option selected value="PhD">PhD</option>
                            </>
                            :""
                          }
                          {edu.degree === "" ?
                            <>
                              <option selected disabled>Select Your Degree</option>
                              <option value="Diploma">Diploma</option>
                              <option value="Bachelor's">Bachelor's</option>
                              <option value="Master">Master</option>
                              <option value="PhD">PhD</option>
                            </>
                            :""
                          }
                          

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
                                edu.startDate.split("-")[1] === i?
                                months.push(<option selected>{i}</option>):
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
                                edu.startDate.split("-")[0] === i?
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
                      <label className='mb-2' for="endDateStudy">End Date</label>
                      <div className='d-flex'>
                        <div className="select-div w-50 ">
                          <select id="month_option" className='state-option-settings'>
                            <option selected disabled>Month</option>
                            {(() => {
                              let months = [];
                              for (var i = 1; i < 13; i++) {
                                edu.endDate.split("-")[1] === i?
                                months.push(<option selected>{i}</option>):
                                months.push(<option >{i}</option>)                              }
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
                                edu.endDate.split("-")[0] === i?
                                years.push(<option selected >{i}</option>):
                                years.push(<option >{i}</option>)                              }
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
        })
      }



    </>
  )
}
