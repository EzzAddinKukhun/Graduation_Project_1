import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import '../CSSFiles/signup.css';
import Footer from './Footer'

export default function SignUp() {

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
                    <h2 className='text-center mt-5'><b><span className='span-style'>Sign Up</span></b> Form</h2>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="sign-up-field mb-4 d-flex flex-nowrap">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-signature"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="firstNameTextField" class="form-label">First Name</label>
                                    <input
                                        onKeyUp={function (e) {
                                            var fname = document.getElementById("firstNameTextField");
                                            var n1 = document.getElementById("n1");

                                            if (e.target.value.length == 0) {
                                                fname.classList.add("is-invalid");
                                                fname.classList.remove("is-valid");
                                                n1.innerText = "Please Fill This Field";
                                                n1.style.color = "red";
                                                n1.classList.add("d-block");
                                                n1.classList.remove("d-none");


                                            }
                                            else {
                                                fname.classList.add("is-valid");
                                                fname.classList.remove("is-invalid");
                                                n1.classList.add("d-none");
                                                n1.classList.remove("d-block");

                                            }
                                        }}
                                        type="text" class="form-control" id="firstNameTextField" aria-describedby="emailHelp"></input>
                                    <h6 id="n1" className='text-danger pt-2 d-none'>Please Fill This Field!</h6>
                                </div>
                            </div>

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-people-roof"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="lastNameTextField" class="form-label">Last Name</label>
                                    <input
                                        onKeyUp={function (e) {
                                            var lname = document.getElementById("lastNameTextField");
                                            var n2 = document.getElementById("n2");

                                            if (e.target.value.length == 0) {
                                                lname.classList.add("is-invalid");
                                                lname.classList.remove("is-valid");
                                                n2.innerText = "Please Fill This Field";
                                                n2.style.color = "red";
                                                n2.classList.add("d-block");
                                                n2.classList.remove("d-none");


                                            }
                                            else {
                                                lname.classList.add("is-valid");
                                                lname.classList.remove("is-invalid");
                                                n2.classList.add("d-none");
                                                n2.classList.remove("d-block");

                                            }
                                        }}
                                        type="text" class="form-control" id="lastNameTextField" aria-describedby="emailHelp"></input>
                                    <h6 id="n2" className='text-danger pt-2 d-none'>Please Fill This Field!</h6>

                                </div>

                            </div>

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-cake-candles"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="BirthdateTextField" class="form-label">Birthdate</label>
                                    <input type="date" class="form-control" id="BirthdateTextField" aria-describedby="BirthdateTextField"></input>
                                    <h6 id="n8" className='text-danger pt-2 d-none'>Select Your Birthdate!</h6>

                                </div>
                            </div>

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-envelope "></i>
                                </div>
                                <div className="field-form ">
                                    <label for="firstNameTextField" class="form-label">Email Address</label>
                                    <input
                                        onKeyUp={function (e) {
                                            var emailTextField = document.getElementById("emailTextField");
                                            var n3 = document.getElementById("n3");

                                            if (e.target.value.length == 0) {
                                                emailTextField.classList.add("is-invalid");
                                                emailTextField.classList.remove("is-valid");
                                                n3.style.color = "red";
                                                n3.classList.add("d-block");
                                                n3.classList.remove("d-none");


                                            }
                                            else {
                                                emailTextField.classList.add("is-valid");
                                                emailTextField.classList.remove("is-invalid");
                                                n3.classList.add("d-none");
                                                n3.classList.remove("d-block");

                                            }
                                        }}

                                        type="email" class="form-control" id="emailTextField" aria-describedby="emailHelp" required></input>
                                    <h6 id="n3" className='text-danger pt-2 d-none'>Please Fill Your Email!</h6>

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
                                    <label for="lastNameTextField" class="form-label">Phone Number</label>
                                    <input
                                        onKeyUp={function (e) {
                                            var phoneNumberTextField = document.getElementById("phoneNumberTextField");
                                            var n4 = document.getElementById("n4");

                                            if (e.target.value.length < 10) {
                                                phoneNumberTextField.classList.add("is-invalid");
                                                phoneNumberTextField.classList.remove("is-valid");
                                                n4.style.color = "red";
                                                n4.classList.add("d-block");
                                                n4.classList.remove("d-none");


                                            }
                                            else {
                                                phoneNumberTextField.classList.add("is-valid");
                                                phoneNumberTextField.classList.remove("is-invalid");
                                                n4.classList.add("d-none");
                                                n4.classList.remove("d-block");

                                            }
                                        }}
                                        type="text" class="form-control" id="phoneNumberTextField" aria-describedby="emailHelp"></input>
                                    <h6 id="n4" className='text-danger pt-2 d-none'>Your phone number must be 10 disgits </h6>

                                </div>
                            </div>

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-user-graduate"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="usernameTextField" class="form-label">Study State</label>
                                    <div class="form-check">
                                        <input value="Graduate" class="form-check-input" type="radio" name="studyState" id="flexRadioDefault1"></input>
                                        <label class="form-check-label" for="studyState">
                                            Graduate
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input value="Study Until Now" class="form-check-input" type="radio" name="studyState" id="flexRadioDefault2" checked></input>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Study Until Now
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-building-columns"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="firstNameTextField" class="form-label">Specialization</label>
                                    <div className="select-div w-100 ">
                                        <select id="specialization" className='state-option'>
                                            <option selected disabled>Select Your Specialization</option>
                                            <option>Engineering</option>
                                            <option>Medicine</option>
                                            <option>Litreature</option>
                                            <option>Arts</option>
                                            <option>IT</option>
                                            <option>Sport</option>



                                        </select>
                                        <h6 id="n10" className='text-danger pt-2 d-none'>Select Your Field!</h6>

                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className="col-md-4">
                            <div class="sign-up-field mb-4 d-flex">
                                <div className="icon-form text-center">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div className="field-form ">
                                    <label for="Username" class="form-label">Username</label>
                                    <input
                                        onKeyUp={function (e) {
                                            var Username = document.getElementById("Username");
                                            var n5 = document.getElementById("n5");

                                            if (e.target.value.length == 0) {
                                                Username.classList.add("is-invalid");
                                                Username.classList.remove("is-valid");
                                                n5.style.color = "red";
                                                n5.classList.add("d-block");
                                                n5.classList.remove("d-none");


                                            }
                                            else {
                                                Username.classList.add("is-valid");
                                                Username.classList.remove("is-invalid");
                                                n5.classList.add("d-none");
                                                n5.classList.remove("d-block");

                                            }
                                        }}
                                        type="text" class="form-control" id="Username" aria-describedby="Username"></input>
                                    <h6 id="n5" className='text-danger pt-2 d-none'>Please Fill Username!</h6>
                                </div>
                            </div>

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

                <div className='w-100 mt-4 text-center'>
                    <button
                        onClick={async () => {
                            var counter = 0;
                            var bool = false;

                            var fname = document.getElementById("firstNameTextField").value;
                            var lname = document.getElementById("lastNameTextField").value;
                            var email = document.getElementById("emailTextField").value;
                            var phone = document.getElementById("phoneNumberTextField").value;
                            var username = document.getElementById("Username").value;
                            var password = document.getElementById("Password").value;
                            var conf = document.getElementById("confirmpassword").value;

                            var radioBtns = document.getElementsByName("studyState");
                            var radioBtnValue = radioBtns[0].checked ? radioBtns[0].value : radioBtns[1].value;


                            var birthdate = document.getElementById("BirthdateTextField");
                            var n8 = document.getElementById("n8");

                            var state_option = document.getElementById("state_option");
                            var n9 = document.getElementById("n9");

                            var specialization = document.getElementById("specialization");
                            var n10 = document.getElementById("n10");

                            if (birthdate.value == "") {
                                n8.classList.remove("d-none");
                                n8.classList.add("d-block");
                                bool = true;


                            } else {
                                n8.classList.remove("d-block");
                                n8.classList.add("d-none");
                                bool = false;

                            }


                            if (state_option.value == "Select State") {
                                n9.classList.remove("d-none");
                                n9.classList.add("d-block");
                                bool = true;

                            } else {
                                n9.classList.remove("d-block");
                                n9.classList.add("d-none");
                                bool = false;

                            }

                            if (specialization.value == "Select Your Specialization") {
                                n10.classList.remove("d-none");
                                n10.classList.add("d-block");
                                bool = true;

                            } else {
                                n10.classList.remove("d-block");
                                n10.classList.add("d-none");
                                bool = false;
                            }

                            if (bool == false) {
                                if (fname != "" && lname != "" && email != "" &&
                                    password != "" && conf != "" && phone != "" && username != "") {
                                    console.log("FISRT");
                                    if (password.length >= 8) {
                                        console.log("SECOND");

                                        if (password.length == conf.length) {
                                            console.log("FINAL");

                                            var data = {
                                                firstName: fname,
                                                lastName: lname,
                                                birthDate: birthdate.value,
                                                emailAddress: email,
                                                country: state_option.value,
                                                phoneNumber: phone,
                                                studyField: specialization.value,
                                                studyState: radioBtnValue,
                                                userName: username,
                                                password: password
                                            }

                                            console.log("DONE")
                                            console.log(data);
                                            var end_point = "signUp"; 
                                            
                                            await fetch(`http://localhost:5000/${end_point}`, {
                                                method: 'POST',
                                                body: JSON.stringify(data),
                                                headers: {
                                                    "Content-type": "application/json; charset=UTF-8"
                                                }
                                            }).then(response => response.json())
                                            .then(json => {
                                                console.log(json);
                                            });


                                            swal({
                                                title: "Good job!",
                                                text: "You Signed Up Successfully!",
                                                icon: "success",
                                                button: "OK",
                                              });


                                        }

                                    }
                                }
                            }




                        }}

                        type="button" className="btn btn-primary me-4 signUpBtn">Sign Up</button>


                    <button
                        onClick={
                            () => {
                                document.getElementById("n1").classList.replace("d-block","d-none");
                                document.getElementById("n2").classList.replace("d-block","d-none");
                                document.getElementById("n3").classList.replace("d-block","d-none");
                                document.getElementById("n4").classList.replace("d-block","d-none");
                                document.getElementById("n5").classList.replace("d-block","d-none");
                                document.getElementById("n6").classList.replace("d-block","d-none");
                                document.getElementById("n7").classList.replace("d-block","d-none");
                                document.getElementById("n8").classList.replace("d-block","d-none");
                                document.getElementById("n9").classList.replace("d-block","d-none");
                                document.getElementById("n10").classList.replace("d-block","d-none");

                                document.getElementById("firstNameTextField").classList.remove("is-valid"); 
                                document.getElementById("firstNameTextField").classList.remove("is-invalid"); 
                                document.getElementById("firstNameTextField").value = ""; 

                                document.getElementById("lastNameTextField").classList.remove("is-valid"); 
                                document.getElementById("lastNameTextField").classList.remove("is-invalid"); 
                                document.getElementById("lastNameTextField").value = ""; 


                                document.getElementById("Username").classList.remove("is-valid"); 
                                document.getElementById("Username").classList.remove("is-invalid"); 
                                document.getElementById("Username").value = ""; 


                                document.getElementById("Password").classList.remove("is-valid"); 
                                document.getElementById("Password").classList.remove("is-invalid");
                                document.getElementById("Password").value = ""; 
 

                                document.getElementById("confirmpassword").classList.remove("is-valid"); 
                                document.getElementById("confirmpassword").classList.remove("is-invalid"); 
                                document.getElementById("confirmpassword").value = ""; 


                                document.getElementById("emailTextField").classList.remove("is-valid"); 
                                document.getElementById("emailTextField").classList.remove("is-invalid"); 
                                document.getElementById("emailTextField").value = ""; 


                                document.getElementById("phoneNumberTextField").classList.remove("is-valid"); 
                                document.getElementById("phoneNumberTextField").classList.remove("is-invalid"); 
                                document.getElementById("phoneNumberTextField").value = ""; 



                              



                            }
                        }

                        type="button" className="btn clearSignUpForm btn-danger">Clear</button>
                </div>

                <Footer />

            </> : ""
    )
}
