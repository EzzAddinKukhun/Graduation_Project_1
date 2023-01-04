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
import { useEffect } from 'react';

export default function BasicInformation() {

    let [userID, setUserId] = useState("");

    let [userInformation, setUserInformation] = useState({});
    let [userAccountInformation, setUserAccountInformation] = useState({});
    let [userSkills, setUserSkills] = useState([]); 

    async function getUserInformation(id) {
        await fetch(`http://localhost:5000/AllData/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                setUserInformation(json.personalInfo)
            });
    }

    async function getUserAccountInformation(id) {
        await fetch(`http://localhost:5000/accountInfo/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                setUserAccountInformation(json.AccountInfo)
            });
    }

    async function getUserSkills (id){
        await fetch(`http://localhost:5000/getSkills/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                setUserSkills(json.skills)
            });
    }

    useEffect(() => {
        let userDataString = localStorage.getItem("ACCOUNT");
        let userData = JSON.parse(userDataString);
        setUserId(userData.id);
        getUserInformation(userID);
        getUserAccountInformation(userID);
        getUserSkills (userID); 

    }, []);

    return (
        <>
            {/* ABOUT CONTAINER */}
            <div className="outlet ms-auto">
                <section className='w-100 h-100 mt-5 p-3'>
                    <div className="skills container mb-4 ">
                        <h2 className='mb-2 p-3'><b><span className='span-style '>About</span></b></h2>
                        <p id="aboutPara">
                            {userAccountInformation.about}
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
                                            <h6 name="bdate"><b>{userInformation.birthDate}</b></h6>


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
                                            <i class="fa-solid fa-user"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="Username" class="form-label">Username</label>
                                            <h6 name="studystate"><b>{userInformation.userName}</b></h6>
                                        </div>
                                    </div>
                                    <div class="sign-up-field mb-4 d-flex">
                                        <div className="icon-form text-center">
                                            <i class="fa-solid fa-helmet-safety"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="Username" class="form-label">Specialization</label>
                                            <h6 name="studystate"><b>{userInformation.specialization}</b></h6>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Zoom>



                        </div>
                    </div>

                    <div className="skills container mb-4 ">
                        <h2 className='mb-4'><b><span className='span-style '>New</span></b> Skills</h2>
                        <div className="skill-row">
                        {
                            userSkills.map((skill)=>{
                                return (
                                    <div className="skill">{skill.newSkill}</div>
                                ); 
                            })
                        }
                            


                        </div>
                    </div>




                </section>
            </div>

        </>
    )
}
