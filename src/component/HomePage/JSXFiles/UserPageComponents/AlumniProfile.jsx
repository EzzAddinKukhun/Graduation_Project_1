import React from 'react';
import '../../CSSFiles/UserCss/userprofile.css'
import cover from '../../../../imgs/cover.jpg';
import Profile from '../../../../imgs/profile.jpg';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Settings from './Settings';



export default function AlumniProfile() {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>

            <div className='outlet ms-auto'>
                <div className="main-profile-top position-relative">
                    {/* for editting cover page from here */}
                    <Fade>
                        <div className="cover-page-photo">
                            <img className='cover-img' src={cover}></img>
                        </div>
                    </Fade>
                    <div className="container position-absolute profile-account-container">
                        <div className="row justify-content-evenly h-100">
                            <Fade delay={1000}>
                                <div id="profile-panel-1" className="main-profile-photo bg-light col-md-5 d-flex">
                                    <section className='photo-account col-md-4  d-flex justify-content-center '>
                                        <img src={Profile}></img>
                                    </section>
                                    <section className='account-details   w-100 d-flex align-items-center justify-content-center'>
                                        <div className="name-and-career pt-3">
                                            <h2 className='account-name'><b>Ezz Addin</b> H. Kukhun</h2>
                                            <h6 className='career-name text-muted'>Front-end intern at Foothill</h6>
                                            <h6 className='career-name text-muted'>
                                                An-Najah National University
                                            </h6>
                                            <div className="button-profile-container d-flex justify-content-between">
                                                <button className='edit-profile-photo mt-4 '><i class="fa-solid fa-pen"></i>
                                                    &nbsp;Profile Photo</button>
                                                <button className='edit-profile-photo mt-4 '><i class="fa-solid fa-gear"></i>
                                                    &nbsp;  <Link to="settings">Settings</Link></button>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </Fade>
                            <Fade delay={1000}>
                                <div id="profile-panel-2" className="statistics-account bg-light col-md-4 d-flex flex-wrap">
                                    <section className="statistics-icon  text-center">
                                        <i class="text-warning fa-solid fa-thumbs-up"></i>
                                        <h6 id="count">1234</h6>
                                        <h6 className='statistics-name'>Likes</h6>
                                    </section>
                                    <section className="statistics-icon  text-center">
                                        <i class="text-danger fa-solid fa-comment-dots"></i>
                                        <h6 id="count">243</h6>
                                        <h6 className='statistics-name'>Comments</h6>
                                    </section>
                                    <section className="statistics-icon  text-center">
                                        <i class=" text-primary fa-solid fa-user"></i>
                                        <h6 id="count">372</h6>
                                        <h6 className='statistics-name'>Profiel Views</h6>
                                    </section>
                                    <section className="statistics-icon  text-center">
                                        <i class="text-success fa-regular fa-note-sticky"></i>
                                        <h6 id="count">1234</h6>
                                        <h6 className='statistics-name'>Posts</h6>
                                    </section>
                                    <section className="statistics-icon  text-center">
                                        <i class="text-primary fa-solid fa-people-group"></i>
                                        <h6 id="count">1234</h6>
                                        <h6 className='statistics-name'>Events</h6>
                                    </section>
                                    <section className="statistics-icon  text-center">
                                        <i class="text-danger fa-solid fa-circle-nodes"></i>
                                        <h6 id="count">1234</h6>
                                        <h6 className='statistics-name'>Channels</h6>
                                    </section>

                                </div>
                            </Fade>
                        </div>
                    </div>


                </div>

                <div className="profile-nav d-flex justify-content-around mt-5">
                    <Fade delay={0}>
                        <Link to="basicInfo">About</Link>
                    </Fade>
                    <Fade delay={500}>
                        <Link to="exp">Experiences</Link>
                    </Fade>
                    <Fade delay={1000}>
                        <Link to="education">Education</Link>
                    </Fade>
                    <Fade delay={1500}>
                        <Link to="positions">Positions</Link>
                    </Fade>

                </div>
            </div>

            <Outlet />




        </>
    )
}
