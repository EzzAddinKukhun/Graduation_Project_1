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
import { Link, useNavigate } from 'react-router-dom';



export default function Jobs() {
    let [stateItem, setStateItem] = useState([]);
    let [stateNameString, setStateNameString] = useState([]);
    const [jobs, setJobs] = useState([]);
    let navigator = useNavigate();
    let [industry, setIndustry] = useState("");
    let [jType, setJType] = useState("");
    let [selectedCountry, setSelectedCountry] = useState("");

    function navigateToSelectedJob(id, orgId) {
        navigator(
            {
                pathname: 'job_apply_page',
                search: `?id=${id}?&orgId=${orgId}`
            }
        );

    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        // className: "center",
        // centerMode: true,
        infinite: false,
        // centerPadding: "60px",
        // slidesToShow: 4,
        // speed: 500

    }

    async function getAllJobs() {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/getAllJobsByDeadlineForUsers`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setJobs(json.jobs);
                console.log(json.jobs)
                // console.log(json.json.jobs)
            });


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
                let arr = JSON.parse(result);
                let states = [];
                arr.map((element, key) => {
                    states[key] = element.name;
                })
                setStateNameString(states)

            })
            .catch(error => console.log('error', error));


    }


    // here when the array brackets are blanks, it represents the componentDidMount
    // we can use useEffect for three functions (Mount,DidMount,Unmount)
    useEffect(() => {
        getStateItems();
        getAllJobs();

    }, []);

    return (
        <>
            <div className="outlet ms-auto">
                <div className="container mt-5">
                    <div className='text-center'>
                        <h2><span className="span-style">{jobs.length} Jobs </span>Available Now!</h2>
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
                                <Combobox
                                    onChange={(e) => {
                                        setJType(e);
                                    }}
                                    defaultValue="Full Time" data={["Full Time", "Part Time", "Volunteer", "Freelance", "Internship"]} />
                            </div>
                            <div className='comboBox-jobs d-flex'>
                                <div className='d-flex align-items-center me-2'>
                                    <i class="fa-solid fa-industry"></i>                                    </div>
                                <Combobox onChange={(e) => {
                                    setIndustry(e)
                                }} defaultValue="IT" data={["IT", "Arts", "Medicine", "Engineering", "Litreature", "Sport"]} />
                            </div>
                            <div className='comboBox-jobs d-flex'>
                                <div className='d-flex align-items-center me-2'>
                                    <i class="fa-solid fa-earth-asia"></i>
                                </div>
                                <Combobox onChange={(e) => {
                                    setSelectedCountry(e)
                                }} placeholder='select state' data={stateNameString} />
                            </div>
                            <button
                                onClick={async () => {
                                    console.log(industry);
                                    console.log(jType);
                                    console.log(selectedCountry);
                                    let country = selectedCountry;
                                    let jobType = jType;

                                    let data = {
                                        industry,
                                        jobType,
                                        country
                                    }


                                    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/job/jobFiltering`, {
                                        method: 'PUT',
                                        body: JSON.stringify(data),
                                        headers: {
                                            "Content-type": "application/json; charset=UTF-8"
                                        }
                                    }).then(response => response.json())
                                        .then(json => {
                                            console.log(json)
                                            setJobs(json.jobsSearched)


                                        });


                                }}
                                className='job-search-btn'>
                                <i class="fa-solid fa-magnifying-glass me-2"></i>
                                Search
                            </button>
                        </div>
                        <img src="https://jthemes.com/themes/wp/jobbox/wp-content/themes/jobbox/assets/imgs/page/job-single/right-job-head.svg" alt=""></img>
                    </div>



                </div>

                <div className="available-jobs">
                    <Slider {...settings}>
                        {
                            jobs.map((job) => {
                                return (
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
                                            <h6 className='job-title mt-2'><b>{job.jobName}</b></h6>
                                            <div className="meta-job-data d-flex justify-content-between text-muted">
                                                <div className="job-type-card d-flex">
                                                    <i class="fa-solid fa-briefcase me-1"></i>
                                                    <h6>{job.jobType}</h6>
                                                </div>
                                                <div className="job-type-time d-flex">
                                                    <i class="fa-solid fa-clock me-1"></i>
                                                    <h6>Posted At:{new Date(job.postDate).toLocaleDateString()}</h6>
                                                </div>
                                            </div>
                                            <p className='job-description'>
                                                {job.jobOverview}
                                            </p>
                                            <div className='job-footer d-flex justify-content-between'>
                                                <div className="job-salary">
                                                    <span className='span-style'>{job.salary}$</span>/month
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        navigateToSelectedJob(job._id, job.orginizationId);
                                                    }}
                                                    className='job-apply-btn'>
                                                    Apply Now!
                                                </button>
                                            </div>


                                        </div>
                                    </div>




                                );


                            })
                        }





                    </Slider>
                </div>


            </div>
        </>
    )
}
