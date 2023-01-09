import React from 'react';
import '../../CSSFiles/UserCss/sidebar.css'
import profile from '../../../../imgs/profile.jpg'
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../../imgs/alumni.jpg';


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
                                <Link to="statistics">Statistics</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-timeline"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="statistics">Settings</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="channelsPage">Channels</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-people-roof"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="jobstable">Memberships</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-people-roof"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="newEvent">Universitis</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-people-roof"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="eventsList">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />



        </>
    )
}
