import React, { useEffect, useState } from 'react';
import '../../CSSFiles/UserCss/usernavbar.css';
import Profile from '../../../../imgs/profile.jpg'
import { Link, Outlet } from 'react-router-dom';

export default function UserNavbar() {
    const [userId, setUserId] = useState(""); 
    const [userInfo, setUserInfo] = useState({}); 

    async function getUserInfo(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/AllData/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setUserInfo(json.user);
            });

    }


    useEffect(()=>{
        let dataFromLocal = localStorage.getItem("ACCOUNT"); 
        let dataParsed = JSON.parse(dataFromLocal); 
        setUserId(dataParsed.id); 
        getUserInfo(dataParsed.id);

    })
    return (
        <>
            <div className="user-search-nav ms-auto p-3 d-flex justify-content-end ">
                {/* <div className="search-field w-50  h-100 me-5 ">
                    <input placeholder='Search..' className='search-text-field h-100 me-2' type="text"></input>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div> */}
                <div className="profile-photo me-2 position-relative">
                    <div className="basic-pop-up-data text-center">
                        <img className='me-3 ' src={`https://alumnibackend-fathifathallah.onrender.com/getProfilePicture/${userId}`}></img>
                        <span className='me-2'><b>
                            <Link to="">{userInfo.userName}</Link>
                        </b></span>
                    </div>

                    {/* POP UP MENU IN NAVBAR
                 <section className='pop-up-profile w-100  position-absolute d-flex justify-content-center align-items-center'>
                        <div className="choices">
                            <section className='pop-up-info d-flex pt-3'>
                                <div className="photo-pop-up w-50  d-flex align-items-center justify-content-center ">
                                    <img src={Profile}></img>

                                </div>
                                <div className="pop-up-name d-flex flex-column w-100">
                                    <h4>Ezz Addin H. Kukhun</h4>
                                    <h6 className='text-muted'>Computer Engineering</h6>

                                </div>

                            </section>

                            <div className="user-nav p-4">
                                <div className="nav-icon me-4">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div className="nav-name">
                                    <Link to="alumniProf">View Profile</Link>
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
                                    <i class="fa-solid fa-power-off"></i>
                                </div>
                                <div className="nav-name">
                                    <Link to="timeLine">Log Out</Link>
                                </div>
                            </div>
                        </div>

                    </section> */}

                </div>
                
                {/* <div className="notifications">
                    <i class="fa-regular fa-bell me-4"></i>
                    <i class="fa-regular fa-comments"></i>
                </div> */}
            </div>
            <Outlet/>
        </>
    )
}
