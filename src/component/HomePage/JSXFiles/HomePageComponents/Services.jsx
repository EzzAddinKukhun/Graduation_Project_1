import React from 'react';
import '../../CSSFiles/Service.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



export default function Services() {
    return (
        <>
            <div className="container">
                <div className="service-header mt-5 mb-3 ">
                    <Fade cascade delay={300}><span>Discover Your</span></Fade> <b className=''><Fade cascade top delay={500}><span>Passion. </span></Fade></b>
                    <Fade cascade delay={700}><span>Build Your</span></Fade> <b className=''><Fade cascade top delay={900}><span>career!</span></Fade></b><br></br>
                </div>

                <Zoom right cascade  left delay={900}>
                    Increase your prospects for success. access local and international events to help you advance your leadership and communication skills. Attend workshops and seminars to enhance your career. Come on over and join us!
                </Zoom>
                <Fade delay={1100}>
                    <h5 className='text-center mt-4 mb-5'>Your next opportunity is waiting for you on Alumni!</h5>
                </Fade>
                <div className="row">
                    {/* //FIRST SERVICE  */}
                    <Fade delay={1400}>
                        <div className="service col-md-4 d-flex ">
                            <div className="service-icon">
                                <div className='icon-frame d-flex justify-content-center align-items-center'>
                                    <i class="fa-solid fa-1"></i>
                                </div>
                            </div>
                            <div className="service-caption">
                                <h2>Keep yourself in touch</h2>
                                <p>Keep yourself in touch with all your memberships and the local and worldwide unions. </p>
                            </div>

                        </div>
                    </Fade>

                    <Fade delay={1800}>
                        <div className="service col-md-4 d-flex ">
                            <div className="service-icon">
                                <div className='icon-frame d-flex justify-content-center align-items-center'>
                                    <i class="fa-solid fa-2"></i>
                                </div>
                            </div>
                            <div className="service-caption">
                                <h2>Career Resources</h2>
                                <p>Access to many careers’ resources-full-time, part-time, internships, and scholarships, with some of the top local and worldwide businesses and colleges. </p>
                            </div>

                        </div>
                    </Fade>

                    <Fade delay={2200}>
                        <div className="service col-md-4 d-flex ">
                            <div className="service-icon">
                                <div className='icon-frame d-flex justify-content-center align-items-center'>
                                    <i class="fa-solid fa-3"></i>
                                </div>
                            </div>
                            <div className="service-caption">
                                <h2>Career Improvement</h2>
                                <p>Attend live events with industry professionals and academic researchers who can offer exceptional expertise, career guidance, best practices, and direction.</p>
                            </div>

                        </div>
                    </Fade>
                </div>
            </div>



        </>
    )
}
