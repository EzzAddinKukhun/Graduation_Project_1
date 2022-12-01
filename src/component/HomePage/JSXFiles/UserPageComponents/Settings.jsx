import React from 'react'
import '../../CSSFiles/UserCss/userprofile.css'
import { Link } from 'react-router-dom';
import '../../CSSFiles/UserCss/settings.css';
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import Profile from '../../../../imgs/profile.jpg';



export default function Settings() {
  let [stateItem, setStateItem] = useState([]);
  let [stateArrive, setIfStateArrive] = useState(false);
  let [months, setMonths] = useState([]);
  let [year, setYear] = useState([]);
  const [fileData, setFileData] = useState();

  

  async function getStateItems() {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "dFJHVUZZMm56M1AwT0FTU0ZERGRCU0hhbFVoNUdGWVdwQ3IxM1J6ag==");

    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then(response => response.text())
      .then(result => {
        setStateItem(JSON.parse(result));
        setIfStateArrive(true);

      })
      .catch(error => console.log('error', error));

    if (stateArrive) {
      // console.log(JSON.parse(stateItem));
      // console.log(stateItem)
    }
    else {
      console.log("HH")
    }
  }


  let [skill, setSkill] = useState([]);
  async function getSkills() {
    fetch("http://localhost:5000/getSkills/637244067f8eb54bbde72295")

      .then(response => response.json())
      .then(json => {
        setSkill(json.skills);

      });

  }


  // function generateMonth() {
  //   var monthsComboBox = document.getElementById("month_option");
  //   console.log(monthsComboBox)

  // }

  // here when the array brackets are blanks, it represents the componentDidMount
  // we can use useEffect for three functions (Mount,DidMount,Unmount)
  useEffect(() => {
    getStateItems();
    getSkills();

  }, []);

  return (
    <>
      <div className=' outlet ms-auto d-flex  mt-5 '>
        <section className='settings-bar ps-4'>
          <div
            onClick={function () {
              var tabs = document.getElementsByClassName("settings-tab");
              for (var i = 0; i < tabs.length; i++) {
                if (i == 0) {
                  tabs[0].style.display = "block";
                }
                else {
                  tabs[i].style.display = "none";
                }
              }
            }}
            className="setting-choice mb-2">
            <h4><b>Personal Information</b></h4>
            <h6 className='text-muted'>Edit Your Personal Information</h6>
          </div>
          <div
            onClick={function () {
              var tabs = document.getElementsByClassName("settings-tab");
              for (var i = 0; i < tabs.length; i++) {
                if (i == 1) {
                  tabs[1].style.display = "block";
                }
                else {
                  tabs[i].style.display = "none";
                }
              }
            }}
            className="setting-choice mb-2">
            <h4><b>Account Information</b></h4>
            <h6 className='text-muted'>Edit Your Basic Account Information</h6>
          </div>
          <div
            onClick={function () {
              var tabs = document.getElementsByClassName("settings-tab");
              for (var i = 0; i < tabs.length; i++) {
                if (i == 2) {
                  tabs[2].style.display = "block";
                }
                else {
                  tabs[i].style.display = "none";
                }
              }
            }}
            className="setting-choice mb-2">
            <h4><b>Change Password</b></h4>
            <h6 className='text-muted'>Edit Your Password, Try To Remember The Old</h6>
          </div>
          <div
            onClick={function () {
              var tabs = document.getElementsByClassName("settings-tab");
              for (var i = 0; i < tabs.length; i++) {
                if (i == 3) {
                  tabs[3].style.display = "block";
                }
                else {
                  tabs[i].style.display = "none";
                }
              }
            }}
            className="setting-choice mb-2">
            <h4><b>Add New Experience</b></h4>
            <h6 className='text-muted'>Add New Experience To Your Achievements</h6>
          </div>
          <div
            onClick={function () {
              var tabs = document.getElementsByClassName("settings-tab");
              for (var i = 0; i < tabs.length; i++) {
                if (i == 4) {
                  tabs[4].style.display = "block";
                }
                else {
                  tabs[i].style.display = "none";
                }
              }
            }}
            className="setting-choice mb-2">
            <h4><b>Education Details</b></h4>
            <h6 className='text-muted'>Add New Education Stage</h6>
          </div>
          <div
            onClick={function () {
              var tabs = document.getElementsByClassName("settings-tab");
              for (var i = 0; i < tabs.length; i++) {
                if (i == 5) {
                  tabs[5].style.display = "block";
                }
                else {
                  tabs[i].style.display = "none";
                }
              }
            }}
            className="setting-choice mb-2">
            <h4><b>Positions</b></h4>
            <h6 className='text-muted'>Edit Or Add New Employment Position</h6>
          </div>
          <div onClick={function () {
            var tabs = document.getElementsByClassName("settings-tab");
            for (var i = 0; i < tabs.length; i++) {
              if (i == 6) {
                tabs[6].style.display = "block";
              }
              else {
                tabs[i].style.display = "none";
              }
            }
          }}
            className="setting-choice">
            <h4><b>Skills</b></h4>
            <h6 className='text-muted'>Basic Documents</h6>
          </div>
          <div onClick={function () {
            var tabs = document.getElementsByClassName("settings-tab");
            for (var i = 0; i < tabs.length; i++) {
              if (i == 7) {
                tabs[7].style.display = "block";
              }
              else {
                tabs[i].style.display = "none";
              }
            }
          }}
            className="setting-choice">
            <h4><b>Documents</b></h4>
            <h6 className='text-muted'>Upload Basic Documents CV,ID,..</h6>
          </div>
        </section>

        {/* PERSONAL INFORMATION EDITING */}
        <section className='settings-tab p-4'>
          <h3 className='text-center'><b>Personal Information</b></h3>
          <div className="upload-new-photo p-4 w-100 h-25 mb-3 d-flex align-items-center">
            <img className='me-4' src={Profile}></img>
            <div className="upp">
              <h2><b>Upload New Profile Photo</b></h2>
              <h6 className='text-muted'>profile.jpg</h6>
            </div>
            <button className="upload-btn ms-auto">
              <div>
                <i class="fa-solid fa-cloud-arrow-up"></i> Update
              </div>
              <input type="file"></input>

            </button>

          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="firstLastEdit">First Name</label>
            <input type="text" class="form-control" id="firstLastEdit" aria-describedby="fname" placeholder="First Name" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="firstNameEdit">Last Name</label>
            <input type="text" class="form-control" id="firstNameEdit" aria-describedby="lname" placeholder="Last Name" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="firstNameEdit">Birthdate</label>
            <input type="date" class="form-control" id="firstNameEdit" aria-describedby="emailHelp" placeholder="First Name" />
            <small id="emailHelp" class="form-text text-danger">Your Old Birthdate is 2000/09/10. </small>
          </div>
          <div className="field-form w-100 mb-3 ">
            <label for="firstNameTextField" class="form-label">State</label>
            <div className="select-div w-100 ">
              <select id="state_option" className='state-option-settings'>
                <option selected disabled>Select State</option>
                {stateItem.map((state) =>
                  <option>
                    {state.name}
                  </option>
                )}

              </select>
              <small id="emailHelp" class="form-text text-danger">Your Old State is Palestine. </small>

            </div>

          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="firstNameEdit">City</label>
            <input type="text" class="form-control" id="firstNameEdit" aria-describedby="emailHelp" placeholder="City" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="firstNameEdit">Phone Number</label>
            <input type="text" class="form-control" id="firstNameEdit" aria-describedby="emailHelp" placeholder="Phone Number" />
          </div>

          <div className="divv d-flex justify-content-end">
            <button
              onClick={function () {
                swal({
                  title: "Are you sure to save your edit?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your edit has been success!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });
              }}
              id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

          </div>
        </section>

        {/* ACCOUNT INFORMATION EDITING */}
        <section className='settings-tab p-4'>
          <h3 className='text-center'><b>Account Information</b></h3>
          <div class="form-group mb-3">
            <label className='mb-2' for="userNameEdit">Username</label>
            <input type="text" class="form-control" id="userNameEdit" aria-describedby="fname" placeholder="Username" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="emailEdit">Email Address</label>
            <input type="email" class="form-control" id="emailEdit" aria-describedby="emailEdit" placeholder="Email Address" />
          </div>
          <div class="form-group mb-3">
            <label for="exampleFormControlTextarea1">Bio</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div className="divv d-flex justify-content-end">
            <button

              id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

          </div>
        </section>

        {/* CHANGE YOUR PASSWORD EDITING */}
        <section className='settings-tab p-4'>
          <h3 className='text-center'><b>Change Password</b></h3>
          <div class="form-group mb-3">
            <label className='mb-2' for="userNameEdit">Old Password</label>
            <input type="password" class="form-control" id="userNameEdit" aria-describedby="fname" placeholder="Old Password" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="emailEdit">New Password</label>
            <input
              onKeyUp={(e) => {
                var notify = document.getElementById("notify");
                var newPassword = document.getElementById("confeditpassword");
                console.log(e.target.value);
                if (e.target.value != newPassword.value) {
                  console.log("EZZ");
                  notify.style.display = "block";

                } else {
                  notify.style.display = "none";

                }


              }}
              type="password" class="form-control" id="newPassword" aria-describedby="emailEdit" placeholder="New Password" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="emailEdit">Confirm New Password</label>
            <input
              onKeyUp={(e) => {
                var notify = document.getElementById("notify");
                var newPassword = document.getElementById("newPassword");
                console.log(e.target.value);
                if (e.target.value != newPassword.value) {
                  console.log("EZZ");
                  notify.style.display = "block";

                } else {
                  notify.style.display = "none";

                }


              }}
              type="password" class="form-control" id="confeditpassword" aria-describedby="" placeholder="Confirm New Password" />
            <small id="notify" class="form-text text-danger">Two Passwords are Not Identical! </small>

          </div>


          <div className="divv d-flex justify-content-end">
            <button
              onClick={function () {
                swal({
                  title: "Are you sure to save your edit?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your edit has been success!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });
              }}
              id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

          </div>
        </section>

        {/* ADD NEW EXPEIRENCE */}
        <section className='settings-tab p-4'>
          <h3 className='text-center'><b>New Experience</b></h3>
          <form>
            <div class="form-group mb-3">
              <label className='mb-2' for="userNameEdit">Expereinece By</label>
              <input type="text" class="form-control" id="expByName" aria-describedby="fname" placeholder="Expereinece By" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="startDateExp">Start Date</label>
              <input type="date" class="form-control" id="startDateExp" aria-describedby="startDateExp" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="endDateExp">End Date</label>
              <input type="date" class="form-control" id="endDateExp" aria-describedby="" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="experienceDetails">Experience Details</label>
              <textarea class="form-control" id="experienceDetails" rows="3"></textarea>
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="uploadFile">Upload File</label>
              <input  onChange={(e)=>{
                setFileData(e.target.files[0]);
                console.log(fileData); 
              }} type="file" class="form-control" id="uploadExpFile" aria-describedby="" />
            </div>

            <div className="divv d-flex justify-content-end">
              <button
                onSubmit={function (e) {

                  e.preventDefault();
                  
                  console.log(fileData)
                  const data = new FormData();

                  var expBy = document.getElementById("expByName").value;
                  var expStartDate = document.getElementById("startDateExp").value;
                  var expEndDate = document.getElementById("endDateExp").value;
                  var expDetails = document.getElementById("experienceDetails").value


                  data.append("orginization", expBy);
                  data.append("startDate", expStartDate);
                  data.append("endDate", expEndDate);
                  data.append("details", expDetails);
                  data.append("experienceFile", fileData);
                  data.append("_id", "637244067f8eb54bbde72295");

                  fetch("http://localhost:5000/addExperience/update", {
                    method: "PUT",
                    body: data,
                  })
                    .then((result) => {
                      console.log("File Sent Successful");
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });
                 
                 

                  swal({
                    title: "Are you sure to save your edit?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                    .then((saveNewExp) => {

                      if (saveNewExp) {
                        swal("Poof! Your edit has been success!", {
                          icon: "success",
                        });
                      } else {
                        swal("Your imaginary file is safe!");
                      }
                    });
                }
                }
                id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

            </div>
          </form>
        </section>

        {/* EDUCATION INFORMATION  */}
        <section className='settings-tab p-4'>
          <h3 className='text-center'><b>New Education</b></h3>
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
                <option value="Economic">Economic</option>
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
          <div className="form-group mb-3">
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




          <div className="divv d-flex justify-content-end">
            <button
              onClick={function () {
                swal({
                  title: "Are you sure to save your edit?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your edit has been success!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });
              }}
              id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

          </div>
        </section>

        {/* ADD NEW POSITION */}
        <section className='settings-tab p-4'>
          <h3 className='text-center'><b>New Position</b></h3>
          <div class="form-group mb-3">
            <label className='mb-2' for="userNameEdit">Company</label>
            <input type="text" class="form-control" id="userNameEdit" aria-describedby="fname" placeholder="Company" />
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
            <label className='mb-2' for="PositionName">Position Name</label>
            <input type="text" class="form-control" id="PositionName" aria-describedby="PositionName" placeholder="Position Name" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="experienceDetails">Position Details</label>
            <textarea class="form-control" id="experienceDetails" rows="3"></textarea>
          </div>


          <div className="divv d-flex justify-content-end">
            <button
              onClick={function () {
                swal({
                  title: "Are you sure to save your edit?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your edit has been success!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });
              }}
              id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

          </div>
        </section>

        {/* ADD NEW SKILL */}
        <section className='settings-tab p-4'>
          <h3 className='text-center'><b>New Skill</b></h3>
          <div class="form-group mb-3">
            <label className='mb-2' for="userSkillEdit">Skill</label>
            <input type="text" class="form-control" id="userSkillEdit" aria-describedby="fname" placeholder="Company" />
          </div>
          <div className="skills container mb-4 ">
            <h2 className='mb-4'><b><span className='span-style '>Current</span></b> Skills</h2>
            <div className="skill-row">
              {
                skill.map((skill) => {
                  <div className="skill d-flex align-items-center"><div>{skill}</div></div>

                })
              }



            </div>
          </div>




          <div className="divv d-flex justify-content-end">
            <button
              onClick={function () {
                swal({
                  title: "Are you sure to save your edit?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your edit has been success!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });
              }}
              id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

          </div>
        </section>



        {/* UPLOAD YOUR BASIC FILES  */}
        <section className='settings-tab p-4'>
          <h3 className='text-center'><b>Documents</b></h3>
          <div class="form-group mb-3">
            <label className='mb-2' for="uploadFile">Upload Your CV</label>
            <input type="file" class="form-control" id="uploadFile" aria-describedby="" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="uploadFile">Upload Your Personal ID</label>
            <input type="file" class="form-control" id="uploadFile" aria-describedby="" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="uploadFile">Upload Your Personal Passport</label>
            <input type="file" class="form-control" id="uploadFile" aria-describedby="" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="uploadFile">Upload Your University Grades</label>
            <input type="file" class="form-control" id="uploadFile" aria-describedby="" />
          </div>



          <div className="divv d-flex justify-content-end">
            <button
              onClick={function () {
                swal({
                  title: "Are you sure to save your edit?",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your edit has been success!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });
              }}
              id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

          </div>
        </section>

      </div>
    </>
  )
}
