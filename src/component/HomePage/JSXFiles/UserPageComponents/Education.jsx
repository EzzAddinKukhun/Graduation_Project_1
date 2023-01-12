import React from 'react';
import '../../CSSFiles/UserCss/edu.css';
import { Fade } from 'react-reveal';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
export default function Education() {

  let [edus, setEdus] = useState([]);
  let [modalOpenID, setModalOpenID] = useState(0);
  let [modalDataObject, setModalDataObject] = useState({});
  let [userID, setUserID] = useState("");


  function setStartMonthEducation() {
    let monthsStart = "";
    if (Object.keys(modalDataObject).length != 0) {
      for (var i = 1; i < 13; i++) {

        if (modalDataObject.startDate.split("-")[1] == i) {
          monthsStart += `<option selected>${i}</option>`;
        }
        else {
          monthsStart += `<option>${i}</option>`;
        }
      }
    }
    document.getElementById("month_option_edit_start").innerHTML = monthsStart;
  }

  function setStartYearEducation() {
    let yearStart = "";
    if (Object.keys(modalDataObject).length != 0) {
      for (var i = 2000; i < 2024; i++) {

        if (modalDataObject.startDate.split("-")[0] == i) {
          yearStart += `<option selected>${i}</option>`;
        }
        else {
          yearStart += `<option>${i}</option>`;
        }
      }
    }
    document.getElementById("year_option_edit_start").innerHTML = yearStart;
  }

  function setEndMonthEducation() {
    let monthsEnd = "";
    if (Object.keys(modalDataObject).length != 0) {
      for (var i = 1; i < 13; i++) {

        if (modalDataObject.endDate.split("-")[1] == i) {
          monthsEnd += `<option selected>${i}</option>`;
        }
        else {
          monthsEnd += `<option>${i}</option>`;
        }
      }
    }
    document.getElementById("month_option_edit_end").innerHTML = monthsEnd;

  }

  function setEndYearEducation() {
    let yearEnd = "";
    if (Object.keys(modalDataObject).length != 0) {
      for (var i = 2000; i < 2024; i++) {

        if (modalDataObject.endDate.split("-")[0] == i) {
          yearEnd += `<option selected>${i}</option>`;
        }
        else {
          yearEnd += `<option>${i}</option>`;
        }
      }
    }
    document.getElementById("year_option_edit_end").innerHTML = yearEnd;
  }

  function setDegree() {
    let degreeChoices = "";
    if (Object.keys(modalDataObject).length != 0) {
      if (modalDataObject.degree == "Diploma") {
        degreeChoices = `
            <option selected value="Diploma">Diploma</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>`;

      }
      else if (modalDataObject.degree == "Bachelor's") {
        degreeChoices = `
        <option value="Diploma">Diploma</option>
        <option selected value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option value="PhD">PhD</option>`;

      }
      else if (modalDataObject.degree == "Master's") {
        degreeChoices = `
        <option value="Diploma">Diploma</option>
        <option value="Bachelor's">Bachelor's</option>
        <option selected value="Master's">Master's</option>
        <option value="PhD">PhD</option>`;

      }
      else if (modalDataObject.degree == "PhD") {
        degreeChoices = `
        <option value="Diploma">Diploma</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option selected value="PhD">PhD</option>`;

      }

      document.getElementById("scientificDegreeEdit").innerHTML = degreeChoices;

    }

  }


  let edu = [
    {
      "educationId": 1,
      "university": "MALAGA",
      "faculty": "IT",
      "specialization": "machine learing",
      "degree": "Bechlor's",
      "startDate": "2004-12-31",
      "endDate": "2006-6-12"
    },
    {
      "educationId": 2,
      "university": "University of Munich",
      "faculty": "IT",
      "specialization": "Data Engineering",
      "degree": "Master's",
      "startDate": "2004-12-31",
      "endDate": "2017-8-31"
    },
    {
      "educationId": 3,
      "university": "University of Zurich",
      "faculty": "IT",
      "specialization": "Embedded System",
      "degree": "PhD",
      "startDate": "2004-12-31",
      "endDate": "2015-12-31"
    }
  ]
  let counter = 0;
  async function getEdus(id) {
    fetch(`https://alumnibackend-fathifathallah.onrender.com/getEducation/${id}`, {
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
    let userString = localStorage.getItem("ACCOUNT");
    let user = JSON.parse(userString);
    let id = user.id;
    userID = id;
    setUserID(userID);
    getEdus(userID);


  }, []);

  return (
    <>
      <div className='outlet ms-auto mt-4'>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between educationCont   ps-5 pe-5">
            {edus.map((edu) => {
              return (<Fade delay={0}>
                <div className="education  mb-4  d-flex">
                  <div className="edu-year">
                    <section className="year-icon ">
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

                  <div onClick={() => {
                    setModalOpenID(edu.educationId);
                    modalDataObject = edu;
                    setModalDataObject(modalDataObject);
                    setStartMonthEducation();
                    setStartYearEducation();
                    setEndMonthEducation();
                    setEndYearEducation();
                    setDegree();

                  }} className="edit-edu-btn" data-bs-toggle="modal" data-bs-target="#modalForEducation">

                    <i className="fa-solid fa-pen"></i>
                  </div>
                </div>

              </Fade>);
            })}





          </div>

        </div>
      </div>

      {/* <!-- EDIT EDUCATION POP UP GENERATION  --> */}

      <div className="modal fade bd-example-modal-lg" id="modalForEducation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <label className='mb-2' for="universityEdit">University</label>
                  <input type="text" class="form-control" id="universityEdit" aria-describedby="fname" placeholder="University"
                    defaultValue={modalDataObject.university}
                  />
                </div>
                <div class="form-group mb-3">
                  <label className='mb-2' for="facultyEdit">Facullty</label>
                  <input type="text" class="form-control" id="facultyEdit" aria-describedby="fname" placeholder="University"
                    defaultValue={modalDataObject.faculty}
                  />
                </div>
                <div class="form-group mb-3">
                  <label className='mb-2' for="specializationEdit">Specialization</label>
                  <input type="text" class="form-control" id="specializationEdit" aria-describedby="Specialization" placeholder="Specialization"
                    defaultValue={modalDataObject.specialization}
                  />
                </div>
                <div className="field-form w-100 mb-3 ">
                  <label for="scientificDegreeEdit" class="form-label">Scientific Degree</label>
                  <div className="select-div w-100 ">
                    <select id="scientificDegreeEdit" className='state-option-settings'>
                    </select>
                  </div>

                </div>
                <div class="form-group mb-3">
                  <label className='mb-2' for="startDateStudy">Start Date</label>
                  <div className='d-flex'>
                    <div className="select-div w-50 ">
                      <select id="month_option_edit_start" className='state-option-settings'>
                        <option disabled>Month</option>

                      </select>

                    </div>
                    <div className="select-div w-50 ">
                      <select id="year_option_edit_start" className='state-option-settings'>
                        <option selected disabled>Year</option>


                      </select>

                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <label className='mb-2' for="endDateStudy">End Date</label>
                  <div className='d-flex'>
                    <div className="select-div w-50 ">
                      <select id="month_option_edit_end" className='state-option-settings'>
                        <option selected disabled>Month</option>

                      </select>

                    </div>
                    <div className="select-div w-50 ">
                      <select id="year_option_edit_end" className='state-option-settings'>
                        <option selected disabled>Year</option>

                      </select>

                    </div>
                  </div>
                  <small id="emailHelp" class="form-text text-danger">If you still a student, select an expected date for your graduation</small>

                </div>
              </section>

            </div>
            <div className="modal-footer">
              <button
                onClick={async () => {
                  let _id = userID;
                  let educationId = modalOpenID;
                  let data = {
                    _id,
                    educationId
                  }
                  await fetch(`https://alumnibackend-fathifathallah.onrender.com/deleteEducation/update`, {
                    method: 'DELETE',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  }).then(response => response.json())
                    .then(json => {
                      if (json.message == "success") {
                        Swal.fire("Good job!", "Education Deleted Successfully!", "success");
                        setTimeout(() => {
                          window.location.reload()
                        }, 2000)
                      }
                    });

                }}
                type="button" className="btn btn-danger">Delete Education</button>
              <button type="button" className="btn btn-primary"
                onClick={async () => {

                  var university = document.getElementById("universityEdit").value;
                  var faculty = document.getElementById("facultyEdit").value;
                  var specialization = document.getElementById("specializationEdit").value;
                  var degree = document.getElementById("scientificDegreeEdit").value;
                  var month_option_edit_start = document.getElementById("month_option_edit_start").value;
                  var year_option_edit_start = document.getElementById("year_option_edit_start").value;
                  var month_option_edit_end = document.getElementById("month_option_edit_end").value;
                  var year_option_edit_end = document.getElementById("year_option_edit_end").value;
                  let _id = userID;
                  let educationId = modalOpenID;



                  var data = {
                    _id,
                    educationId,
                    university,
                    faculty,
                    specialization,
                    degree,
                    startDate: year_option_edit_start + "-" + month_option_edit_start,
                    endDate: year_option_edit_end + "-" + month_option_edit_end
                  }

                  console.log(data);

                  await fetch(`https://alumnibackend-fathifathallah.onrender.com/changeEducation/update`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  }).then(response => response.json())
                    .then(() => {

                      Swal.fire("Good job!", "Your Education information edited successfully!", "success");


                    });
                }}

              >Save changes</button>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}
