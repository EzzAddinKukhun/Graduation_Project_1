import React, { useEffect } from 'react';
import '../../CSSFiles/UserCss/Scholar.css'
import test1 from '../../../../imgs/OIP.jpg'
import { Fade } from 'react-reveal';
import { Zoom } from 'react-reveal';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ScholarshipsForm() {
    let [searchParam, setSearchParam] = useSearchParams();
    let [scholar, setScholar] = useState({});

    async function getScholarshipInformation(id) {

        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/getScholarshipInfo/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setScholar(json.scholarship[0]);
            });
    }

    useEffect(() => {
        let id = searchParam.get('id');
        getScholarshipInformation(id);


    }, [])

    return (
        <>
            <div className="outlet ms-auto">

                <Fade>
                    <div className="header-scholar d-flex justify-content-center align-items-center position-relative">
                        <Fade delay={700}>
                            <div className="bookname text-light text-center">
                                <h6 id="Scholar_name" className='bookname text-center mb-2'><b>{scholar.scolarshipName}</b></h6>
                                {/* <h6 id="scholar_fund">An-Najah National University</h6> */}
                            </div>
                        </Fade>
                        <div className="overlay-div"></div>
                    </div>
                </Fade>

                <Zoom delay={500}>
                    <div className="container">
                        <div className="skills container mb-4 ">
                            <div className='d-flex justify-content-between'>

                                <h2 className='mb-2 p-3'><b><span className='span-style '>Overview</span></b></h2>
                                <button
                                    onClick={async () => {
                                        let userData = localStorage.getItem("ACCOUNT");
                                        let dataParsed = JSON.parse(userData);
                                        let _id = dataParsed.id;
                                        let scholarshipId = scholar._id;


                                        let data = {
                                            _id,
                                            scholarshipId
                                        }

                                        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/applyToScolarship`, {
                                            method: 'PUT',
                                            body: JSON.stringify(data),
                                            headers: {
                                                "Content-type": "application/json; charset=UTF-8"
                                            }
                                        }).then(response => response.json())
                                            .then(json => {

                                                if (json.message == "success"){
                                                    Swal.fire("Good Job", "Your Application Send Successfully", "success")

                                                }
                                                else if (json.message == "user 4 documents must be uploaded"){ 
                                                    Swal.fire("Ops!", "Your 4 documents must be uploaded", "error")  
                                                }



                                            });
                                    }}
                                    className='job-apply-btn mt-3'>
                                    Apply Now!
                                </button>

                            </div>
                            <p id="aboutPara">
                                {
                                    scholar.scholarshipOverview
                                }
                            </p>
                        </div>
                    </div>
                </Zoom>

                <Zoom delay={1000}>
                    <div className="container">
                        <div className="skills container mb-4 ">
                            <h2 className='mb-2 p-3'><b><span className='span-style '>Mission</span></b></h2>
                            <ol className='ms-4'>
                                {
                                    scholar.scholarshipMissions?.map((ee) => {
                                        return (<li>{ee}</li>
                                        );

                                    })

                                }

                            </ol>
                        </div>

                    </div>
                </Zoom>
            </div>





        </>
    )
}
