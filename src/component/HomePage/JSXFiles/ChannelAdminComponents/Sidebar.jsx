import React, { useEffect, useState } from 'react';
import '../../CSSFiles/UserCss/sidebar.css'
import profile from '../../../../imgs/profile.jpg'
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../../imgs/alumni.jpg';
import UserNavbar from '../UserPageComponents/UserNavbar';


export default function Sidebar() {
    let [adminType, setAdminType] = useState("")

    useEffect(() => {
        let data = localStorage.getItem("ACCOUNT");
        let dataParsed = JSON.parse(data);
        let adminType = dataParsed.type;
        setAdminType(adminType);
    })
    return (
        <>
            {console.log(adminType)}
            <div className="cont d-flex">
                <div className="side-bar d-flex flex-column   position-fixed">
                    <div className="profile-info">
                        <img className='profile-img' src={logo}></img>
                    </div>

                    <div className="user-navigations d-flex flex-column">

                        {adminType == "channelAdminPage" || adminType == "memAdminPage" ?
                            <>
                                <div className="user-nav p-4">
                                    <div className="nav-icon me-4">
                                        <i class="fa-solid fa-timeline"></i>
                                    </div>
                                    <div className="nav-name">
                                        <Link to="timeLine">New Post</Link>
                                    </div>
                                </div>
                            </> : <></>
                        }
                        {adminType == "channelAdminPage" ?
                            <>
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
                            </> : <></>



                        }




                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-people-roof"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="newEvent">New Event</Link>
                            </div>
                        </div>
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-people-roof"></i>
                            </div>
                            <div className="nav-name">
                                <Link to="eventsList">Events</Link>
                            </div>
                        </div>

                        {adminType == "uniAdminPage" ?
                            <>
                                <div className="user-nav p-4">
                                    <div className="nav-icon me-4">
                                        <i class="fa-solid fa-people-roof"></i>
                                    </div>
                                    <div className="nav-name">
                                        <Link to="newSchoolar">New Scholarship</Link>
                                    </div>
                                </div>
                                <div className="user-nav p-4">
                                    <div className="nav-icon me-4">
                                        <i class="fa-solid fa-people-roof"></i>
                                    </div>
                                    <div className="nav-name">
                                        <Link to="scholarTable">Scholarships</Link>
                                    </div>
                                </div>
                            </>
                            : <></>


                        }
                        <div className="user-nav p-4">
                            <div className="nav-icon me-4">
                                <i class="fa-solid fa-power-off"></i>
                            </div>
                            <div
                                onClick={() => {
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
