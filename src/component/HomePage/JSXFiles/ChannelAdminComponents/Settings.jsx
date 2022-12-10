import React from 'react'
import '../../CSSFiles/UserCss/userprofile.css'
import { Link } from 'react-router-dom';
import '../../CSSFiles/UserCss/settings.css';
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import Profile from '../../../../imgs/profile.jpg';
import Axios from 'axios';

export default function Settings() {
  let [stateItem, setStateItem] = useState([]);
  let [setArrive, setIfArrive] = useState(false);
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
  async function getSkills() {
    await fetch("http://localhost:5000/getSkills/637244067f8eb54bbde72295", {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setSkill(json.skills);
        setIfArrive(true);
      });

  }


  let [personalInfo, setPersonalInfo] = useState([]);
  async function getPersonalInfos() {
    await fetch("http://localhost:5000/personalInfo/637244067f8eb54bbde72295", {
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
  async function getAccountInfos() {
    await fetch("http://localhost:5000/accountInfo/637244067f8eb54bbde72295", {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setAccountInfo(json.personalInfo);
        setIfArrive(true);
      });

  }


  const [mediaFile = null, setmediaFile] = useState();
  const [type, setType] = useState();
  const receiveMedia = (e) => {
    e.preventDefault();
    Axios({
      url: 'http://localhost:5000/getProfilePicture/637244067f8eb54bbde72295',
      method: 'GET',
      responseType: 'json'
    }).then(response => response.data)
      .then(json => {
        let mediaFile = btoa(
          new Uint8Array(json.file.dataFile.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        console.log(mediaFile);
        setmediaFile(mediaFile);
        setType(json.file.type);
      });
  };

  //FOR POSTING PROFILE PICTURE INTO THE SERVER
  const [ProfilePic, setProfilePic] = useState();
  const ProfilePicChangeHandler = (e) => {
    setProfilePic(e.target.files[0]);
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
    // getSkills();
    // getPersonalInfos();
    // receiveMedia(); 
    // getAccountInfos();

  }, []);

  return (
    setArrive ?
      <>
        <div className=' outlet ms-auto d-flex  mt-5 '>
          <section className='settings-bar-channel ps-4'>
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
              <h4><b>Channel Information</b></h4>
              <h6 className='text-muted'>Edit Channel Information</h6>
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
              <h4><b>Change Password</b></h4>
              <h6 className='text-muted'>Edit Your Password,and Remember The Old</h6>
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
              <h4><b>Expert Information</b></h4>
              <h6 className='text-muted'>Set or edit the information of expert</h6>
            </div>
          </section>

          {/* CHANNEL INFORMATION EDITING */}
          <section className='settings-tab p-4'>
            <h3 className='text-center'><b>Channel Information</b></h3>
           
            <div class="form-group mb-3">
              <label className='mb-2' for="firstLastEdit">Organization Name</label>
              <input type="text" class="form-control" id="organizationNameEdit" aria-describedby="fname" placeholder="Organization Name"
                value={personalInfo.firstName}
              />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="firstNameEdit">Channel Name</label>
              <input type="text" class="form-control" id="channelNameEdit" aria-describedby="lname" placeholder="Channel Name"
                value={personalInfo.lastName}
              />
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
                <small id="emailHelp" class="form-text text-danger">Your Old State is {personalInfo.country} </small>

              </div>

            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="firstNameEdit">City</label>
              <input type="text" class="form-control" id="city" aria-describedby="emailHelp"
                value={personalInfo.city}
                placeholder="City" />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="firstNameEdit">Channel Category</label>
              <input type="text" class="form-control" id="channelCategory" aria-describedby="Channel Category"
                value={personalInfo.city}
                placeholder="Channel Category" />
            </div>
            <div class="form-group mb-3">
              <label for="exampleFormControlTextarea1">Bio</label>
              <textarea
                value={accountInfo.about}
                class="form-control" id="bio" rows="3"></textarea>
            </div>


            <div className="divv d-flex justify-content-end">
              <button
                onClick={async () => {
                  var firstName = document.getElementById("firstNameEdit").value;
                  var lastName = document.getElementById("lasttNameEdit").value;
                  var birthDate = document.getElementById("birthdate").value;
                  var country = document.getElementById("state_option").value;
                  var city = document.getElementById("city").value;
                  var phoneNumber = document.getElementById("phoneNumber").value;
                  var data = {
                    firstName,
                    lastName,
                    birthDate,
                    country,
                    city,
                    phoneNumber
                  }

                  await fetch(`http://localhost:5000/personalInfo/update`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  }).then(response => response.json())
                    .then(json => {
                      if (json.message == "success") {
                        swal("Good job!", "Your personal information had been edited successfully!", "success");

                      }
                      else if (json.message == "phone already exists") {
                        swal("Phone Number is exists!", "Please sure that you enter new phone number!", "error");

                      }

                    });
                }}

                id='saveInfoBtn' > <i class="fa-solid fa-floppy-disk"></i> Save</button>

            </div>
          </section>


          {/* CHANGE CHANNEL PASSWORD EDITING */}
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


          {/* EXPERT INFORMATION  */}
          <section className='settings-tab p-4'>
            <h3 className='text-center'><b>Expert Information</b></h3>
            <div className="upload-new-photo p-4 w-100 h-25 mb-3 d-flex align-items-center">
              {/* <img src={`data:video/mp4;base64,${mediaFile}`} alt="" /> */}
              <img className='me-4' src={Profile}></img>
              <div className="upp">
                <h2><b>Upload New Profile Photo</b></h2>
                <h6 className='text-muted'>profile.jpg</h6>
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

            <div class="form-group mb-3">
              <label className='mb-2' for="firstLastEdit">First Name</label>
              <input type="text" class="form-control" id="firstNameEdit" aria-describedby="fname" placeholder="First Name"
                value={personalInfo.firstName}
              />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="firstNameEdit">Last Name</label>
              <input type="text" class="form-control" id="lastNameEdit" aria-describedby="lname" placeholder="Last Name"
                value={personalInfo.lastName}
              />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="firstNameEdit">Email Address</label>
              <input type="text" class="form-control" id="emailAddressEdit" aria-describedby="lname" placeholder="Email Address"
                value={personalInfo.lastName}
              />
            </div>
            <div class="form-group mb-3">
              <label className='mb-2' for="firstNameEdit">Phone Number</label>
              <input type="text" class="form-control" id="phoneNumberEdit" aria-describedby="lname" placeholder="Phone Number"
                value={personalInfo.lastName}
              />
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

        </div >
      </> : ""
  )
}
