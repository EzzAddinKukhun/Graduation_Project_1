import React from 'react';
import '../../CSSFiles/UserCss/sidebar.css'
import profile from '../../../../imgs/profile.jpg'
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../../imgs/alumni.jpg';
import UserNavbar from './UserNavbar';


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
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="alumniProf">Profile</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-gear"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="settings">Settings</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-timeline"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="timeLine">Timeline</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-code-branch"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="channels">Channels</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-people-roof"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="mem">Memberships</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
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
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-power-off"></i>
                            </div>
                            <div
                            onClick={()=>{
                                localStorage.removeItem("ACCOUNT"); 
                                window.location.reload(); 
                            }}
                             className="nav-name">
                                <Link to="">Log Out</Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <Outlet />



        </>
    )
}
