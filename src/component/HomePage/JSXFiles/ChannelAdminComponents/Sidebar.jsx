import React from 'react';
import '../../CSSFiles/UserCss/sidebar.css'
import profile from '../../../../imgs/profile.jpg'
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../../imgs/alumni.jpg';
import UserNavbar from '../UserPageComponents/UserNavbar';


export default function Sidebar() {
    return (
        <>

            <div className="cont d-flex">
                <div className="side-bar d-flex flex-column   position-fixed">
                    <div className="profile-info">
                        <img className='profile-img' src={logo}></img>
                    </div>

                    <div className="user-navigations d-flex flex-column">
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-timeline"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="timeLine">Add New Post</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="newJob">Add New Job</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-people-roof"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="jobstable">Jobs</Link>
                            </div>
                        </div>
                        {/* <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-handshake"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="events">Events</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-user-graduate"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="scholars">Scholarships</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="jobs">Jobs</Link>
                            </div>
                        </div> */}

                    </div>

                </div>

            </div>

            <Outlet />



        </>
    )
}
