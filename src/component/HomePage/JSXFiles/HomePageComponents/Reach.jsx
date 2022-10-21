import React from 'react'
import reach from '../../../../imgs/reach.jpg';
import '../../CSSFiles/Reach.css';
import thumb1 from '../../../../imgs/university.jpg';
import thumb2 from '../../../../imgs/society.jpg';
import thumb3 from '../../../../imgs/scholar.jpg';
import Fade from 'react-reveal/Fade';


export default function Reach() {
    return (
        <>
            <div className="reach position-relative">
                
                <Fade>
                    <div className="reach-img-container">

                        <img className='reach-img' src={reach}></img>

                    </div>
                </Fade>
                <div className="reach-container  position-absolute top-0 ">
                    <Fade delay={1000}>
                        <h2 className='reach-us-logo text-center '><b>Reach To Your Position</b></h2>
                        <h5 className='text-light text-center'>Achieve your first success with us!</h5>
                    </Fade>
                    <Fade delay={2500}>
                        <div className="inner-container w-100 h-100">

                            <div className="buttons d-flex justify-content-center">
                                <button id="btn1" onClick={function (e) {
                                    let tab1 = document.getElementById("tab1");
                                    let tab2 = document.getElementById("tab2");
                                    let tab3 = document.getElementById("tab3");

                                    tab1.style.display = "block";
                                    tab2.style.display = "none";
                                    tab3.style.display = "none";

                                    let btn1 = document.getElementById("btn1");

                                    btn1.style.backgroundColor = "white";
                                    btn1.style.color = "#274584";
                                    btn1.style.borderTop = "3px solid #274584 "
                                    btn1.style.transition = "1s ease";

                                    let btn2 = document.getElementById("btn2");
                                    btn2.style.backgroundColor = "#274584";
                                    btn2.style.color = "white";
                                    btn2.style.borderTop = "3px solid white "
                                    btn2.style.transition = "1s ease";

                                    let btn3 = document.getElementById("btn3");
                                    btn3.style.backgroundColor = "#274584";
                                    btn3.style.color = "white";
                                    btn3.style.borderTop = "3px solid white "
                                    btn3.style.transition = "1s ease";


                                }}><b>Universitis</b></button>
                                <button
                                    onClick={function () {
                                        let tab1 = document.getElementById("tab1");
                                        let tab2 = document.getElementById("tab2");
                                        let tab3 = document.getElementById("tab3");

                                        tab1.style.display = "none";
                                        tab2.style.display = "block";
                                        tab3.style.display = "none";


                                        let btn2 = document.getElementById("btn2");

                                        btn2.style.backgroundColor = "white";
                                        btn2.style.color = "#274584";
                                        btn2.style.borderTop = "3px solid #274584 "
                                        btn2.style.transition = "1s ease";

                                        let btn1 = document.getElementById("btn1");
                                        btn1.style.backgroundColor = "#274584";
                                        btn1.style.color = "white";
                                        btn1.style.borderTop = "3px solid white "
                                        btn1.style.transition = "1s ease";

                                        let btn3 = document.getElementById("btn3");
                                        btn3.style.backgroundColor = "#274584";
                                        btn3.style.color = "white";
                                        btn3.style.borderTop = "3px solid white "
                                        btn3.style.transition = "1s ease";

                                    }}
                                    id="btn2"><b>Organizations</b></button>
                                <button
                                    onClick={function () {
                                        let tab1 = document.getElementById("tab1");
                                        let tab2 = document.getElementById("tab2");
                                        let tab3 = document.getElementById("tab3");

                                        tab1.style.display = "none";
                                        tab2.style.display = "none";
                                        tab3.style.display = "block";


                                        let btn3 = document.getElementById("btn3");

                                        btn3.style.backgroundColor = "white";
                                        btn3.style.color = "#274584";
                                        btn3.style.borderTop = "3px solid #274584 "
                                        btn3.style.transition = "1s ease";

                                        let btn1 = document.getElementById("btn1");
                                        btn1.style.backgroundColor = "#274584";
                                        btn1.style.color = "white";
                                        btn1.style.borderTop = "3px solid white "
                                        btn1.style.transition = "1s ease";

                                        let btn2 = document.getElementById("btn2");
                                        btn2.style.backgroundColor = "#274584";
                                        btn2.style.color = "white";
                                        btn2.style.borderTop = "3px solid white "
                                        btn2.style.transition = "1s ease";

                                    }}
                                    id="btn3"><b>Scholarships</b></button>
                            </div>

                        </div>

                        <div className="tab">
                            <div id="tab1" className="container">
                                <div className="row">
                                    <Fade>
                                        <div className="tab-thumb col-md-4 text-center">
                                            <img className='img-tab' src={thumb1}></img>
                                        </div>
                                    </Fade>
                                    <div className="tab-exp col-md-8 text-left">
                                        <Fade delay={1000}>
                                            <h2 className='pt-3 ps-3 pe-0'>Enlarge your<b><span className='span-style'> alumni</span> </b>network bringing in and sending out brilliant minds!</h2>
                                        </Fade>
                                        <p className='p-3 mt-2 text-justify'>
                                            <Fade cascade delay={2000} right>
                                                Engage your alumni network and assist your students in landing jobs at recognized enterprises. Provide your students access to international experts and career guidance. Invite great minds to participate and be a member of other’s and your own enterprise.
                                            </Fade>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="container ">
                                <div className="row">
                                    <Fade>
                                        <div className="tab-thumb col-md-4 text-center">
                                            <img className='img-tab' src={thumb2}></img>
                                        </div>
                                    </Fade>
                                    <div className="tab-exp col-md-8 text-left">
                                        <Fade delay={1000}>
                                            <h2 className='pt-3 ps-3 pe-0'><b><span className='span-style'>Global talent</span></b> may be found virtually via Alumni!</h2>
                                        </Fade>
                                        <p className='p-3 mt-2 text-justify'>
                                            <Fade delay={2000} cascade left>
                                                Recruit competent, varied individuals from the best colleges in the world. Expand your business and hire people who are familiar with your industry and possess the necessary abilities. Engage prospects who fit the culture of your business.
                                            </Fade>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="container ">
                                <div className="row">
                                    <Fade>
                                        <div className="tab-thumb col-md-4 text-center">
                                            <img className='img-tab' src={thumb3}></img>
                                        </div>
                                    </Fade>
                                    <div className="tab-exp col-md-8 text-left">
                                        <Fade delay={1000}>
                                            <h2 className='pt-3 ps-3 pe-0'>Apply to our available<b><span className='span-style'> scholarships!</span></b></h2>
                                        </Fade>
                                        <p className='p-3 mt-2 text-justify'>
                                            <Fade cascade right delay={2000}>
                                                You can apply to a scholarship with our partners to study with no-money fees either in your country
                                                or in abroad, so with us, you can study what you want, and with low costs.
                                            </Fade>
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </Fade>
                </div>

            </div>
        </>
    )
}
