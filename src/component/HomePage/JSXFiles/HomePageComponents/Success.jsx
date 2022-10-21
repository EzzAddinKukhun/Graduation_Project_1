import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Success_img from '../../../../imgs/success.png';
import '../../CSSFiles/Success.css'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


export default function Success() {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <div className="success overflow-hidden">

                <div className="img-statistics">
                    <Slide bottom delay={2000} >
                        <img className='img-succ' src={Success_img}></img>
                        <div className="img-overlay"></div>
                    </Slide>

                </div>
                <div className=" counter-up position-absolute top-0 w-100">
                    <div className="container">
                        <Fade cascade top delay={1000}>
                            <h1 className='text-center our-success-story'>Our <b><span className='span-style'>Success Story</span></b></h1>
                        </Fade>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="success-container row">
                                <Fade left >
                                    <div className="col-md-3  success-card ">
                                        <div className="succ-icon w-100">
                                            <i class="fa-regular fa-folder"></i>
                                            <div className="count mt-3 mb-3">
                                                <b><span className='span-style'>{counterOn && <CountUp start={0} end={262} duration={5} />}+</span></b>
                                            </div>
                                            <span className='span-line'></span>
                                            <h3 className='mt-3'>Support Threads</h3>

                                        </div>


                                    </div>
                                </Fade>

                                <Fade left >
                                    <div className="col-md-3  success-card ">
                                        <div className="succ-icon w-100">
                                            <i class="fa-sharp fa-solid fa-chart-simple"></i>                                        <div className="count mt-3 mb-3">
                                                <b><span className='span-style'>{counterOn && <CountUp start={0} end={53673} duration={5} />}+</span></b>
                                            </div>
                                            <span className='span-line'></span>
                                            <h3 className='mt-3'>Queries Solved</h3>

                                        </div>


                                    </div>
                                </Fade>

                                <Fade left >
                                    <div className="col-md-3  success-card ">
                                        <div className="succ-icon w-100">
                                            <i class="fa-solid fa-user"></i>                                        <div className="count mt-3 mb-3">
                                                <b><span className='span-style'>{counterOn && <CountUp start={0} end={6353} duration={5} />}+</span></b>
                                            </div>
                                            <span className='span-line'></span>
                                            <h3 className='mt-3'>Registered Users</h3>

                                        </div>


                                    </div>
                                </Fade>

                                <Fade left >
                                    <div className="col-md-3  success-card ">
                                        <div className="succ-icon w-100">
                                            <i class="fa-regular fa-face-laugh-beam"></i>                                    <div className="count mt-3 mb-3">
                                                <b><span className='span-style'>{counterOn && <CountUp start={0} end={5342} duration={5} />}+</span></b>
                                            </div>
                                            <span className='span-line'></span>
                                            <h3 className='mt-3'>Happy Customers
                                            </h3>

                                        </div>


                                    </div>
                                </Fade>

                                <Fade delay={5000}>
                                    <button>View Services</button>
                                    <h6 className='h6-exp text-center mt-5'>Join to our team, and write your success story with us!</h6>
                                </Fade>
                            </div>
                        </ScrollTrigger>

                    </div>
                </div>
            </div>
        </>
    )
}
