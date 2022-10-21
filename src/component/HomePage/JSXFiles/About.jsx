import React, { Component } from 'react';
import Navbar from './HomePageComponents/Navbar';
import bookview from '../../../imgs/alumni.jpg';
import '../CSSFiles/headers.css';
import Fade from 'react-reveal/Fade';
import Scroll from './Scroll';
import background from '../../../imgs/about_thumb_1.jpg';
import background2 from '../../../imgs/alumni.jpg';
import '../CSSFiles/about.css';
import Footer from './Footer';
import Zoom from 'react-reveal/Zoom';




export default class About extends Component {
    render() {
        return (
            <>
                <Scroll />


                <Fade>
                    <div className="headerb d-flex justify-content-center align-items-center position-relative">
                        <Fade delay={700}>
                            <div className="bookname text-light">
                                <h2 className='bookname text-center mb-2'><b>About Us</b></h2>
                                <h2>Quick overview about our website</h2>
                            </div>
                        </Fade>
                        <div className="overlay-div"></div>
                    </div>
                </Fade>
                <div className="container mt-5">
                    <div className="row">
                        <Zoom delay={1500} left>
                            <div className="aboutthumb col-md-4">
                                <img src={background}></img>
                            </div>
                        </Zoom>

                        <Zoom delay={1500} right>
                            <div className="about-para col-md-8 ">
                                <h1>WELCOME TO <span className='span-style'><b>ALUMNI</b></span></h1>
                                <p className='about-paragraph-1 mt-4'>
                                    In our webiste, we focus onto find new opportunities  for alumni,
                                    these opportunities  can be for training or employment, we aim to 
                                    get out of unemployment in our societies, which is increase more 
                                    and more. In our website, there is societies and organizations, 
                                    which they will be introduce opportunities  for alumni. 
                                </p>
                                <h3 className='mt-4'>JOIN TO US AND DON'T WAIT!</h3>
                                <p className='about-paragraph-1 mt-4'>
                                   We have many opportunities everyday, in different fields, and 
                                   if you find opportunities related to your field, don't hesitate, and introduce 
                                   to one of them which suits your needs! 
                                </p>

                            </div>
                        </Zoom>
                    </div>


                </div>


                <div className="container cont-time">
                    <div className="time-line position-relative">
                        <Fade>
                            <span className='line'></span>
                        </Fade>


                        <div className="line-circle-1"></div>
                        <div className="line-circle-2"></div>
                        <div className="line-circle-3"></div>
                        <div className="line-circle-4"></div>

                        <Fade left delay={500} >
                            <div className="line-div-1">
                                <h3>Our Mission</h3>
                                <p className='our-time-line'>
                                    Everyone is an important person in his country, and he can make many 
                                    of changes, so we won't leave him, we will offer opprtunites for him..
                                </p>

                            </div>
                        </Fade>

                        <Fade right delay={700}>
                            <div className="line-div-2">
                                <h3>Our Vision</h3>
                                <p className='our-time-line'>
                                    Make each person active in his country, in the field which he likes it, so this require
                                    from us to create and find new opprtuintes for young.. 
                                </p>

                            </div>
                        </Fade>

                        <Fade left delay={900}>
                            <div className="line-div-3">
                                <h3>Our Message</h3>
                                <p className='our-time-line'>
                                    The reading is the mosth thing that will make the person more attractive
                                    and cultured, so when the person read various books, he will have a wide knowledge
                                    in his life.
                                </p>
                            </div>
                        </Fade>

                        <Fade right delay={1100}>
                            <div className="line-div-4">
                                <h3>Our Goal</h3>
                                <p className='our-time-line'>
                                    We aim to build a wide base of customers from different cultures and countries,
                                    and bring new books continuously, so we will build a good relations with our customers.
                                </p>
                            </div>
                        </Fade>


                    </div>
                </div>



                <Footer />
            </>
        )
    }
}
