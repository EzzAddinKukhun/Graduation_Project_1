import React, { Component } from 'react'
import '../../CSSFiles/Navbar.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import im from '../../../../imgs/alumni.jpg';


export default class Navbar extends Component {
    
    render() {
        return (
            <>
                <div className="navbar position-fixed">
                    <div className="container  nav-container ">
                        <Fade delay={300}>
                            <div className="nav-logo me-5">
                                <img src={im}></img>
                            </div>
                        </Fade>
                        <div id="nav_list" className="nav-list">
                            <ul className='d-flex'>
                                <Fade delay={0}>
                                    <li className='nav-item'>
                                        <Link to="home">Home</Link>
                                    </li>
                                </Fade>
                                <Fade delay={500}>
                                    <li className='nav-item'>
                                        <Link to="about">About Us</Link>
                                    </li>
                                </Fade>
                                <Fade delay={1000}>
                                    <li className='nav-item'>
                                        <Link to="contact">Contact</Link>
                                    </li>
                                </Fade>
                                <Fade delay={1500}>
                                    <li className='nav-item'>
                                        <Link data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {

                                        }} to="\">Log In</Link>
                                    </li>
                                </Fade>
                                <Fade delay={2000}>
                                    <li className='nav-item'>
                                        <Link to="signup">Sign Up</Link>
                                    </li>
                                </Fade>
                            </ul>
                        </div>
                        <Fade delay={2500}>
                            <div className="nav-social">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-whatsapp"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                        </Fade>
                        <div className="burger ">
                            <i
                                onClick={
                                    function () {
                                        var nav = document.getElementById("nav_list");
                                        if (nav.style.display == "block") {
                                            nav.style.display = "none";
                                        }
                                        else {
                                            nav.style.display = "block";
                                        }

                                    }
                                }
                                className="fa-solid fa-bars"></i>
                        </div>

                    </div>



                </div>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"><b>Log In Form</b></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='p-3'>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                    </div>
                                    <a className='forgot-link'>Forgot your password?</a>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}
