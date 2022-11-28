import React from 'react'
import '../../CSSFiles/UserCss/jobs.css'
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from "react-slick";
import l1 from '../../../../imgs/logo_job_1.png';
import l2 from '../../../../imgs/logo_job_2.png';
import l3 from '../../../../imgs/logo_job_3.png';
import l4 from '../../../../imgs/logo_job_4.png';
import { Link } from 'react-router-dom';



export default function Jobs() {
    let [stateItem, setStateItem] = useState([]);
    let [stateNameString, setStateNameString] = useState([]);
    let [stateArrive, setIfStateArrive] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
        // className: "center",
        // centerMode: true,
        // infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 4,
        // speed: 500

    }


    async function getStateItems() {
        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", "dFJHVUZZMm56M1AwT0FTU0ZERGRCU0hhbFVoNUdGWVdwQ3IxM1J6ag==");

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
            .then(response => response.text())
            .then(result => {
                setStateItem(JSON.parse(result));
                stateItem.map((state) => {
                    stateNameString.push(state.name)
                })
                console.log(stateNameString)

                setIfStateArrive(true)

            })
            .catch(error => console.log('error', error));

        if (stateArrive) {
            // console.log(JSON.parse(stateItem));
            // console.log(stateItem)
        }
        else {
            console.log("HH")
        }
    }


    // here when the array brackets are blanks, it represents the componentDidMount
    // we can use useEffect for three functions (Mount,DidMount,Unmount)
    useEffect(() => {
        getStateItems();

    }, []);

    return (
        stateArrive ?
            <>
                <div className="outlet ms-auto">
                    <div className="container mt-5">
                        <div className='text-center'>
                            <h2><span className="span-style">22 Jobs </span>Available Now!</h2>
                            <p className='m-auto w-50'>
                                We are introducing many jobs in our website from many channels, so if you graduate and you
                                will work, search about your job with us!
                            </p>
                        </div>

                        <div className="jobs-header   d-flex align-items-center justify-content-center">
                            <img src="https://jthemes.com/themes/wp/jobbox/wp-content/themes/jobbox/assets/imgs/page/job-single/left-job-head.svg" alt=""></img>
                            <div className='jobs-header-search w-50 ms-5 me-5'>

                                <div className='comboBox-jobs d-flex'>
                                    <div className='d-flex align-items-center me-2'>
                                        <i class="fa-solid fa-briefcase"></i>
                                    </div>
                                    <Combobox defaultValue="Full Time" data={["Full Time", "Part Time", "Volunteer", "Freelance", "Internship"]} />
                                </div>
                                <div className='comboBox-jobs d-flex'>
                                    <div className='d-flex align-items-center me-2'>
                                        <i class="fa-solid fa-globe"></i>
                                    </div>
                                    <Combobox defaultValue="Online" data={["Online", "Remote"]} />
                                </div>
                                <div className='comboBox-jobs d-flex'>
                                    <div className='d-flex align-items-center me-2'>
                                        <i class="fa-solid fa-earth-asia"></i>
                                    </div>
                                    <Combobox placeholder='select state' data={stateNameString} />
                                </div>
                                <button className='job-search-btn'>
                                    <i class="fa-solid fa-magnifying-glass me-2"></i>
                                    Search
                                </button>
                            </div>
                            <img src="https://jthemes.com/themes/wp/jobbox/wp-content/themes/jobbox/assets/imgs/page/job-single/right-job-head.svg" alt=""></img>
                        </div>



                    </div>

                    <div className="available-jobs">
                        <Slider {...settings}>
                            <div className='job-container '>
                                <div className='job p-3 position-relative'>
                                    <div className="job-card-header d-flex">
                                        <div className='job-thumb me-3'>
                                            <img src={l1}></img>
                                        </div>
                                        <div className='job-card-title '>
                                            <h4>Bing Search</h4>
                                            <h6 className='text-muted'><i class="fa-solid fa-location-dot"></i>
                                                &nbsp; Nablus, Palestine
                                            </h6>
                                        </div>
                                    </div>
                                    <h6 className='job-title mt-2'><b>Full Stack Engineer</b></h6>
                                    <div className="meta-job-data d-flex justify-content-between text-muted">
                                        <div className="job-type-card d-flex">
                                            <i class="fa-solid fa-briefcase me-1"></i>
                                            <h6>Full Time</h6>
                                        </div>
                                        <div className="job-type-time d-flex">
                                            <i class="fa-solid fa-clock me-1"></i>
                                            <h6>Posted 2 months ago</h6>
                                        </div>
                                    </div>
                                    <p className='job-description'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum eum sint sunt natus voluptate. Quisquam enim asperiores aut voluptate quo ipsum reprehenderit officiis pariatur inventore totam, quas est quis.
                                    </p>
                                    <div className='job-footer d-flex justify-content-between'>
                                        <div className="job-salary">
                                            <span className='span-style'>500$</span>/month
                                        </div>

                                        <button className='job-apply-btn'>
                                            Apply Now!
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className='job-container '>
                                <div className='job p-3 position-relative'>
                                    <div className="job-card-header d-flex">
                                        <div className='job-thumb me-3'>
                                            <img src={l2}></img>
                                        </div>
                                        <div className='job-card-title '>
                                            <h4>Aceable, Inc.</h4>
                                            <h6 className='text-muted'><i class="fa-solid fa-location-dot"></i>
                                                &nbsp; Nablus, Palestine
                                            </h6>
                                        </div>
                                    </div>
                                    <h6 className='job-title mt-2'><b>Java Software Engineer</b></h6>
                                    <div className="meta-job-data d-flex justify-content-between text-muted">
                                        <div className="job-type-card d-flex">
                                            <i class="fa-solid fa-briefcase me-1"></i>
                                            <h6>Full Time</h6>
                                        </div>
                                        <div className="job-type-time d-flex">
                                            <i class="fa-solid fa-clock me-1"></i>
                                            <h6>Posted 2 months ago</h6>
                                        </div>
                                    </div>
                                    <p className='job-description'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum eum sint sunt natus voluptate. Quisquam enim asperiores aut voluptate quo ipsum reprehenderit officiis pariatur inventore totam, quas est quis.
                                    </p>
                                    <div className='job-footer d-flex justify-content-between'>
                                        <div className="job-salary">
                                            <span className='span-style'>500$</span>/month
                                        </div>

                                        <button className='job-apply-btn'>
                                            <Link to="../job_apply_page">Apply Now!</Link>
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className='job-container '>
                                <div className='job p-3 position-relative'>
                                    <div className="job-card-header d-flex">
                                        <div className='job-thumb me-3'>
                                            <img src={l3}></img>
                                        </div>
                                        <div className='job-card-title '>
                                            <h4>Ashford</h4>
                                            <h6 className='text-muted'><i class="fa-solid fa-location-dot"></i>
                                                &nbsp; Nablus, Palestine
                                            </h6>
                                        </div>
                                    </div>
                                    <h6 className='job-title mt-2'><b>Lead Quality Control QA</b></h6>
                                    <div className="meta-job-data d-flex justify-content-between text-muted">
                                        <div className="job-type-card d-flex">
                                            <i class="fa-solid fa-briefcase me-1"></i>
                                            <h6>Full Time</h6>
                                        </div>
                                        <div className="job-type-time d-flex">
                                            <i class="fa-solid fa-clock me-1"></i>
                                            <h6>Posted 2 months ago</h6>
                                        </div>
                                    </div>
                                    <p className='job-description'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum eum sint sunt natus voluptate. Quisquam enim asperiores aut voluptate quo ipsum reprehenderit officiis pariatur inventore totam, quas est quis.
                                    </p>
                                    <div className='job-footer d-flex justify-content-between'>
                                        <div className="job-salary">
                                            <span className='span-style'>500$</span>/month
                                        </div>

                                        <button className='job-apply-btn'>
                                            Apply Now!
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className='job-container '>
                                <div className='job p-3 position-relative'>
                                    <div className="job-card-header d-flex">
                                        <div className='job-thumb me-3'>
                                            <img src={l4}></img>
                                        </div>
                                        <div className='job-card-title '>
                                            <h4>Tesla</h4>
                                            <h6 className='text-muted'><i class="fa-solid fa-location-dot"></i>
                                                &nbsp; Nablus, Palestine
                                            </h6>
                                        </div>
                                    </div>
                                    <h6 className='job-title mt-2'><b>UI/UX Designer</b></h6>
                                    <div className="meta-job-data d-flex justify-content-between text-muted">
                                        <div className="job-type-card d-flex">
                                            <i class="fa-solid fa-briefcase me-1"></i>
                                            <h6>Full Time</h6>
                                        </div>
                                        <div className="job-type-time d-flex">
                                            <i class="fa-solid fa-clock me-1"></i>
                                            <h6>Posted 2 months ago</h6>
                                        </div>
                                    </div>
                                    <p className='job-description'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum eum sint sunt natus voluptate. Quisquam enim asperiores aut voluptate quo ipsum reprehenderit officiis pariatur inventore totam, quas est quis.
                                    </p>
                                    <div className='job-footer d-flex justify-content-between'>
                                        <div className="job-salary">
                                            <span className='span-style'>500$</span>/month
                                        </div>

                                        <button className='job-apply-btn'>
                                            Apply Now!
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className='job-container '>
                                <div className='job p-3 position-relative'>
                                    <div className="job-card-header d-flex">
                                        <div className='job-thumb me-3'>
                                            <img src={l1}></img>
                                        </div>
                                        <div className='job-card-title '>
                                            <h4>Bing Search</h4>
                                            <h6 className='text-muted'><i class="fa-solid fa-location-dot"></i>
                                                &nbsp; Nablus, Palestine
                                            </h6>
                                        </div>
                                    </div>
                                    <h6 className='job-title mt-2'><b>Full Stack Engineer</b></h6>
                                    <div className="meta-job-data d-flex justify-content-between text-muted">
                                        <div className="job-type-card d-flex">
                                            <i class="fa-solid fa-briefcase me-1"></i>
                                            <h6>Full Time</h6>
                                        </div>
                                        <div className="job-type-time d-flex">
                                            <i class="fa-solid fa-clock me-1"></i>
                                            <h6>Posted 2 months ago</h6>
                                        </div>
                                    </div>
                                    <p className='job-description'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum eum sint sunt natus voluptate. Quisquam enim asperiores aut voluptate quo ipsum reprehenderit officiis pariatur inventore totam, quas est quis.
                                    </p>
                                    <div className='job-footer d-flex justify-content-between'>
                                        <div className="job-salary">
                                            <span className='span-style'>500$</span>/month
                                        </div>

                                        <button className='job-apply-btn'>
                                            Apply Now!
                                        </button>
                                    </div>


                                </div>
                            </div>




                        </Slider>
                    </div>


                </div>
            </> : ""
    )
}
