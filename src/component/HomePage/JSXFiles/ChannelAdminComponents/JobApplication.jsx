import React, { useEffect, useState } from 'react'
import Profile from '../../../../imgs/profile.jpg';
import { Zoom } from 'react-reveal';
import { useSearchParams } from 'react-router-dom';
import Axios from 'axios';
import FileDownload from 'js-file-download'; 

export default function JobApplication() {
    let [searchParams, setSearchParams] = useSearchParams();
    let [userInformation, setUserInformation] = useState({})

    async function getUserInfo(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/AllData/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                setUserInformation(json.user)
            });
    }

    useEffect(() => {
        let id = searchParams.get('id');
        getUserInfo(id);

    })


    return (
        <>
            <div className="outlet ms-auto">
                <h2 className='text-center mt-4'><b><span className='span-style'>Job Application Form</span></b></h2>
                <div className="job-application-container">
                    <div className="upload-new-photo p-4 w-100 h-25 mb-3 d-flex align-items-center">
                        <img className='me-4' src={`https://alumnibackend-fathifathallah.onrender.com/getProfilePicture/${userInformation._id}`}></img>
                        <div className="upp">
                            <h2><b>{userInformation.firstName + " " + userInformation.lastName}</b></h2>
                            <h6 className='text-muted'>{userInformation.cv}</h6>
                        </div>
                        <button
                            onClick={async () => {
                                Axios({
                                    url: `https://alumnibackend-fathifathallah.onrender.com/getCV/${userInformation._id}`,
                                    method: "GET",
                                    responseType: "blob",
                                }).then((response) => {
                                    console.log(response);
                                    FileDownload(response.data, "Exp." + response.data.type.split("/")[1]);
                                });
                            }}

                            
                            className='downloadCV'>
                            <i class="fa-solid fa-download"></i> CV
                        </button>
                    </div>

                    <div className="container personal-info personal-info-inisde-job-application">
                        <h2 className='mb-4'><b><span className='span-style '>Personal</span></b> Information</h2>
                        <div className="row ">
                            <Zoom delay={2000}>
                                <div className="col-md-4">
                                    <div class="sign-up-field mb-4 d-flex flex-nowrap">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-signature"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="firstNameTextField" class="form-label">First Name</label>
                                            <h6 name="fname"><b>{userInformation.firstName}</b></h6>
                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-people-roof"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="lastNameTextField" class="form-label">Last Name</label>
                                            <h6 name="lname"><b>{userInformation.lastName}</b></h6>
                                        </div>

                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-cake-candles"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="BirthdateTextField" class="form-label">Birthdate</label>
                                            <h6 name="bdate"><b>{new Date(userInformation.birthDate).toLocaleDateString()}</b></h6>
                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-envelope "></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="BirthdateTextField" class="form-label">Email Address</label>
                                            <h6 name="email"><b>{userInformation.emailAddress}</b></h6>


                                        </div>
                                    </div>



                                </div>
                            </Zoom>
                            <Zoom delay={2700}>

                                <div className="col-md-4">
                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-earth-americas"></i>
                                        </div>
                                        <div className="field-form ">
                                            <div className="field-form ">
                                                <label for="BirthdateTextField" class="form-label">State</label>
                                                <h6 name="state"><b>{userInformation.country}</b></h6>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="lastNameTextField" class="form-label">Phone Number</label>
                                            <h6 name="phone"><b>{userInformation.phoneNumber}</b></h6>

                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-user-graduate"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="lastNameTextField" class="form-label">Study State</label>
                                            <h6 name="studystate"><b>{userInformation.studyState}</b></h6>
                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-building-columns"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="lastNameTextField" class="form-label">Faculty</label>
                                            <h6 name="studystate"><b>{userInformation.studyField}</b></h6>
                                        </div>
                                    </div>



                                </div>
                            </Zoom>

                            <Zoom delay={3400}>

                                <div className="col-md-4">
                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-helmet-safety"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="Username" class="form-label">Specialization</label>
                                            <h6 name="studystate"><b>{userInformation.specialization}</b></h6>
                                        </div>
                                    </div>
                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-calendar"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="Username" class="form-label">Graduation Year</label>
                                            <h6 name="studystate"><b>2023</b></h6>
                                        </div>
                                    </div>
                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-scroll"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="Username" class="form-label">Degree</label>
                                            <h6 name="studystate"><b>Bachaleroes</b></h6>
                                        </div>
                                    </div>


                                </div>
                            </Zoom>



                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
