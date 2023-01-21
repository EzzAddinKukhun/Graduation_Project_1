import React from 'react'
import '../../CSSFiles/UserCss/userprofile.css'
import { Link } from 'react-router-dom';
import '../../CSSFiles/UserCss/settings.css';
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import Profile from '../../../../imgs/profile.jpg';
import Axios from 'axios';
import Swal from 'sweetalert2';
import FileDownload from 'js-file-download'; 

export default function Settings() {
  let [stateItem, setStateItem] = useState([]);
  let [setArrive, setIfArrive] = useState(false);
  let [months, setMonths] = useState([]);
  let [year, setYear] = useState([]);
  let [userID, setUserID] = useState("");
  let [skillToEdit, setSkillToEdit] = useState("")
  const [fileData, setFileData] = useState();
  const [skillIdToEdit, setSkillIdToEdit] = useState(0);

  //TO UPLOAD FILES - DOCUMENTS
  const [fileData1, setFileData1] = useState();
  const [fileData2, setFileData2] = useState();
  const [fileData3, setFileData3] = useState();
  const [fileData4, setFileData4] = useState();

  const fileChangeHandler1 = (e) => {
    setFileData1(e.target.files[0]);
  };
  const fileChangeHandler2 = (e) => {
    setFileData2(e.target.files[0]);
  };
  const fileChangeHandler3 = (e) => {
    setFileData3(e.target.files[0]);
  };
  const fileChangeHandler4 = (e) => {
    setFileData4(e.target.files[0]);
  };




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
        setIfArrive(true);

      })
      .catch(error => console.log('error', error));

    if (setArrive) {
      // console.log(JSON.parse(stateItem));
      // console.log(stateItem)
    }
    else {
      console.log("HH")
    }
  }


  let [skill, setSkill] = useState([]);
  async function getSkills(id) {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/getSkills/${id}`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setSkill(json.skills);
      });

  }


  let [personalInfo, setPersonalInfo] = useState([]);
  async function getPersonalInfos(id) {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/personalInfo/${id}`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setPersonalInfo(json.personalInfo);
        setIfArrive(true);
      });

  }

  let [accountInfo, setAccountInfo] = useState([]);
  async function getAccountInfos(id) {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/accountInfo/${id}`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setAccountInfo(json.AccountInfo);
        setIfArrive(true);
      });

  }



  //FOR POSTING PROFILE PICTURE INTO THE SERVER
  const [ProfilePic, setProfilePic] = useState();
  const ProfilePicChangeHandler = async (e) => {
    setProfilePic(e.target.files[0]);
    let personalPhotoFile = e.target.files[0];
    e.preventDefault();
    const data = new FormData();
    data.append("profilePicture", personalPhotoFile);
    data.append("_id", userID);

    await fetch("https://alumnibackend-fathifathallah.onrender.com/uploadProfilePic", {
      method: "PUT",
      body: data,
    })
      .then((result) => {
        Swal.fire(
          'Good job!',
          'Your Profile Photo Updated Successfully!',
          'success'
        )
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onSubmitHandlerProfilePic = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("profilePicture", ProfilePic);
    data.append("_id", "637244067f8eb54bbde72295");

    fetch("http://localhost:5000/uploadProfilePic", {
      method: "PUT",
      body: data,
    })
      .then((result) => {
        console.log("File Sent Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  // here when the array brackets are blanks, it represents the componentDidMount
  // we can use useEffect for three functions (Mount,DidMount,Unmount)
  useEffect(() => {
    getStateItems();
    // getPersonalInfos();
    // receiveMedia(); 
    let dataText = localStorage.getItem("ACCOUNT");
    let dataJSON = JSON.parse(dataText);
    let id = dataJSON.id;
    setUserID(id);
    getPersonalInfos(id);
    getAccountInfos(id);
    getSkills(id);

  }, []);

  return (
    setArrive ?
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
              <img className='me-4' src={`https://alumnibackend-fathifathallah.onrender.com/getProfilePicture/${userID}`}></img>
              <div className="upp">
                <h2><b>Upload New Profile Photo</b></h2>
                <h6 className='text-muted'>{personalInfo.profilePic}</h6>
              </div>
              <button className="upload-btn ms-auto">
                <div>
                  <i class="fa-solid fa-cloud-arrow-up"></i> Update
                </div>
                <form onSubmit={onSubmitHandlerProfilePic}>
                  <input type="file" onChange={ProfilePicChangeHandler} />
                </form>

              </button>

            </div>

            <div className="field-form w-100 mb-3 ">
              <label for="firstNameTextField" class="form-label">State</label>
              <div className="select-div w-100 ">
                <select id="state_option" className='state-option-settings'>
                  <option selected disabled>Select State</option>
                  {stateItem.map((state) =>
                    state.name == personalInfo.country ?
                      <option selected>
                        {state.name}
                      </option> :
                      <option>
                        {state.name}
                      </option>
                  )}

                </select>

              </div>

            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="firstNameEdit">City</label>
              <input type="text" class="form-control" id="city" aria-describedby="emailHelp"
                defaultValue={personalInfo.city}
                placeholder="City" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="phoneNumber">Phone Number</label>
              <input
                defaultValue={personalInfo.phoneNumber}
                type="text" class="form-control" id="phoneNumber" aria-describedby="emailHelp" placeholder="Phone Number" />
            </div>

            <div className="divv d-flex justify-content-end">
              <button
                onClick={async () => {
                  var firstName = personalInfo.firstName;
                  var lastName = personalInfo.lastName;
                  var birthDate = personalInfo.birthDate;
                  var country = document.getElementById("state_option").value;
                  var city = document.getElementById("city").value;
                  var phoneNumber = document.getElementById("phoneNumber").value;
                  let _id = userID;

                  var data = {
                    _id,
                    firstName,
                    lastName,
                    birthDate,
                    country,
                    city,
                    phoneNumber
                  }

                  await fetch(`https://alumnibackend-fathifathallah.onrender.com/personalInfo/update`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  }).then(response => response.json())
                    .then(json => {
                      if (json.message == "success") {
                        Swal.fire("Good job!", "Your personal information updated successfully!", "success");
                        setTimeout(() => {
                          window.location.reload();
                        }, 2000)

                      }
                      else if (json.message == "phone already exists") {
                        Swal.fire("Phone Number is exists!", "Please sure that you enter new phone number!", "error");

                      }

                    });
                }}

                id='saveInfoBtn' > <i class="fa-solid fa-floppy-disk"></i> Save</button>

            </div>
          </section>

          {/* ACCOUNT INFORMATION EDITING */}
          <section className='settings-tab p-4'>
            <h3 className='text-center'><b>Account Information</b></h3>
            <div class="form-group mb-3">
              <label className='mb-2' for="userNameEdit">Username</label>
              <input
                defaultValue={accountInfo.userName}
                type="text" class="form-control" id="userNameEdit" aria-describedby="fname" placeholder="Username" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="emailEdit">Email Address</label>
              <input
                defaultValue={accountInfo.emailAddress}
                type="email" class="form-control" id="emailEdit" aria-describedby="emailEdit" placeholder="Email Address" />
            </div>
            <div class="form-group mb-3">
              <label for="exampleFormControlTextarea1">Bio</label>
              <textarea
                defaultValue={accountInfo.about}
                class="form-control" id="bio" rows="3"></textarea>
            </div>

            <div className="divv d-flex justify-content-end">
              <button
                onClick={async () => {
                  var userName = document.getElementById("userNameEdit").value;
                  var emailAddress = document.getElementById("emailEdit").value;
                  var about = document.getElementById("bio").value;
                  let _id = userID;

                  var data = {
                    _id,
                    userName,
                    emailAddress,
                    about,
                  }

                  await fetch(`https://alumnibackend-fathifathallah.onrender.com/accountInfo/update`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  }).then(response => response.json())
                    .then(json => {
                      if (json.message == "success") {
                        swal("Good job!", "Your Account information had been edited successfully!", "success");

                      }
                      else if (json.message == "email already exists") {
                        swal("Email Already Exists!", "Please sure that you enter new email address!", "error");

                      }

                    });
                }}

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
            <div class="form-group mb-3">
              <label className='mb-2' for="userNameEdit">Expereinece By</label>
              <input type="text" class="form-control" id="expByName" aria-describedby="fname" placeholder="Expereinece By" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="startDateExp">Start Date</label>
              <input on type="date" class="form-control" id="startDateExp" aria-describedby="startDateExp" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="endDateExp">End Date</label>
              <input
                type="date" class="form-control" id="endDateExp" aria-describedby="" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="experienceDetails">Experience Details</label>
              <textarea class="form-control" id="experienceDetails" rows="3"></textarea>
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="uploadFile">Upload File</label>
              <input onChange={(e) => {
                setFileData(e.target.files[0]);
                console.log(fileData);
              }} type="file" class="form-control" id="uploadExpFile" aria-describedby="" />
            </div>

            <div className="divv d-flex justify-content-end">
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  const data = new FormData();

                  var expBy = document.getElementById("expByName").value;
                  var expStartDate = document.getElementById("startDateExp").value;
                  var expEndDate = document.getElementById("endDateExp").value;
                  var expDetails = document.getElementById("experienceDetails").value

                  data.append("_id", userID);
                  data.append("orginization", expBy);
                  data.append("startDate", expStartDate);
                  data.append("endDate", expEndDate);
                  data.append("details", expDetails);
                  data.append("experienceFile", fileData);

                  await fetch("https://alumnibackend-fathifathallah.onrender.com/addExperience/update", {
                    method: "PUT",
                    body: data,
                  })
                    .then((result) => {
                      Swal.fire("New Experience added successfully!", {
                        icon: "success",
                      });
                      setTimeout(() => {
                        window.location.reload()
                      })
                    });

                }
                }
                id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

            </div>
          </section>

          {/* EDUCATION INFORMATION  */}
          <section className='settings-tab p-4'>
            <h3 className='text-center'><b>New Education</b></h3>
            <div class="form-group mb-3">
              <label className='mb-2' for="userNameEdit">University</label>
              <input type="text" class="form-control" id="University" aria-describedby="fname" placeholder="University" />
            </div>
            <div className="field-form w-100 mb-3 ">
              <label for="firstNameTextField" class="form-label">Faculty</label>
              <div className="select-div w-100 ">
                <select id="Faculty" className='state-option-settings'>
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
              <label for="ScientificDegree" class="form-label">Scientific Degree</label>
              <div className="select-div w-100 ">
                <select id="scientificDegree" className='state-option-settings'>
                  <option selected disabled>Select Your Degree</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor">Bachelor's</option>
                  <option value="Master">Master's</option>
                  <option value="PHd">PhD</option>


                </select>

              </div>

            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="startDateStudy">Start Date</label>
              <div className='d-flex'>
                <div className="select-div w-50 ">
                  <select id="month_option_start" className='state-option-settings'>
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
                  <select id="year_option_start" className='state-option-settings'>
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
                  <select id="month_option_end" className='state-option-settings'>
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
                  <select id="year_option_end" className='state-option-settings'>
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
                onClick={async () => {

                  var university = document.getElementById("University").value;
                  var faculty = document.getElementById("Faculty").value;
                  var specialization = document.getElementById("Specialization").value;
                  var degree = document.getElementById("scientificDegree").value;
                  var month_option_start = document.getElementById("month_option_start").value;
                  var year_option_start = document.getElementById("year_option_start").value;
                  var month_option_end = document.getElementById("month_option_end").value;
                  var year_option_end = document.getElementById("year_option_end").value;
                  let _id = userID;


                  var data = {
                    _id,
                    university,
                    faculty,
                    specialization,
                    degree,
                    startDate: year_option_start + "-" + month_option_start,
                    endDate: year_option_end + "-" + month_option_end
                  }


                  await fetch(`https://alumnibackend-fathifathallah.onrender.com/addEducation/update`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  }).then(response => response.json())
                    .then(() => {

                      swal("Good job!", "Your Education information had been added successfully!", "success");


                    });
                }}
                id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

            </div>
          </section>

          {/* ADD NEW POSITION */}
          <section className='settings-tab p-4'>
            <h3 className='text-center'><b>New Position</b></h3>
            <div class="form-group mb-3">
              <label className='mb-2' for="Company">Company</label>
              <input type="text" class="form-control" id="Company" aria-describedby="fname" placeholder="Company" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="startDatePos">Start Date</label>
              <div className='d-flex'>
                <div className="select-div w-50 ">
                  <select id="month_option_start_pos" className='state-option-settings'>
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
                  <select id="year_option_start_pos" className='state-option-settings'>
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
              <label className='mb-2' for="positionDetails">Position Details</label>
              <textarea class="form-control" id="positionDetails" rows="3"></textarea>
            </div>


            <div className="divv d-flex justify-content-end">
              <button
                onClick={async () => {
                  var company = document.getElementById("Company").value;
                  var msdate = document.getElementById("month_option_start_pos").value;
                  var ysdate = document.getElementById("year_option_start_pos").value;
                  var positionName = document.getElementById("PositionName").value;
                  var positionDetails = document.getElementById("positionDetails").value;
                  let _id = userID;

                  var data = {
                    _id,
                    company,
                    startDate: ysdate + "-" + msdate,
                    positionName,
                    positionDetails
                  }

                  await fetch(`https://alumnibackend-fathifathallah.onrender.com/addPosition/update`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  }).then(response => response.json())
                    .then(() => {
                      Swal.fire("Good job!", "New Position had been added successfully!", "success");

                    });
                }}

                id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

            </div>
          </section>

          {/* ADD NEW SKILL */}
          <section className='settings-tab p-4'>
            <h3 className='text-center'><b>New Skill</b></h3>
            <label className='mb-2' for="userSkillEdit">Skill</label>

            <div className='d-flex justify-around'>
              <div class="form-group mb-3 addSkill">
                <input type="text" class="form-control" id="userSkillEdit" aria-describedby="fname" placeholder="New Skill" />
              </div>

              <div className='saveNewSkill'>
                <button
                  onClick={async () => {
                    let _id = userID;

                    var newSkill = document.getElementById("userSkillEdit").value;
                    var data = {
                      _id,
                      newSkill
                    }

                    await fetch(`https://alumnibackend-fathifathallah.onrender.com/addSkill/update`, {
                      method: 'PUT',
                      body: JSON.stringify(data),
                      headers: {
                        "Content-type": "application/json; charset=UTF-8"
                      }
                    }).then(response => response.json())
                      .then(() => {

                        Swal.fire("Good job!", "New Skill had been added successfully!", "success");


                      });
                  }}
                  id='saveInfoBtnSkill'><i class="fa-solid fa-plus"></i>&nbsp; Add</button>
              </div>

            </div>


            <div className="skills container mb-4 ">
              <h2 className='mb-4'><b><span className='span-style '>Current</span></b> Skills</h2>
              <div className="skill-row">
                {
                  skill.map((skill) => {
                    return (
                      <div className="skill d-flex align-items-center  ">
                        <input id="editSkill" className='skill-blank'
                          defaultValue={skill.newSkill}
                          onChange={(e) => {
                            setSkillToEdit(e.target.value);
                            setSkillIdToEdit(skill.skillId)
                          }}

                        ></input>
                        <div
                          onClick={async () => {
                            let _id = userID;
                            let skillId = skill.skillId


                            let data = {
                              _id,
                              skillId
                            }

                            console.log(data);



                            await fetch(`https://alumnibackend-fathifathallah.onrender.com/deleteSkill/update`, {
                              method: 'DELETE',
                              body: JSON.stringify(data),
                              headers: {
                                "Content-type": "application/json; charset=UTF-8"
                              }
                            }).then(response => response.json())
                              .then(json => {
                                if (json.message == "success") {
                                  Swal.fire("Good job!", "Skill Deleted Successfully!", "success");
                                  // setTimeout(() => {
                                  //   window.location.reload()
                                  // }, 2000)
                                }
                              });
                          }}
                          className="remove-skill">
                          <i class="fa-solid fa-trash-can"></i>
                        </div>
                      </div>
                    );

                  })
                }
              </div>


              <div className="divv d-flex justify-content-end">
                <button
                  onClick={async () => {
                    let _id = userID;
                    var newSkill = skillToEdit;
                    let skillId = skillIdToEdit
                    var data = {
                      _id,
                      skillId,
                      newSkill

                    }

                    console.log(data);

                    await fetch(`https://alumnibackend-fathifathallah.onrender.com/changeSkill/update`, {
                      method: 'PUT',
                      body: JSON.stringify(data),
                      headers: {
                        "Content-type": "application/json; charset=UTF-8"
                      }
                    }).then(response => response.json())
                      .then(() => {

                        swal("Good job!", "New Skill had been added successfully!", "success");


                      });
                  }}
                  id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

              </div>
            </div>





          </section>



          {/* UPLOAD YOUR BASIC FILES  */}
          <section className='settings-tab p-4'>
            <h3 className='text-center'><b>Documents</b></h3>
            <div class="form-group mb-3">
              <label className='mb-2' for="uploadFile">Upload Your CV</label>
              <input onChange={fileChangeHandler1} type="file" class="form-control" id="uploadFile" aria-describedby="" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="uploadFile">Upload Your Personal ID</label>
              <input onChange={fileChangeHandler2} type="file" class="form-control" id="uploadFile" aria-describedby="" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="uploadFile">Upload Your Personal Passport</label>
              <input onChange={fileChangeHandler3} type="file" class="form-control" id="uploadFile" aria-describedby="" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="uploadFile">Upload Your University Grades</label>
              <input onChange={fileChangeHandler4} type="file" class="form-control" id="uploadFile" aria-describedby="" />
            </div>

           


            <div className="divv d-flex justify-content-end">
              <button
                onClick={async (e) => {
                  e.preventDefault();

                  // Handle File Data from the state Before Sending
                  const data = new FormData();
                  let _id = userID
                  data.append("documentFiles", fileData1);
                  data.append("documentFiles", fileData2);
                  data.append("documentFiles", fileData3);
                  data.append("documentFiles", fileData4);
                  data.append("_id", _id);
                  data.append("updateArrayFiles", typeof fileData1);
                  data.append("updateArrayFiles", typeof fileData2);
                  data.append("updateArrayFiles", typeof fileData3);
                  data.append("updateArrayFiles", typeof fileData4);

                  await fetch("https://alumnibackend-fathifathallah.onrender.com/uploadDocuments/update", {
                    method: "PUT",
                    body: data,
                  })
                    .then((result) => {
                      Swal.fire(
                        'Good job!',
                        'Your Files Uploaded Successfully!',
                        'success'
                      )
                      // setTimeout(() => {
                      //   window.location.reload();
                      // }, 2000)

                    })
                    .catch((err) => {
                      console.log(err.message);
                    });

                }}

                id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"></i> Save</button>

            </div>
          </section>

        </div >
      </> : ""
  )
}
