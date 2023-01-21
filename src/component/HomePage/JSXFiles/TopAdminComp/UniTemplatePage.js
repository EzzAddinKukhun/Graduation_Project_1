import React, { useEffect } from 'react';
import '../../CSSFiles/UserCss/userprofile.css'
import cover from '../../../../imgs/cover.jpg';
import '../../CSSFiles/ChannelCss/channel.css'
import Profile from '../../../../imgs/profile.jpg';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Settings from './Settings';
import testImg from '../../../../imgs/ch7.jpg'
import Slide from 'react-reveal/Slide';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import Swal from 'sweetalert2';
import { useSearchParams } from 'react-router-dom';


export default function MemTemplatePage() {

    const [counterOn, setCounterOn] = useState(false);
    let [uniId, setUniId] = useState("");
    let [searchParams, setSearchParams] = useSearchParams();
    const [uniInfo, setUniInfo] = useState({});



    async function getUniInfo(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/university/getAllUniversities`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                //get the main info of org 
                json.university.map((uni)=>{
                    if (uni._id == id){
                        setUniInfo(uni); 
                    }

                })


            });



    }

    useEffect(() => {
        let id = searchParams.get('id');
        setUniId(id); 
        console.log(id)
        getUniInfo(id); 

    }, [])



    return (
        <>
            <div className='outlet ms-auto'>
                <div className="channel-header">
                    <div className='channel-header-main-info'>
                        <Fade delay={100}>
                            <img className='channel-cover-image' src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationCoverPic/${uniId}`}  alt="" />
                        </Fade>
                        <div className='channel-title-category  text-center text-light' >
                            <Fade delay={600}>
                                <h2><b>{uniInfo.universityName}</b></h2>
                                {/* <h6><b>{uniInfo.orginizationName}</b></h6> */}
                            </Fade>
                        </div>
                    </div>
                    <div className="overlayChannel"></div>


                </div>

                <div className='container overflow-hidden mb-3'>
                    <div className=" channel-expert p-3">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <h2 className='mb-2 p-3'><b><span className='span-style '>University</span></b> Expert</h2>
                            </div>

                        </div>
                        <div className='d-flex channel-expert-data-container'>
                            <Fade delay={700}>
                                <div className='channel-expert-thumbnail d-flex align-items-center '>
                                    <img className='channel-expert-thumb' src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationProfilePic/${uniId}`} alt="" />
                                    <div className='ps-3 d-flex align-items-center'>
                                        <div>
                                            <h3><b>{uniInfo.expertName}</b></h3>
                                            <h6>University Executer Manager</h6>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade delay={700}>
                                <div className='channel-expert-info d-flex p-2 justify-content-around'>
                                    <div className="channel-exp-info sign-up-field mb-4 d-flex ">
                                        <div className="icon-form text-center">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="lastNameTextField" className="form-label">Phone Number</label>
                                            <h6 name="phone"><b>{uniInfo.expertPhoneNumber}</b></h6>

                                        </div>
                                    </div>
                                    <div className="channel-exp-info sign-up-field mb-4 d-flex ">
                                        <div className="icon-form text-center">
                                            <i className="fa-solid fa-envelope "></i>
                                        </div>
                                        <div className="field-form ">
                                            <label for="BirthdateTextField" className="form-label">Email Address</label>
                                            <h6 name="email"><b>{uniInfo.expertEmailAddress}</b></h6>
                                        </div>
                                    </div>

                                </div>
                            </Fade>
                        </div>


                    </div>
                </div>

                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <Fade>
                        <div className='container overflow-hidden mb-3 '>
                            <div className=" channel-expert-2 p-3">
                                <h2 className='mb-2 p-3'><b><span className='span-style '>University</span></b> Activites</h2>
                                <div className='d-flex justify-content-around'>
                                    {/* <section className="statistics-icon  text-center">
                                        <i className="text-danger fa-solid fa-briefcase"></i>
                                        <h6 id="count">{counterOn && <CountUp start={0} end={uniInfo.jobsNum} duration={5} />}+</h6>
                                        <h6 className='statistics-name'>Jobs</h6>
                                    </section> */}
                                    <section className="statistics-icon  text-center">
                                        <i className=" text-warning fa-solid fa-calendar-days"></i>
                                        <h6 id="count">{counterOn && <CountUp start={0} end={uniInfo.eventsNum} duration={5} />}+</h6>
                                        <h6 className='statistics-name'>Events</h6>
                                    </section>
                                    <section className="statistics-icon  text-center">
                                        <i className="text-primary fa-solid fa-file-pen"></i>
                                        <h6 id="count">{counterOn && <CountUp start={0} end={uniInfo.scholarships?.length} duration={5} />}+</h6>
                                        <h6 className='statistics-name'>Scholarships</h6>
                                    </section>
                                    {/* <section className="statistics-icon  text-center">
                                        <i className=" text-success fa-solid fa-file-pen"></i>
                                        <h6 id="count">{counterOn && <CountUp start={0} end={uniInfo.members?.length} duration={5} />}+</h6>
                                        <h6 className='statistics-name'><button data-bs-toggle="modal" data-bs-target="#exampleModal">Members</button></h6>
                                    </section> */}

                                </div>


                            </div>
                        </div>
                    </Fade>
                </ScrollTrigger>

                <section className='w-100 h-100 mt-3 p-3'>
                    <div className="skills container mb-4 ">
                        <h2 className='mb-2 p-3'><b><span className='span-style '>About</span></b></h2>
                        <p id="aboutPara">
                            <Fade cascade>
                                {uniInfo.description}
                            </Fade>
                        </p>
                    </div>


                    {/* PERSONAL INFO  */}
                    <Fade >
                        <div className="container personal-info">
                            <h2 className='mb-4'><b><span className='span-style '>University</span></b> Information</h2>
                            <div className="row">
                                <div className="channel-exp-info w-50 sign-up-field mb-4 d-flex">
                                    <div className="icon-form text-center">
                                        <i class="fa-solid fa-sitemap"></i>
                                    </div>
                                    <div className="field-form ">
                                        <label for="BirthdateTextField" className="form-label">University Name</label>
                                        <h6 name="email"><b>{uniInfo.universityName}</b></h6>
                                    </div>
                                </div>
                                <div className="channel-exp-info w-50 sign-up-field mb-4 d-flex">
                                    <div className="icon-form text-center">
                                        <i class="fa-solid fa-sitemap"></i>
                                    </div>
                                    <div className="field-form ">
                                        <label for="BirthdateTextField" className="form-label">Category</label>
                                        <h6 name="email"><b>{uniInfo.category}</b></h6>
                                    </div>
                                </div>

                                <div className="channel-exp-info w-50 sign-up-field mb-4 d-flex">
                                    <div className="icon-form text-center">
                                        <i class="fa-solid fa-earth-americas"></i>
                                    </div>
                                    <div className="field-form ">
                                        <label for="BirthdateTextField" className="form-label">Country</label>
                                        <h6 name="email"><b>{uniInfo.country}</b></h6>
                                    </div>
                                </div>
                                <div className="channel-exp-info w-50 sign-up-field mb-4 d-flex">
                                    <div className="icon-form text-center">
                                        <i class="fa-regular fa-building"></i>
                                    </div>
                                    <div className="field-form ">
                                        <label for="BirthdateTextField" className="form-label">City</label>
                                        <h6 name="email"><b>{uniInfo.city}</b></h6>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </Fade>
                </section>

            </div>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Followers</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex flex-column">
                            <div class="mb-3">
                                <input type="text" placeholder='Search Followers' class="form-control" id="searchFollowers" aria-describedby="searchFollowers" />
                            </div>
                            <section className="Followers">
                                <div className="person-like d-flex mb-2 w-100">
                                    <div className="follower-thumbnail mt-1">
                                        <img src={Profile}></img>
                                    </div>
                                    <div className="liked-person-info h-100   d-flex flex-column">
                                        <h5><b>Ezz Addin H. Kukhun</b></h5>
                                        <h6 className='text-muted'>Frontend intern @ Foothill Technology Solutions LLC. </h6>
                                    </div>
                                    <button className='removeFollower' type="button" >
                                        <i className="fa-solid fa-trash-can text-danger"></i>
                                    </button>
                                </div>
                                <div className="person-like d-flex mb-2 w-100">
                                    <div className="follower-thumbnail mt-1">
                                        <img src={Profile}></img>
                                    </div>
                                    <div className="liked-person-info h-100   d-flex flex-column">
                                        <h5><b>Ezz Addin H. Kukhun</b></h5>
                                        <h6 className='text-muted'>Frontend intern @ Foothill Technology Solutions LLC. </h6>
                                    </div>
                                    <button className='removeFollower' type="button" >
                                        <i className="fa-solid fa-trash-can text-danger"></i>
                                    </button>
                                </div>
                                <div className="person-like d-flex mb-2 w-100">
                                    <div className="follower-thumbnail mt-1">
                                        <img src={Profile}></img>
                                    </div>
                                    <div className="liked-person-info h-100   d-flex flex-column">
                                        <h5><b>Ezz Addin H. Kukhun</b></h5>
                                        <h6 className='text-muted'>Frontend intern @ Foothill Technology Solutions LLC. </h6>
                                    </div>
                                    <button className='removeFollower' type="button" >
                                        <i className="fa-solid fa-trash-can text-danger"></i>
                                    </button>
                                </div>
                                <div className="person-like d-flex mb-2 w-100">
                                    <div className="follower-thumbnail mt-1">
                                        <img src={Profile}></img>
                                    </div>
                                    <div className="liked-person-info h-100   d-flex flex-column">
                                        <h5><b>Ezz Addin H. Kukhun</b></h5>
                                        <h6 className='text-muted'>Frontend intern @ Foothill Technology Solutions LLC. </h6>
                                    </div>
                                    <button className='removeFollower' type="button" >
                                        <i className="fa-solid fa-trash-can text-danger"></i>
                                    </button>
                                </div>
                                <div className="person-like d-flex mb-2 w-100">
                                    <div className="follower-thumbnail mt-1">
                                        <img src={Profile}></img>
                                    </div>
                                    <div className="liked-person-info h-100   d-flex flex-column">
                                        <h5><b>Ezz Addin H. Kukhun</b></h5>
                                        <h6 className='text-muted'>Frontend intern @ Foothill Technology Solutions LLC. </h6>
                                    </div>
                                    <button className='removeFollower' type="button" >
                                        <i className="fa-solid fa-trash-can text-danger"></i>
                                    </button>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
