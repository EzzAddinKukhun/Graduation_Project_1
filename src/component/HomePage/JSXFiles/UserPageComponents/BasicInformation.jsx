import React from 'react';
import '../../CSSFiles/UserCss/userprofile.css'
import '../../CSSFiles/UserCss/sidebar.css'
import cover from '../../../../imgs/cover.jpg';
import Profile from '../../../../imgs/profile.jpg';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Settings from './Settings';


export default function BasicInformation() {
    return (
        <>
            {/* ABOUT CONTAINER */}
            <div className="outlet ms-auto">
                <section className='w-100 h-100 mt-5 p-3'>
                    <div className="skills container mb-4 ">
                        <h2 className='mb-2 p-3'><b><span className='span-style '>About</span></b></h2>
                        <p id="aboutPara">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores blanditiis vero cum aperiam ea, totam similique quis distinctio! Repudiandae commodi modi ullam voluptatibus aut quia asperiores eveniet, dicta eum repellat doloribus officia! Non atque pariatur alias error illo eaque, doloribus voluptate provident placeat natus eligendi. Ut enim soluta quos earum voluptatum, debitis doloremque. Dolores ducimus cumque quisquam odio quod veritatis, odit vero cupiditate enim, error quas quasi ipsa dolorum veniam consequatur beatae expedita ullam quos velit? Beatae molestiae totam itaque excepturi tenetur accusantium vero repellendus, sunt, nihil aliquam quibusdam voluptas earum omnis! Enim, ratione. Aspernatur iusto alias laboriosam nostrum perspiciatis.
                        </p>
                    </div>


                    {/* PERSONAL INFO  */}
                    <div className="container personal-info">
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
                                            <i class="fa-solid fa-user"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="Username" class="form-label">Username</label>
                                            <h6 name="studystate"><b>ezz_addin_kukhun</b></h6>
                                        </div>
                                    </div>
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

                    <div className="skills container mb-4 ">
                        <h2 className='mb-4'><b><span className='span-style '>New</span></b> Skills</h2>
                        <div className="skill-row">
                            <div className="skill">Problem Solving</div>
                            <div className="skill">Data Science</div>
                            <div className="skill">Front-end developer</div>
                            <div className="skill">Microsoft Office</div>
                            <div className="skill">Artifical Intellegence</div>


                        </div>
                    </div>




                </section>
            </div>

        </>
    )
}
