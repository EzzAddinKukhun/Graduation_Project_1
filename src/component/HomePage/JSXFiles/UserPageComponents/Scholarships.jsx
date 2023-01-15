import React, { useState } from 'react';
import '../../CSSFiles/UserCss/Scholar.css';
import test1 from '../../../../imgs/ch4.jpg'
import test2 from '../../../../imgs/ch5.jpg'
import test3 from '../../../../imgs/ch6.jpg'
import test4 from '../../../../imgs/ch7.jpg'
import test5 from '../../../../imgs/ch8.jpg'
import test6 from '../../../../imgs/ch9.jpg'
import test7 from '../../../../imgs/ch10.jpg'
import sch from '../../../../imgs/studyy.jpg'
import doc from '../../../../imgs/doc.jpg'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Scholarships() {
    const [scolarships, setScholarships] = useState([]);
    const navigate = useNavigate(); 

    function navigateToScholarshipForm (id){
        navigate (
            {
                pathname: 'scholarsForm', 
                search : `?id=${id}`
            }


        ); 
    }

    async function getScolarships() {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/getUserScholarships`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setScholarships(json.scholarships);
            });
    }

    useEffect(() => {
        getScolarships()

    }, [])

    return (
        <>
            <div className="outlet ms-auto">
                <Fade>
                    <div className="header-scholar-2 d-flex justify-content-center align-items-center position-relative mb-4">
                        <Fade delay={700}>
                            <div className="bookname text-light text-center">
                                <h6 id="Scholar_name" className='bookname text-center mb-2'><b>Alumni Scholarships</b></h6>
                                <h6 id="scholar_fund">Scholarships introduced by our partners</h6>
                            </div>
                        </Fade>
                        <div className="overlay-div"></div>
                    </div>
                </Fade>

                <Fade delay={200}>
                    <div className="container">
                        <div className="row justify-content-around mb-5">

                            <Zoom delay={500}>
                                <div className="skills col-md-5 container mb-4 ">
                                    <h2 className='mb-2 p-3'><b><span className='span-style '>Our Scholarships</span></b></h2>
                                    <p id="aboutPara">
                                        In our website, we are introducing more and more of scholraships to students who they
                                        wish to complete their study abroad, we have connections with some of universitis around the world,
                                        and these universities add scholarships here, the fund of this scholarships introduced by university itself,
                                        and these scholarships varies between medicine, engineering, Information Technology, Science
                                        and we offer local scholarships inside country itself, so
                                        you can view all available scholarships which they suit your intersts and your specialization, and if you
                                        find that the mission of one of them suit yourself, don't hesitate to apply!, try to pick up more and more
                                        of chances with us.
                                    </p>
                                </div>
                            </Zoom>

                            <Zoom delay={1000}>
                                <div className="skills col-md-6 container mb-4 ">
                                    <img style={{ width: '100%', height: "100%", borderRadius: 4, opacity: 0.9 }} src={sch}></img>
                                </div>
                            </Zoom>

                        </div>


                        <div className="row justify-content-around">
                            <Zoom delay={500}>
                                <div className="skills col-md-6 container mb-4 ">
                                    <img style={{ width: '100%', height: "100%", borderRadius: 4, opacity: 0.9 }} src={doc}></img>
                                </div>
                            </Zoom>

                            <Zoom delay={1000}>
                                <div className="skills col-md-5 container mb-4 ">
                                    <h2 className='mb-2 p-3'><b><span className='span-style '>Documents</span></b></h2>
                                    <p id="aboutPara">
                                        If you find that one of our scholarships suit your interests and your specialization, and read
                                        all misions, you have before to apply important files from your profile, and these files will send with
                                        your application to the admin of this university, and the files that you have to upload: <b>CV</b>,
                                        <b>your passport</b>, <b>Graduation Marks</b>, and your <b>Identification card</b>. You hve to know that
                                        the reply about your application will arive on your email.
                                    </p>
                                </div>
                            </Zoom>
                        </div>


                    </div>
                </Fade>





                <Fade delay={200}>



                    <div className="container">
                        <div className="row justify-content-between w-90 m-auto   flex-wrap">
                            <h2 className=' mb-5 mt-5'><span className='span-style'><b>Scolarships</b></span></h2>

                            {scolarships.map((scholar, key) => {
                                return (
                                    <Zoom delay={key*400}>
                                        <div className="scholar-card col-md-3 me-3 mb-5 p-3">
                                            <div className="scholar-cover-photo h-40">
                                                <Fade delay={200}>
                                                    <img src={test1}></img>
                                                </Fade>
                                                <div className="overlay-event"></div>
                                                <div className="scholar-title ">
                                                    <h4>
                                                        <Fade delay={1000} right cascade>{scholar.scolarshipName}</Fade></h4>
                                                    <h6><Fade delay={1300} right cascade>UNI NAME</Fade></h6>
                                                </div>
                                            </div>
                                            <div className="scholar-details flex-column flex-wrap w-100 h-50 ">
                                                <div className='scholar-duration w-100 d-flex '>
                                                    <div className="w-20  text-center">
                                                        <i class="fa-solid fa-calendar-days"></i>
                                                    </div>
                                                    <div className="w-80">
                                                        <span className='start-scholar'>
                                                            {new Date(scholar.postDate).toLocaleDateString()}

                                                        </span>
                                                        <span className='end-scholar'>
                                                            {" - " + new Date(scholar.deadline).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='scholar-duration w-100 d-flex '>
                                                    <div className="w-20  text-center">
                                                        <i class="fa-solid fa-align-left"></i>
                                                    </div>
                                                    <div className="w-80 ">
                                                        <p>
                                                            {scholar.scholarshipDescription}
                                                        </p>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="scholar-apply-btn h-10 ">

                                                <button onClick={()=>{
                                                    navigateToScholarshipForm(scholar._id)
                                                }} className='h-100'>Apply Now!
                                                </button>

                                            </div>
                                            <div className="circle-icon">
                                                <div>
                                                    <i class="fa-solid fa-user-graduate"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Zoom>
                                );

                            })}


                        </div>
                    </div>




                </Fade>










            </div>
        </>
    )
}
