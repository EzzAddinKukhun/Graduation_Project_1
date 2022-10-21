import React from 'react';
import '../../CSSFiles/Portfolio.css';

import s1 from '../../../../imgs/S1.jpg';
import s2 from '../../../../imgs/S2.jpg';
import s3 from '../../../../imgs/S3.jpg';

import b1 from '../../../../imgs/B1.png';
import b2 from '../../../../imgs/B2.png';
import b3 from '../../../../imgs/B3.png';

import q from '../../../../imgs/quote.PNG';

import pro1 from '../../../../imgs/pro1.jpg';
import pro2 from '../../../../imgs/pro2.jpg';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';




export default function Portfolio() {


    return (
        <>
            <div className="portfolio mt-5">
                <Zoom left>
                    <h1 className='text-center'>Our <span className='span-style'><b>Broad Range</b></span> of Services</h1>
                </Zoom>
                <p className='braod-range-para'>
                    <Fade delay={1500} cascade left>
                        We have a broad range of services, and this services will empowered you to be
                        a good person in the work even if you are fresh graduate, so look at some of these services,
                        and join us
                    </Fade>
                </p>
                <Zoom delay={2200}>
                    <h6 className='text-center mt-5'>-Ezz Addin H. Kukhun-</h6>
                    <h6 className='text-center'>(CEO)</h6>
                </Zoom>

                <div className="img-container-ser ">
                    <Zoom left delay={2600}>
                        <div className="col-md-4 position-relative act-div ser overflow-hidden ">
                            <img className='img-act ' src={s1}></img>

                            <div className="ser-features position-absolute bottom-0">
                                <h4>Simulation Models</h4>
                                <h6>We unearth the hidden story...</h6>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom left delay={3000}>
                        <div className="col-md-4 position-relative act-div ser overflow-hidden ">
                            <img className='img-act ' src={s2}></img>
                            <div className="ser-features position-absolute bottom-0">
                                <h4>The Team that delivers</h4>
                                <h6>Blending youth with experience</h6>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom left delay={3400}>
                        <div className="col-md-4 position-relative act-div ser overflow-hidden ">
                            <img className='img-act ' src={s3}></img>
                            <div className="ser-features position-absolute bottom-0">
                                <h4>The strategic advantage</h4>
                                <h6>The brains behind the scene</h6>
                            </div>

                        </div>
                    </Zoom>

                </div>
            </div>

            <Fade>
                <div id="parallax" className="parallax mt-5">
                    <div className="overlay"></div>
                    <div className="ee position-absolute  w-100  text-center ">
                        <h2><Fade delay={1200} cascade><b>We empowered 1K Alumni</b></Fade></h2>
                        <h6><Zoom delay={1600}>Registration is completely free...enrol now!</Zoom></h6>
                        <Fade delay={2000}>
                            <button className='read-more-btn'>GET STARTED!</button>
                        </Fade>
                    </div>
                </div>
            </Fade>

            <div className="best-of-us ">
                <Zoom>
                    <h1 className='text-center'>The <b><span className="span-style">BEST OF US</span></b></h1>
                </Zoom>
                <Zoom delay={1000}>
                    <h5 className='text-muted text-center mt-3'>What you will get with us?</h5>
                </Zoom>
                <div className="container mt-4">
                    <div className="row">
                        <div className="bfoc text-center col-12 col-md-4">
                            <Fade delay={1200}>
                                <div className="bfoc-img">
                                    <img src={b1}></img>
                                </div>
                            </Fade>
                            <Fade delay={1400}>
                                <h4>Professionals <b><span className='span-style'>at your service</span></b></h4>
                                <span className='span-line mt-3'></span>
                            </Fade>
                            <p className='p-2 '>
                                <Bounce delay={1700} cascade left>
                                    You will get your service with our good professionals from different fields,
                                    register with us now!
                                </Bounce>
                            </p>

                        </div>
                        <div className="bfoc text-center col-md-4 col-12" >
                            <Fade delay={1200}>
                                <div className="bfoc-img">
                                    <img src={b2}></img>
                                </div>
                            </Fade>

                            <Fade delay={1400}>
                                <h4>Successful  <b><span className='span-style'>Track Record</span></b></h4>
                                <span className='span-line mt-3'></span>
                            </Fade>

                            <p className='p-2 '>
                                <Bounce delay={1700} cascade left>
                                    You will tracked by your trainer pr proffesional, you will have
                                    a full track record of your activites!
                                </Bounce>

                            </p>


                        </div>
                        <div className="bfoc text-center col-md-4 col-12">
                            <Fade delay={1200}>
                                <div className="bfoc-img">
                                    <img src={b3}></img>

                                </div>
                            </Fade>

                            <Fade delay={1400}>
                                <h4>Demonstrable  <b><span className='span-style'>Results</span></b></h4>
                                <span className='span-line mt-3'></span>
                            </Fade>

                            <p className='p-2 '>
                                <Bounce delay={1700} cascade left>
                                    With our good proffesionals, and track record special of you, will get
                                    a good an demonstrable results!
                                </Bounce>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="words-from-our-clients">
                <div className="container">
                    <Bounce cascade left><h1>Words <b><span className='span-style'>from our clients</span></b></h1></Bounce>
                    <h5 className='text-muted mb-5'><Bounce cascade left>The best of the best is here!</Bounce></h5>

                    <div className="row row-words">
                        <Fade  delay={1000}>
                            <div className="col-md-6 col-12  d-flex flex-wrap ">
                                <div className="quote w-25 ">
                                    <img src={q}></img>
                                </div>
                                <p className='w-75'>
                                    I started with Alumni for training since 2022 when i graduated
                                    from my university, i applied to more than one company, but all of them
                                    had rejected me, because i don't have an experience, but when i heared
                                    about this website, i decieded to join them, and i take many courses
                                    with them as an additional training, and now i feel better ..
                                </p>
                                <div className="client ps-2 w-100 mt-5 d-flex  align-items-center">
                                    <div className="client-thumb">
                                        <img src={pro1}></img>
                                    </div>
                                    <h5 className='ms-4'>Russell White - <span className='text-muted'>Wyeth Inc</span></h5>

                                </div>

                            </div>
                        </Fade>

                        <Fade  delay={2000}>
                            <div className="col-md-6 col-12  d-flex flex-wrap ">
                                <div className="quote w-25 ">
                                    <img src={q}></img>
                                </div>
                                <p className='w-75'>
                                    After finishing my work at the unniversity, i think to apply to a
                                    scholarship abroad in order to complete my study in computer science, many of
                                    people adviced me to apply to this website, i visited it, then i found what i wanted,
                                    and now i am in london in my scholarship ..
                                </p>
                                <div className="client ps-2 w-100 mt-5 d-flex  align-items-center">
                                    <div className="client-thumb">
                                        <img src={pro2}></img>
                                    </div>
                                    <h5 className='ms-4'>Ronnie Murphy - <span className='text-muted'>MSD Inc</span></h5>

                                </div>

                            </div>
                        </Fade>

                    </div>
                </div>
            </div>





        </>
    )
}
