import React from 'react';
import '../../CSSFiles/UserCss/userprofile.css'
import cover from '../../../../imgs/cover.jpg';
import Profile from '../../../../imgs/profile.jpg';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Settings from './Settings';

export default function Experience() {
    
    return (
        <>
            <div className='outlet ms-auto'>
                <section className=' w-100  p-3'>
                    <h2 className='mb-2 p-3'><b><span className='span-style '>Experiences</span></b></h2>
                    <div className="experiences">
                        <span className='exp-line-list d-block'></span>
                        {/* GENERATE YEARS OF EXPERIENCES */}
                        <div className="year-exp d-block">
                            <span id="experience-year"><b>2022</b></span>

                            <Fade  delay={1000}>
                                <div className="experience d-flex">
                                    <div className="experience-month d-flex align-items-center justify-content-center">
                                        <section className='month-and-day d-flex justify-content-center align-items-center'>
                                            <div className="number-month text-light">
                                                <h6><b>JUN</b></h6>
                                                <h1><b>18</b></h1>
                                            </div>
                                        </section>
                                        <span className='line-connect'></span>

                                    </div>
                                    <div className="experience-details p-3">
                                        <h3><b>Front-end Development Diploma</b></h3>
                                        <div className="duration d-flex w-75">
                                            <i class="fa-solid fa-calendar-days me-2 text-muted"></i>
                                            <div className='me-4'>
                                                <label className='text-muted'> Start Date: </label><span className='text-muted'> 2022/01/22</span>
                                            </div>

                                            <div>
                                                <label className='text-muted'> End Date: </label><span className='text-muted'> 2022/08/22</span>
                                            </div>


                                        </div>
                                        <p id="experience-explain">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga suscipit quos inventore vitae culpa, ipsa voluptatum a necessitatibus autem cumque architecto dolor at expedita, fugiat eligendi enim repellat velit minima iure! Consectetur iste nihil, rerum soluta eos tenetur, quaerat aut quasi accusamus, dolor a minima illo consequatur maxime alias!
                                        </p>
                                        <button className='viewExp'>View</button>

                                    </div>

                                </div>
                            </Fade>
                            <Fade  delay={1500}>
                                <div className="experience  d-flex">
                                    <div className="experience-month d-flex align-items-center justify-content-center">
                                        <section className='month-and-day d-flex justify-content-center align-items-center'>
                                            <div className="number-month text-light">
                                                <h6><b>JUN</b></h6>
                                                <h1><b>18</b></h1>
                                            </div>
                                        </section>
                                        <span className='line-connect'></span>

                                    </div>
                                    <div className="experience-details  p-3">
                                        <h3><b>Front-end Development Diploma</b></h3>
                                        <div className="duration d-flex w-75">
                                            <i class="fa-solid fa-calendar-days me-2 text-muted"></i>
                                            <div className='me-4'>
                                                <label className='text-muted'> Start Date: </label><span className='text-muted'> 2022/01/22</span>
                                            </div>

                                            <div>
                                                <label className='text-muted'> End Date: </label><span className='text-muted'> 2022/08/22</span>
                                            </div>


                                        </div>
                                        <p id="experience-explain">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga suscipit quos inventore vitae culpa, ipsa voluptatum a necessitatibus autem cumque architecto dolor at expedita, fugiat eligendi enim repellat velit minima iure! Consectetur iste nihil, rerum soluta eos tenetur, quaerat aut quasi accusamus, dolor a minima illo consequatur maxime alias!
                                        </p>
                                        <button className='viewExp'>View</button>

                                    </div>

                                </div>
                            </Fade>
                            <Fade  delay={2000}>
                                <div className="experience  d-flex">
                                    <div className="experience-month d-flex align-items-center justify-content-center">
                                        <section className='month-and-day d-flex justify-content-center align-items-center'>
                                            <div className="number-month text-light">
                                                <h6><b>JUN</b></h6>
                                                <h1><b>18</b></h1>
                                            </div>
                                        </section>
                                        <span className='line-connect'></span>

                                    </div>
                                    <div className="experience-details  p-3">
                                        <h3><b>Front-end Development Diploma</b></h3>
                                        <div className="duration d-flex w-75">
                                            <i class="fa-solid fa-calendar-days me-2 text-muted"></i>
                                            <div className='me-4'>
                                                <label className='text-muted'> Start Date: </label><span className='text-muted'> 2022/01/22</span>
                                            </div>

                                            <div>
                                                <label className='text-muted'> End Date: </label><span className='text-muted'> 2022/08/22</span>
                                            </div>


                                        </div>
                                        <p id="experience-explain">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga suscipit quos inventore vitae culpa, ipsa voluptatum a necessitatibus autem cumque architecto dolor at expedita, fugiat eligendi enim repellat velit minima iure! Consectetur iste nihil, rerum soluta eos tenetur, quaerat aut quasi accusamus, dolor a minima illo consequatur maxime alias!
                                        </p>
                                        <button className='viewExp'>View</button>

                                    </div>

                                </div>
                            </Fade>
                        </div>

                    </div>
                </section>
            </div>

        </>
    )
}
