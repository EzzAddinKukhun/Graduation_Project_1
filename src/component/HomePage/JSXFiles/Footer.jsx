import React from 'react';
import '../CSSFiles/Footer.css';
import footer from '../../../imgs/footer.jpg';
import im from '../../../imgs/alumni.jpg';
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';


export default function Footer() {
    return (
        <>
            <Fade>
                <div className="footer">
                    <div className="img-footer position-absolute top-0 ">
                        <img src={footer}></img>
                    </div>
                    <div className="container footer-container">
                        <div className="row  ">
                            <div className="f1 col-md-4 ">
                                <Fade delay={1000}>
                                    <img className='mb-4' src={im}></img>
                                </Fade>
                                <p className='footer-exp pt-3 text-light'>
                                    <Bounce left cascade delay={1200}>
                                        We will convert your dream to real, with us, you can find
                                        your correct position in the work, with us you will be ready to
                                        enter the work, what you are wait? Join us and register now!
                                    </Bounce>
                                </p>
                            </div>

                            <div className="f2 col-md-4 text-center ">
                                <Fade delay={1200}>
                                    <h3 className=' mb-3'><b>Quick Links</b></h3>
                                    <ul className='quick-links p-0 '>
                                        <li><Link>Home</Link></li>
                                        <li><Link>About Us</Link></li>
                                        <li><Link>Contact Us</Link></li>
                                        <li><Link>Log In</Link></li>
                                        <li><Link>Sign Up</Link></li>
                                    </ul>
                                </Fade>
                            </div>

                            <div className="f3 col-md-4 " >
                                <Fade delay={1400}>
                                    <h3 className=' mb-3 '><b>Contact Us</b></h3>
                                    <div className="contact-type d-flex justify-content-between">
                                        <div className="contact-icon  pt-3">
                                            <i class="fa-solid fa-house"></i>
                                        </div>
                                        <div className="contact-address  p-2">
                                            71 Pilgrim Avenue, Chevy<br></br> Chase,
                                            MD 20815
                                        </div>
                                    </div>
                                    <div className="contact-type d-flex justify-content-between">
                                        <div className="contact-icon  pt-3">
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="contact-address  p-2">
                                            (226) 906-2721<br></br> (671) 925-1352

                                        </div>
                                    </div>
                                    <div className="contact-type d-flex justify-content-between">
                                        <div className="contact-icon  pt-3">
                                            <i class="fa-regular fa-clock"></i>
                                        </div>
                                        <div className="contact-address  p-2">
                                            Mon – Sat 9 am to 8 pm<br></br> Sun – 10 am to 3 pm
                                        </div>
                                    </div>
                                    <div className="contact-type d-flex justify-content-between">
                                        <div className="contact-icon  pt-3">
                                            <i class="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="contact-address  p-2">
                                            info@agency.com
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <Fade  delay={1500}>
                        <div className="bottom-of-footer  ">
                            <h5 className='text-light'>© 2022 Alumni. All rights reserved.</h5>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </>
    )
}
