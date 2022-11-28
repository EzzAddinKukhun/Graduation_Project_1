import React from 'react';
import '../../CSSFiles/UserCss/events.css';
import test from '../../../../imgs/ch3.jpg'
import test1 from '../../../../imgs/ch4.jpg'
import test2 from '../../../../imgs/ch5.jpg'
import test3 from '../../../../imgs/ch6.jpg'
import test4 from '../../../../imgs/ch7.jpg'
import test5 from '../../../../imgs/ch8.jpg'
import test6 from '../../../../imgs/ch9.jpg'
import test7 from '../../../../imgs/ch10.jpg'
import { Fade } from 'react-reveal';

export default function NewEvents() {
    return (
        <>
            <div className="outlet ms-auto">
                <div className="container">
                    <div className="row">
                        {/* GENERATE EVENTS */}
                        <Fade>
                            <div className="col-md-6 event-reg">
                                <div className='event-container d-flex'>
                                    <Fade delay={500} >

                                        <div className="event-thumb">
                                            <img src={test}></img>
                                            <div className="overlay-event"></div>
                                            <div className="event-date text-light text-center  w-50">
                                                <h6 className='event-year'><b>2022</b></h6>
                                                <h2><b>16</b></h2>
                                                <h6 className='event-month'><b>JUN</b></h6>
                                            </div>

                                        </div>
                                    </Fade>

                                    <Fade delay={1000} >
                                        <div className="event-info p-3">
                                            <h3 className='event-name'><b>AI Conference For Alumni</b></h3>
                                            <div className='event-type d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-handshake-angle"></i>                            </div>
                                                <div className='w-85'>
                                                    <h5>Workshop</h5>
                                                </div>
                                            </div>
                                            <div className='event-location d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className='w-85 '>
                                                    <h5>Palestine/Nablus</h5>
                                                </div>
                                            </div>
                                            <div className='event-time  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-clock"></i>
                                                </div>
                                                <div className='w-85'>
                                                    <h5>01:00 PM Jerusalem</h5>
                                                </div>
                                            </div>
                                            <div className='event-hosts  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-people-group"></i>                                        </div>
                                                <div className='w-85 '>
                                                    <h5>Mohammad Ahmad</h5>
                                                </div>
                                            </div>


                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='mt-2 view-event-details'>
                                                View More..
                                            </button>


                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="col-md-6 event-reg">
                                <div className='event-container d-flex'>
                                    <Fade delay={500} >

                                        <div className="event-thumb">
                                            <img src={test1}></img>
                                            <div className="overlay-event"></div>
                                            <div className="event-date text-light text-center  w-50">
                                                <h6 className='event-year'><b>2022</b></h6>
                                                <h2><b>24</b></h2>
                                                <h6 className='event-month'><b>JUN</b></h6>
                                            </div>

                                        </div>
                                    </Fade>

                                    <Fade delay={1000} >
                                        <div className="event-info p-3">
                                            <h3 className='event-name'><b>Social Skills Alumni</b></h3>
                                            <div className='event-type d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-handshake-angle"></i>                            </div>
                                                <div className='w-85'>
                                                    <h5>Workshop</h5>
                                                </div>
                                            </div>
                                            <div className='event-location d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className='w-85 '>
                                                    <h5>Palestine/Nablus</h5>
                                                </div>
                                            </div>
                                            <div className='event-time  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-clock"></i>
                                                </div>
                                                <div className='w-85'>
                                                    <h5>01:00 PM Jerusalem</h5>
                                                </div>
                                            </div>
                                            <div className='event-hosts  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-people-group"></i>                                        </div>
                                                <div className='w-85 '>
                                                    <h5>Mohammad Ahmad</h5>
                                                </div>
                                            </div>


                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='mt-2 view-event-details'>
                                                View More..
                                            </button>


                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="col-md-6 event-reg">
                                <div className='event-container d-flex'>
                                    <Fade delay={500} >

                                        <div className="event-thumb">
                                            <img src={test3}></img>
                                            <div className="overlay-event"></div>
                                            <div className="event-date text-light text-center  w-50">
                                                <h6 className='event-year'><b>2022</b></h6>
                                                <h2><b>28</b></h2>
                                                <h6 className='event-month'><b>JUN</b></h6>
                                            </div>

                                        </div>
                                    </Fade>

                                    <Fade delay={1000} >
                                        <div className="event-info p-3">
                                            <h3 className='event-name'><b>Start Your Own Project</b></h3>
                                            <div className='event-type d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-handshake-angle"></i>                            </div>
                                                <div className='w-85'>
                                                    <h5>Workshop</h5>
                                                </div>
                                            </div>
                                            <div className='event-location d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className='w-85 '>
                                                    <h5>Palestine/Nablus</h5>
                                                </div>
                                            </div>
                                            <div className='event-time  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-clock"></i>
                                                </div>
                                                <div className='w-85'>
                                                    <h5>01:00 PM Jerusalem</h5>
                                                </div>
                                            </div>
                                            <div className='event-hosts  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-people-group"></i>                                        </div>
                                                <div className='w-85 '>
                                                    <h5>Mohammad Ahmad</h5>
                                                </div>
                                            </div>


                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='mt-2 view-event-details'>
                                                View More..
                                            </button>


                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="col-md-6 event-reg">
                                <div className='event-container d-flex'>
                                    <Fade delay={500} >

                                        <div className="event-thumb">
                                            <img className='ttt' src={test7}></img>
                                            <div className="overlay-event"></div>
                                            <div className="event-date text-light text-center  w-50">
                                                <h6 className='event-year'><b>2022</b></h6>
                                                <h2><b>13</b></h2>
                                                <h6 className='event-month'><b>JUL</b></h6>
                                            </div>

                                        </div>
                                    </Fade>

                                    <Fade delay={1000} >
                                        <div className="event-info p-3">
                                            <h3 className='event-name'><b>IBM Robot Event</b></h3>
                                            <div className='event-type d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-handshake-angle"></i>                            </div>
                                                <div className='w-85'>
                                                    <h5>Workshop</h5>
                                                </div>
                                            </div>
                                            <div className='event-location d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className='w-85 '>
                                                    <h5>Palestine/Nablus</h5>
                                                </div>
                                            </div>
                                            <div className='event-time  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-clock"></i>
                                                </div>
                                                <div className='w-85'>
                                                    <h5>01:00 PM Jerusalem</h5>
                                                </div>
                                            </div>
                                            <div className='event-hosts  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-people-group"></i>                                        </div>
                                                <div className='w-85 '>
                                                    <h5>Mohammad Ahmad</h5>
                                                </div>
                                            </div>


                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='mt-2 view-event-details'>
                                                View More..
                                            </button>


                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="col-md-6 event-reg">
                                <div className='event-container d-flex'>
                                    <Fade delay={500} >

                                        <div className="event-thumb">
                                            <img src={test}></img>
                                            <div className="overlay-event"></div>
                                            <div className="event-date text-light text-center  w-50">
                                                <h6 className='event-year'><b>2022</b></h6>
                                                <h2><b>16</b></h2>
                                                <h6 className='event-month'><b>JUN</b></h6>
                                            </div>

                                        </div>
                                    </Fade>

                                    <Fade delay={1000} >
                                        <div className="event-info p-3">
                                            <h3 className='event-name'><b>AI Conference For Alumni</b></h3>
                                            <div className='event-type d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-handshake-angle"></i>                            </div>
                                                <div className='w-85'>
                                                    <h5>Workshop</h5>
                                                </div>
                                            </div>
                                            <div className='event-location d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className='w-85 '>
                                                    <h5>Palestine/Nablus</h5>
                                                </div>
                                            </div>
                                            <div className='event-time  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-clock"></i>
                                                </div>
                                                <div className='w-85'>
                                                    <h5>01:00 PM Jerusalem</h5>
                                                </div>
                                            </div>
                                            <div className='event-hosts  d-flex '>
                                                <div className=' w-15 text-center'>
                                                    <i className="fa-solid fa-people-group"></i>                                        </div>
                                                <div className='w-85 '>
                                                    <h5>Mohammad Ahmad</h5>
                                                </div>
                                            </div>


                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='mt-2 view-event-details'>
                                                View More..
                                            </button>


                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>

            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Event Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table class="table table-hover">

                                <tbody>
                                    <tr>
                                        <th className='w-25' scope="row"> Name</th>
                                        <td>AI Conference For Alumni</td>

                                    </tr>
                                    <tr>
                                        <th className="event-comp w-25" scope="row"> Channel/Organization</th>
                                        <td>Future Engineers</td>

                                    </tr>
                                    <tr>
                                        <th scope="row"> Type</th>
                                        <td>Workshop</td>

                                    </tr>
                                    <tr>
                                        <th scope="row"> Date</th>
                                        <td colspan="2">22 JUN 2022</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Time</th>
                                        <td colspan="2">01:00 PM Jerusalem</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Location</th>
                                        <td colspan="2">Palestine/Nablus</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Description</th>
                                        <td className='desc-event' colspan="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab illo doloremque delectus, officia perspiciatis aperiam sequi placeat distinctio commodi modi hic, minima explicabo natus accusamus similique corporis iusto ex repellat amet! Ipsum voluptatum dicta debitis, ullam modi consequuntur natus.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
