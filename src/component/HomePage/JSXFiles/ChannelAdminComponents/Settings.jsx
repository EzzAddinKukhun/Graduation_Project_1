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
  let [channelID, setChannelID] = useState("");
  const [ProfilePic, setProfilePic] = useState();
  let [orgInfo,  setOrgInfo] = useState({}); 


  const ProfilePicChangeHandler = (e) => {
    setProfilePic(e.target.files[0]);
  };

  async function getOrgInfo(channelID) {
    console.log(channelID)
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrgInfo/${channelID}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

        .then(response => response.json())
        .then(json => {
            setOrgInfo(json.orgInfo);
        });
}




  async function getStateItems() {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "dFJHVUZZMm56M1AwT0FTU0ZERGRCU0hhbFVoNUdGWVdwQ3IxM1J6ag==");

    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
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

  
  // here when the array brackets are blanks, it represents the componentDidMount
  // we can use useEffect for three functions (Mount,DidMount,Unmount)
  useEffect(() => {
    let dataString = localStorage.getItem("ACCOUNT");
    let dataParsed = JSON.parse(dataString);
    let id = dataParsed.id;
    channelID = id;
    setChannelID(channelID)
    getStateItems();
    getOrgInfo(id)
    
   

  }, []);

  return (
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
            <label className='mb-2' for="firstNameEdit">Channel Name</label>
            <input type="text" class="form-control" id="channelNameEdit" aria-describedby="lname" placeholder="Channel Name"
             defaultValue={orgInfo.channelName}
            />
          </div>


          <div className="field-form w-100 mb-3 ">
            <label for="firstNameTextField" class="form-label">State</label>
            <div className="select-div w-100 ">
              <select id="state_option" className='state-option-settings'>
                <option selected disabled>Select State</option>
                {stateItem.map((state) =>

                state.name == orgInfo.country? 
                  <option selected>
                    {state.name}
                  </option>:
                  <option>
                    {state.name}
                  </option>
                )}

              </select>

            </div>

          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="firstNameEdit">City</label>
            <input type="text" class="form-control" id="channelCity" aria-describedby="emailHelp"
              defaultValue={orgInfo.city}
              placeholder="City" />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="firstNameEdit">Channel Category</label>
            <input type="text" class="form-control" id="channelCategory" aria-describedby="Channel Category"
              defaultValue={orgInfo.category}
              placeholder="Channel Category" />
          </div>
          <div class="form-group mb-3">
            <label for="exampleFormControlTextarea1">Bio</label>
            <textarea defaultValue={orgInfo.description}
              class="form-control" id="channelBio" rows="3"></textarea>
          </div>


          <div className="divv d-flex justify-content-end">
            <button
              onClick={async () => {
                var channelName = document.getElementById("channelNameEdit").value;
                var category = document.getElementById("channelCategory").value;
                var country = document.getElementById("state_option").value;
                var city = document.getElementById("channelCity").value;
                var description = document.getElementById("channelBio").value;
                let _id = channelID; 
                let orginizationName = orgInfo.orginizationName ;

                var data = {
                  _id,
                  orginizationName,
                  channelName,
                  country,
                  city,
                  category,
                  description
                }

                await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/updateChannelInfo`, {
                  method: 'PUT',
                  body: JSON.stringify(data),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
                }).then(response => response.json())
                  .then(json => {
                    if (json.message == "success") {
                      swal("Good job!", "Channel information updated successfully!", "success");

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
            <img className='me-4' src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationProfilePic/${channelID}`}></img>
            <div className="upp">
              <h2><b>Upload New Profile Photo</b></h2>
              <h6 className='text-muted'>{orgInfo.expertImg}</h6>
            </div>
            <button className="upload-btn ms-auto">
              <div>
                <i class="fa-solid fa-cloud-arrow-up"></i> Update
              </div>
              <input type="file" onChange={ProfilePicChangeHandler} />

            </button>

          </div>


          <div class="form-group mb-3">
            <label className='mb-2' for="firstNameEdit">Email Address</label>
            <input type="text" class="form-control" id="emailAddressEdit" aria-describedby="lname" placeholder="Email Address"
            defaultValue={orgInfo.expertEmailAddress}            />
          </div>
          <div class="form-group mb-3">
            <label className='mb-2' for="firstNameEdit">Phone Number</label>
            <input
            defaultValue={orgInfo.expertPhoneNumber}
             type="text" class="form-control" id="phoneNumberEdit" aria-describedby="lname" placeholder="Phone Number"
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
              id='saveInfoBtn'><i class="fa-solid fa-floppy-disk"
                onClick={async (e) => {
                  e.preventDefault();

                  const data = new FormData();

                  data.append("_id", channelID);
                  data.append("expertPhoneNumber", document.getElementById("phoneNumberEdit").value);
                  data.append("expertEmailAddress", document.getElementById("emailAddressEdit").value);
                  data.append("ImgUpload", ProfilePic);

                  await fetch("http://localhost:5000/api/orginization/updateExpertInfo", {
                    method: "PUT",
                    body: data,
                  })
                    .then((result) => {
                      console.log("File Sent Successful");
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });
                }}
              ></i> Save</button>

          </div>
        </section>
      </div >
    </>
  )
}
