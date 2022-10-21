import React from 'react'
import Footer from './Footer'
import '../CSSFiles/contact.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import Scroll from './Scroll'; 





export default function Contact() {
    return (
        <>
            <Fade>
                <div className="header-contact-us d-flex justify-content-center align-items-center position-relative">
                    <Fade delay={700}>
                        <div className="bookname text-light">
                            <h2 className='bookname text-center mb-2'><b>Contact Us</b></h2>
                            <h2>You can query about what in your mind!</h2>
                        </div>
                    </Fade>
                    <div className="overlay-div"></div>
                </div>
            </Fade>
            <Scroll/>
            <div className="contact">
                <div className="container">
                    <Fade>
                        <h2 className='ps-5 pt-5 pb-2'><span className='span-style '><b>Contact Us</b></span> Form</h2>
                    </Fade>
                    <div className="row">
                        <div className="col-md-8">
                            <p className='ps-5 pe-5 pb-3 text-dark'>
                                <Bounce left cascade delay={1000}>
                                    You can ask about anything in your mind,
                                    enter your email and name, and write your message,
                                    you can also visit us in the attached address.
                                </Bounce>
                            </p>
                            <div className="form">
                                <div class="form-floating mb-3">
                                    <Fade left delay={1300}>
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                                        <label for="floatingInput">Email address</label>
                                    </Fade>

                                </div>
                                <div class="form-floating mb-3">
                                    <Fade left delay={1600}>
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Name"></input>
                                        <label for="floatingInput">Name</label>
                                    </Fade>

                                </div>


                                <div class="text-area-height form-floating ">
                                    <Fade left delay={1800}>
                                        <textarea className=" h-100 form-control " placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </Fade>

                                </div>
                            </div>
                            <Fade>
                                <button className='send-message'>Send Message</button>
                            </Fade>

                        </div>
                        <Fade delay={2000}>
                            <div className="col-md-4 d-flex flex-column">
                                <div className="address text-light  p-3">
                                    <h2><b>Our Location</b></h2>
                                    <ul>
                                        <li>Location: Palestine/Nablus</li>
                                        <li>Street:   Aseera Street</li>
                                        <li>Phone: +970 599836899</li>
                                        <li>Email: ezkukhun2000@gmail.com</li>

                                    </ul>
                                </div>
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe src="https://maps.google.com/maps?q=nablus&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no">
                                        </iframe>
                                        <a href="https://fnftest.net/fnf-test-download/" >fnf test download</a>
                                        <a href="https://www.jixplay.com/mobilegames/" >mobile games</a>
                                        <a href="https://fnfmod.net" >fnf mod</a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <Footer />


        </>
    )
}
