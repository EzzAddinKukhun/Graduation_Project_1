import React from 'react'
import Profile from '../../../../imgs/profile.jpg';
import { Zoom } from 'react-reveal';

export default function JobApplication() {
    return (
        <>
            <div className="outlet ms-auto">
                <h2 className='text-center mt-4'><b><span className='span-style'>Job Application Form</span></b></h2>
                <div className="job-application-container">
                    <div className="upload-new-photo p-4 w-100 h-25 mb-3 d-flex align-items-center">
                        {/* <img src={`data:video/mp4;base64,${mediaFile}`} alt="" /> */}
                        <img className='me-4' src={Profile}></img>
                        <div className="upp">
                            <h2><b>Ezz Addin H. Kukhun</b></h2>
                            <h5 className='text-muted'>Frontend Developer</h5>
                        </div>
                        <button className='downloadCV'>
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
                                            <h6 name="fname"><b>Ezz Addin</b></h6>
                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-people-roof"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="lastNameTextField" class="form-label">Last Name</label>
                                            <h6 name="lname"><b>Kukhun</b></h6>
                                        </div>

                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-cake-candles"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="BirthdateTextField" class="form-label">Birthdate</label>
                                            <h6 name="bdate"><b>2000/09/10</b></h6>


                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-envelope "></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="BirthdateTextField" class="form-label">Email Address</label>
                                            <h6 name="email"><b>ezkukhun2000@gmail.com</b></h6>


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
                                                <h6 name="state"><b>Palestine</b></h6>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="lastNameTextField" class="form-label">Phone Number</label>
                                            <h6 name="phone"><b>+970 599836899</b></h6>

                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-user-graduate"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="lastNameTextField" class="form-label">Study State</label>
                                            <h6 name="studystate"><b>Graduated</b></h6>
                                        </div>
                                    </div>

                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-building-columns"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="lastNameTextField" class="form-label">Faculty</label>
                                            <h6 name="studystate"><b>IT</b></h6>
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
                                            <h6 name="studystate"><b>Computer Engineering</b></h6>
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
