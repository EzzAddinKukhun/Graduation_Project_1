import React, { Component } from 'react'
import '../../CSSFiles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import im from '../../../../imgs/alumni.jpg';
import swal from 'sweetalert';
import User from '../User';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

export default function Navbar() {
    const nav = useNavigate();
    function navigateToUserPage(id) {
        nav(
            {
                pathname: '/timeLine',
                search: `?id=${id}`
            }
        );
        window.location.reload();
    }
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
                                    <Link data-bs-toggle="modal" data-bs-target="#exampleModal" to="/" >Log In</Link>
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
                            <button
                                onClick={async () => {
                                    var emailAddress = document.getElementById("exampleInputEmail1").value;
                                    var password = document.getElementById("exampleInputPassword1").value;
                                    var data = {
                                        emailAddress,
                                        password
                                    }



                                
                                    var end_point = "logIn";
                                    await fetch(`http://localhost:5000/${end_point}`, {
                                        method: 'POST',
                                        body: JSON.stringify(data),
                                        headers: {
                                            "Content-type": "application/json; charset=UTF-8"
                                        }
                                    }).then(response => response.json())
                                        .then(json => {
                                            if (json.message == "success user") {
                                                // here we have to retrieve the id from data base
                                                // and pass it to the timeline page if log in success
                                                let dataUser = {
                                                    id: json._id,
                                                    type: "userPage"
                                                }
                                                localStorage.setItem("ACCOUNT", JSON.stringify(dataUser));
                                                
                                                setTimeout(()=>{
                                                    window.location.reload();
                                                }, 2000)

                                                swal("Good job!", "Welcome to your account", "success");


                                            }
                                            else if (json.message == "password incorrect") {
                                                swal("Password is Wrong!", "Please sure that you enter correct password!", "error");

                                            }
                                            else if (json.message == "email does not exists") {
                                                swal("email does not exists!", "", "error");

                                            }
                                            else if (json.message == "success admin") {
                                                swal("Good job!", "You clicked the button!", "success");

                                            }
                                            else if (json.message == "email verification needed") {
                                                swal("email verification needed", "", "error");


                                            }
                                            console.log(json);
                                        });



                                }}
                                type="button" className="btn btn-primary">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

