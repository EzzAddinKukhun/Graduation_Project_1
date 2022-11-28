import React from 'react';
import '../../CSSFiles/UserCss/Scholar.css';
import test1 from '../../../../imgs/ch4.jpg'
import test2 from '../../../../imgs/ch5.jpg'
import test3 from '../../../../imgs/ch6.jpg'
import test4 from '../../../../imgs/ch7.jpg'
import test5 from '../../../../imgs/ch8.jpg'
import test6 from '../../../../imgs/ch9.jpg'
import test7 from '../../../../imgs/ch10.jpg'
import Fade from 'react-reveal/Fade';
import { Link, Outlet } from 'react-router-dom';


export default function Scholarships() {
    return (
        <>
            <div className="outlet ms-auto">
                <div className="container">
                    <div className="row justify-content-around flex-wrap">
                        {/* you can generate scholar ships card start fromm here  */}
                        <Fade>
                            <div className="scholar-card col-md-3 me-3 mb-5 p-3">
                                <div className="scholar-cover-photo h-40 bg-warning">
                                    <Fade delay={200}>
                                        <img src={test1}></img>
                                    </Fade>
                                    <div className="overlay-event"></div>
                                    {/* INFORMATION OF SCHOLARSHOP */}
                                    <div className="scholar-title ">
                                        <h4>
                                            <Fade delay={1000} right cascade>Scholar Name</Fade></h4>
                                        <h6><Fade delay={1300} right cascade>Scholar Channel Fund</Fade></h6>
                                    </div>
                                </div>
                                <div className="scholar-details flex-column flex-wrap w-100 h-50 ">
                                    <div className='scholar-duration w-100 d-flex '>
                                        <div className="w-20  text-center">
                                            <i class="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className="w-80">
                                            <span className='start-scholar'>
                                                2022/06/22 -

                                            </span>
                                            <span className='end-scholar'>
                                                2022/07/01
                                            </span>
                                        </div>
                                    </div>
                                    <div className='scholar-duration w-100 d-flex '>
                                        <div className="w-20  text-center">
                                            <i class="fa-solid fa-align-left"></i>
                                        </div>
                                        <div className="w-80 ">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique culpa id distinctio architecto voluptates possimus voluptatibus non, eaque provident excepturi voluptatem quasi a odio alias tempora ad velit libero.
                                            </p>
                                        </div>
                                    </div>


                                </div>
                                <div className="scholar-apply-btn h-10 ">

                                    <button className='h-100'>Apply Now!
                                        <Link to="../scholarsf">ggg</Link>
                                    </button>

                                </div>
                                <div className="circle-icon">
                                    <div>
                                        <i class="fa-solid fa-user-graduate"></i>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
