import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import '../CSSFiles/signup.css';
import Footer from './Footer'

export default function SignUpOrg() {

    let [stateItem, setStateItem] = useState([]);
    let [stateArrive, setIfStateArrive] = useState(false);

    async function getStateItems() {
        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", "dFJHVUZZMm56M1AwT0FTU0ZERGRCU0hhbFVoNUdGWVdwQ3IxM1J6ag==");

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
            .then(response => response.text())
            .then(result => {
                setStateItem(JSON.parse(result));
                setIfStateArrive(true);

            })
            .catch(error => console.log('error', error));

        if (stateArrive) {
            // console.log(JSON.parse(stateItem));
            // console.log(stateItem)
        }
        else {
            console.log("HH")
        }
    }


    // here when the array brackets are blanks, it represents the componentDidMount
    // we can use useEffect for three functions (Mount,DidMount,Unmount)
    useEffect(() => {
        getStateItems();

    }, []);

    return (
        stateArrive ?
            <>
                <Fade>
                    <div className="signup-header d-flex justify-content-center align-items-center position-relative">
                        <Fade delay={700}>
                            <div className="bookname text-light">
                                <h2 className='bookname text-center mb-2'><b>Sign Up</b></h2>
                                <h2>Register Now With Us!</h2>
                            </div>
                        </Fade>
                        <div className="overlay-div"></div>
                    </div>
                </Fade>

                <div className="container">
                    <h2 className='text-center mt-5'><b><span className='span-style'>Sign Up</span></b> Form - Organizations</h2>
                    <div className="row mt-5">
                        <h2 className='mb-5 '><b className='span-style'>Basic</b> Information</h2>
                        <div className="col-md-4">
                            <div class="sign-up-field mb-4 d-flex flex-nowrap">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-signature"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="firstNameTextField" class="form-label">Association Name</label>
                                    <input type="text" class="form-control" id="associationName" aria-describedby="emailHelp"></input>
                                </div>
                            </div>

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-people-roof"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="lastNameTextField" class="form-label">Expert Name</label>
                                    <input type="text" class="form-control" id="expertName" aria-describedby="emailHelp"></input>

                                </div>

                            </div>


                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-envelope "></i>
                                </div>
                                <div className="field-form ">
                                    <label for="firstNameTextField" class="form-label">Expert Email Address</label>
                                    <input type="email" class="form-control" id="emailTextField" aria-describedby="emailHelp" required></input>

                                </div>
                            </div>



                        </div>

                        <div className="col-md-4">
                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-earth-americas"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="firstNameTextField" class="form-label">State</label>
                                    <div className="select-div w-100 ">
                                        <select id="state_option" className='state-option'>
                                            <option selected disabled>Select State</option>
                                            {stateItem.map((state) =>
                                                <option>
                                                    {state.name}
                                                </option>
                                            )}

                                        </select>
                                        <h6 id="n9" className='text-danger pt-2 d-none'>Select Your State!</h6>

                                    </div>

                                </div>
                            </div>

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="lastNameTextField" class="form-label">City</label>
                                    <input
                                        type="text" class="form-control" id="phoneNumberTextField" aria-describedby="emailHelp"></input>

                                </div>
                            </div>

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="lastNameTextField" class="form-label">Phone Number</label>
                                    <input
                                        type="text" class="form-control" id="phoneNumberTextField" aria-describedby="emailHelp"></input>
                                    <h6 id="n4" className='text-danger pt-2 d-none'>Your phone number must be 10 disgits </h6>

                                </div>
                            </div>






                        </div>

                        <div className="col-md-4">

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-lock"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="Password" class="form-label">Password</label>
                                    <input
                                        onKeyUp={function (e) {
                                            var Password = document.getElementById("Password");
                                            var n6 = document.getElementById("n6");

                                            if (e.target.value.length < 8) {
                                                Password.classList.add("is-invalid");
                                                Password.classList.remove("is-valid");
                                                n6.style.color = "red";
                                                n6.classList.add("d-block");
                                                n6.classList.remove("d-none");


                                            }
                                            else {
                                                Password.classList.add("is-valid");
                                                Password.classList.remove("is-invalid");
                                                n6.classList.add("d-none");
                                                n6.classList.remove("d-block");

                                            }
                                        }}
                                        type="password" class="form-control" id="Password" aria-describedby="Password"></input>
                                    <h6 id="n6" className='text-danger pt-2 d-none'>Your Password must be more than 8 characters!</h6>

                                </div>
                            </div>

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-check-double"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="confirmpassword" class="form-label">Confirm Password</label>
                                    <input
                                        onKeyUp={function (e) {
                                            var confirmpassword = document.getElementById("confirmpassword");
                                            var original_passowrd = document.getElementById("Password");

                                            var n7 = document.getElementById("n7");


                                            if (e.target.value != original_passowrd.value) {
                                                confirmpassword.classList.add("is-invalid");
                                                confirmpassword.classList.remove("is-valid");
                                                n7.style.color = "red";
                                                n7.classList.add("d-block");
                                                n7.classList.remove("d-none");


                                            }
                                            else {
                                                confirmpassword.classList.add("is-valid");
                                                confirmpassword.classList.remove("is-invalid");
                                                n7.classList.add("d-none");
                                                n7.classList.remove("d-block");

                                            }
                                        }}
                                        type="password" class="form-control" id="confirmpassword" aria-describedby="confirmpassword"></input>
                                    <h6 id="n7" className='text-danger pt-2 d-none'>Two Passwords are not identical!</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='w-100 mt-4 text-center'>
                    <button
                        // onClick={async () => {


                        //                     var data = {
                        //                         firstName: fname,
                        //                         lastName: lname,
                        //                         birthDate: birthdate.value,
                        //                         emailAddress: email,
                        //                         country: state_option.value,
                        //                         phoneNumber: phone,
                        //                         studyField: specialization.value,
                        //                         studyState: radioBtnValue,
                        //                         userName: username,
                        //                         password: password
                        //                     }

                        //                     console.log("DONE")
                        //                     console.log(data);
                        //                     var end_point = "signUp"; 

                        //                     await fetch(`http://localhost:5000/${end_point}`, {
                        //                         method: 'POST',
                        //                         body: JSON.stringify(data),
                        //                         headers: {
                        //                             "Content-type": "application/json; charset=UTF-8"
                        //                         }
                        //                     }).then(response => response.json())
                        //                     .then(json => {
                        //                         console.log(json);
                        //                     });


                        //                     swal({
                        //                         title: "Good job!",
                        //                         text: "You Signed Up Successfully!",
                        //                         icon: "success",
                        //                         button: "OK",
                        //                       });


                        //                 }

                        //             }


                        type="button" className="btn btn-primary me-4 signUpBtn">Sign Up</button>


                    <button
                        onClick={
                            () => {

                            }
                        }

                        type="button" className="btn clearSignUpForm btn-danger">Clear</button>
                </div> */}

                <div className='container mt-3'>
                    <h2><b className='span-style'>Description</b> About Your Association</h2>
                    <div class="sign-up-field mb-4 d-flex flex-nowrap">
                        <div className="field-form w-100 mt-4 ">
                            <textarea rows={6} type="text" class="form-control" id="associationName" aria-describedby="emailHelp"></textarea>
                        </div>
                    </div>

                </div>

                <div className='container mt-3'>
                    <h2><b className='span-style'>Upload</b> Cover Image</h2>
                    <button className="me-auto upload-btn-post mt-4">
                        <div className='d-flex'>
                            <i class="fa-solid fa-cloud-arrow-up me-1"></i> Upload
                        </div>
                        <input type="file"
                            onChange={(e) => {
                                // setFileData(e.target.files[0]);
                            }}
                        />
                    </button>
                </div>

                  <div className='w-100 mt-4 text-center'>
                    <button
                        // onClick={async () => {


                        //                     var data = {
                        //                         firstName: fname,
                        //                         lastName: lname,
                        //                         birthDate: birthdate.value,
                        //                         emailAddress: email,
                        //                         country: state_option.value,
                        //                         phoneNumber: phone,
                        //                         studyField: specialization.value,
                        //                         studyState: radioBtnValue,
                        //                         userName: username,
                        //                         password: password
                        //                     }

                        //                     console.log("DONE")
                        //                     console.log(data);
                        //                     var end_point = "signUp"; 

                        //                     await fetch(`http://localhost:5000/${end_point}`, {
                        //                         method: 'POST',
                        //                         body: JSON.stringify(data),
                        //                         headers: {
                        //                             "Content-type": "application/json; charset=UTF-8"
                        //                         }
                        //                     }).then(response => response.json())
                        //                     .then(json => {
                        //                         console.log(json);
                        //                     });


                        //                     swal({
                        //                         title: "Good job!",
                        //                         text: "You Signed Up Successfully!",
                        //                         icon: "success",
                        //                         button: "OK",
                        //                       });


                        //                 }

                        //             }


                        type="button" className="btn btn-primary me-4 signUpBtn">Sign Up</button>


                   
                </div> 

                <Footer />

            </> : ""
    )
}
