import React from 'react';
import swal from 'sweetalert';
import Fade from 'react-reveal/Fade';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';
import test from '../../../../imgs/ch3.jpg'
import test1 from '../../../../imgs/ch4.jpg'
import test2 from '../../../../imgs/ch5.jpg'
import test3 from '../../../../imgs/ch6.jpg'
import test4 from '../../../../imgs/ch7.jpg'
import test5 from '../../../../imgs/ch8.jpg'
import test6 from '../../../../imgs/ch9.jpg'
import test7 from '../../../../imgs/ch10.jpg'


export default function EventsList() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <>
            <div className='outlet ms-auto'>
                <div className='container-hist-events'>
                    <div className='w-100 mb-4 filter d-flex align-items-center '>
                        <div className='me-4'>
                            <h3><i class="fa-solid fa-arrow-down-wide-short"></i> &nbsp; Filter Your Results </h3>
                        </div>
                        <div>
                            <DatePicker
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                dateFormat="yyyy/MM"
                                showWeekNumbers
                            />
                        </div>

                    </div>

                    <Fade>
                        <div className="booked-event w-100 d-flex mb-5">
                            <div className="booked-event-date d-flex justify-content-center align-items-center">
                                <img className='w-100 h-100' src={test}></img>
                                <div className="overlay-event jjj "></div>
                                <div className='full-date-event'>
                                    <h1><b>16</b></h1>
                                    <h6><b>JUN</b></h6>
                                    <h6><b>2022</b></h6>
                                </div>
                            </div>
                            <div className="booked-event-small-details p-4">
                                <h3><i className="fa-solid fa-bell me-3 bell"></i><b><span className='booked-event-name'>NEW EVENT FOR AI INTERESTS</span></b></h3>
                                <h6><i className="fa-regular fa-clock me-3"></i><span className='booked-event-duration'>Jun 16 - Jun 20</span></h6>
                                <div className="booked-event-address d-flex">
                                    <div>
                                        <i class="fa-solid fa-location-dot me-3"></i>
                                    </div>
                                    <div>
                                        <address>
                                            Palestine, <br />
                                            Nablus, <br />
                                            An-Najah National University, <br />
                                            Palestinian Inistitute For Information Technology
                                        </address>
                                    </div>

                                </div>
                            </div>
                            <div className="booked-event-find-more-btn d-flex align-items-center justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Find Out More <i class="fa-solid fa-angles-right"></i>
                                </button>
                            </div>

                        </div>
                    </Fade>
                    <Fade>
                        <div className="booked-event w-100 d-flex mb-5">
                            <div className="booked-event-date d-flex justify-content-center align-items-center">
                                <img className='w-100 h-100' src={test5}></img>
                                <div className="overlay-event jjj "></div>
                                <div className='full-date-event'>
                                    <h1><b>16</b></h1>
                                    <h6><b>JUN</b></h6>
                                    <h6><b>2022</b></h6>
                                </div>
                            </div>
                            <div className="booked-event-small-details p-4">
                                <h3><i className="fa-solid fa-bell me-3 bell"></i><b><span className='booked-event-name'>NEW EVENT FOR AI INTERESTS</span></b></h3>
                                <h6><i className="fa-regular fa-clock me-3"></i><span className='booked-event-duration'>Jun 16 - Jun 20</span></h6>
                                <div className="booked-event-address d-flex">
                                    <div>
                                        <i class="fa-solid fa-location-dot me-3"></i>
                                    </div>
                                    <div>
                                        <address>
                                            Palestine, <br />
                                            Nablus, <br />
                                            An-Najah National University, <br />
                                            Palestinian Inistitute For Information Technology
                                        </address>
                                    </div>

                                </div>
                            </div>
                            <div className="booked-event-find-more-btn d-flex align-items-center justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Find Out More <i class="fa-solid fa-angles-right"></i>
                                </button>
                            </div>

                        </div>
                    </Fade>
                    <Fade>
                        <div className="booked-event w-100 d-flex mb-5">
                            <div className="booked-event-date d-flex justify-content-center align-items-center">
                                <img className='w-100 h-100' src={test4}></img>
                                <div className="overlay-event jjj "></div>
                                <div className='full-date-event'>
                                    <h1><b>16</b></h1>
                                    <h6><b>JUN</b></h6>
                                    <h6><b>2022</b></h6>
                                </div>
                            </div>
                            <div className="booked-event-small-details p-4">
                                <h3><i className="fa-solid fa-bell me-3 bell"></i><b><span className='booked-event-name'>NEW EVENT FOR AI INTERESTS</span></b></h3>
                                <h6><i className="fa-regular fa-clock me-3"></i><span className='booked-event-duration'>Jun 16 - Jun 20</span></h6>
                                <div className="booked-event-address d-flex">
                                    <div>
                                        <i class="fa-solid fa-location-dot me-3"></i>
                                    </div>
                                    <div>
                                        <address>
                                            Palestine, <br />
                                            Nablus, <br />
                                            An-Najah National University, <br />
                                            Palestinian Inistitute For Information Technology
                                        </address>
                                    </div>

                                </div>
                            </div>
                            <div className="booked-event-find-more-btn d-flex align-items-center justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Find Out More <i class="fa-solid fa-angles-right"></i>
                                </button>
                            </div>

                        </div>
                    </Fade>
                    <Fade>
                        <div className="booked-event w-100 d-flex mb-5">
                            <div className="booked-event-date d-flex justify-content-center align-items-center">
                                <img className='w-100 h-100' src={test3}></img>
                                <div className="overlay-event jjj "></div>
                                <div className='full-date-event'>
                                    <h1><b>16</b></h1>
                                    <h6><b>JUN</b></h6>
                                    <h6><b>2022</b></h6>
                                </div>
                            </div>
                            <div className="booked-event-small-details p-4">
                                <h3><i className="fa-solid fa-bell me-3 bell"></i><b><span className='booked-event-name'>NEW EVENT FOR AI INTERESTS</span></b></h3>
                                <h6><i className="fa-regular fa-clock me-3"></i><span className='booked-event-duration'>Jun 16 - Jun 20</span></h6>
                                <div className="booked-event-address d-flex">
                                    <div>
                                        <i class="fa-solid fa-location-dot me-3"></i>
                                    </div>
                                    <div>
                                        <address>
                                            Palestine, <br />
                                            Nablus, <br />
                                            An-Najah National University, <br />
                                            Palestinian Inistitute For Information Technology
                                        </address>
                                    </div>

                                </div>
                            </div>
                            <div className="booked-event-find-more-btn d-flex align-items-center justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Find Out More <i class="fa-solid fa-angles-right"></i>
                                </button>
                            </div>

                        </div>
                    </Fade>
                    <Fade>
                        <div className="booked-event w-100 d-flex mb-5">
                            <div className="booked-event-date d-flex justify-content-center align-items-center">
                                <img className='w-100 h-100' src={test}></img>
                                <div className="overlay-event jjj "></div>
                                <div className='full-date-event'>
                                    <h1><b>16</b></h1>
                                    <h6><b>JUN</b></h6>
                                    <h6><b>2022</b></h6>
                                </div>
                            </div>
                            <div className="booked-event-small-details p-4">
                                <h3><i className="fa-solid fa-bell me-3 bell"></i><b><span className='booked-event-name'>NEW EVENT FOR AI INTERESTS</span></b></h3>
                                <h6><i className="fa-regular fa-clock me-3"></i><span className='booked-event-duration'>Jun 16 - Jun 20</span></h6>
                                <div className="booked-event-address d-flex">
                                    <div>
                                        <i class="fa-solid fa-location-dot me-3"></i>
                                    </div>
                                    <div>
                                        <address>
                                            Palestine, <br />
                                            Nablus, <br />
                                            An-Najah National University, <br />
                                            Palestinian Inistitute For Information Technology
                                        </address>
                                    </div>

                                </div>
                            </div>
                            <div className="booked-event-find-more-btn d-flex align-items-center justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Find Out More <i class="fa-solid fa-angles-right"></i>
                                </button>
                            </div>

                        </div>
                    </Fade>
                    <Fade>
                        <div className="booked-event w-100 d-flex mb-5">
                            <div className="booked-event-date d-flex justify-content-center align-items-center">
                                <img className='w-100 h-100' src={test}></img>
                                <div className="overlay-event jjj "></div>
                                <div className='full-date-event'>
                                    <h1><b>16</b></h1>
                                    <h6><b>JUN</b></h6>
                                    <h6><b>2022</b></h6>
                                </div>
                            </div>
                            <div className="booked-event-small-details p-4">
                                <h3><i className="fa-solid fa-bell me-3 bell"></i><b><span className='booked-event-name'>NEW EVENT FOR AI INTERESTS</span></b></h3>
                                <h6><i className="fa-regular fa-clock me-3"></i><span className='booked-event-duration'>Jun 16 - Jun 20</span></h6>
                                <div className="booked-event-address d-flex">
                                    <div>
                                        <i class="fa-solid fa-location-dot me-3"></i>
                                    </div>
                                    <div>
                                        <address>
                                            Palestine, <br />
                                            Nablus, <br />
                                            An-Najah National University, <br />
                                            Palestinian Inistitute For Information Technology
                                        </address>
                                    </div>

                                </div>
                            </div>
                            <div className="booked-event-find-more-btn d-flex align-items-center justify-content-center">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Find Out More <i class="fa-solid fa-angles-right"></i>
                                </button>
                            </div>

                        </div>
                    </Fade>



                </div>
            </div>

            {/* POP UP FOR MORE INFO OF EVENT */}
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
                                        <td>
                                            <div>
                                                <input type="text" class="form-control" id="eventName" aria-describedby="emailHelp" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row"> Type</th>
                                        <td>
                                            <div>
                                                <input type="text" class="form-control" id="eventName" aria-describedby="emailHelp" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Location</th>
                                        <td>
                                            <div>
                                                <input type="text" class="form-control" id="eventName" aria-describedby="emailHelp" />
                                            </div>
                                        </td>                                    </tr>
                                    <tr>
                                        <th scope="row">Description</th>
                                        <td>
                                            <div>
                                                <textarea rows={10} class="form-control" id="eventName" aria-describedby="emailHelp" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Thumbnail</th>
                                        <td>
                                            <div>
                                                <input type="file" class="form-control" id="customFile" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button className='btn btn-primary'>
                                Update
                            </button>
                            <button onClick={function () {
                                swal({
                                    title: "Are you sure?",
                                    text: "Once deleted, you will not be able to recover this imaginary file!",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                })
                                    .then((willDelete) => {
                                        if (willDelete) {
                                            swal("You deleted your booking for this event!", {
                                                icon: "success",
                                            });
                                        } else {
                                            swal("Your imaginary file is safe!");
                                        }
                                    });
                            }} type="button" className="btn btn-danger">Delete Event</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
