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
import { useEffect } from 'react';
import Swal from 'sweetalert2';


export default function HistEvents() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const [eventId, setEventId] = useState("");
  let [userId, setUserId] = useState("");
  let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  async function getUserEvents(id) {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/getUserEvents/${id}`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setUserEvents(json.events);
        console.log(json.events)
      });


  }

  useEffect(() => {
    let dataFromLocalStorage = localStorage.getItem("ACCOUNT");
    let jsonData = JSON.parse(dataFromLocalStorage);
    let id = jsonData.id;
    setUserId(id);
    getUserEvents(id);




  }, [])

  return (
    <>
      <div className='outlet ms-auto'>
        <div className='container-hist-events'>

          {userEvents.map((event) => {
            return (
              <Fade>
                <div className="booked-event w-100 d-flex mb-5">
                  <div className="booked-event-date d-flex justify-content-center align-items-center">
                    <img className='w-100 h-100' src={`https://alumnibackend-fathifathallah.onrender.com/api/event/getEventThumbnail/${event._id}`} ></img>
                    <div className="overlay-event jjj "></div>
                    <div className='full-date-event'>
                      <h1><b>{new Date(event.startDate).toLocaleDateString().split("/")[1]}</b></h1>
                      <h6><b>{month[new Date(event.startDate).toLocaleDateString().split("/")[0] - 1]}</b></h6>
                      <h6><b>{new Date(event.startDate).toLocaleDateString().split("/")[2]}</b></h6>
                    </div>
                  </div>
                  <div className="booked-event-small-details p-4">
                    <h3><i className="fa-solid fa-bell me-3 bell mb-3"></i><b><span className='booked-event-name'>{event.eventName}</span></b></h3>
                    <h6><i className="fa-regular fa-clock me-3 mb-3"></i><span className='booked-event-duration'><b>
                      {new Date(event.startDate).toLocaleDateString() + " , " + new Date(event.startDate).toLocaleTimeString() + "  "}
                      <i class="fa-solid fa-arrow-right"></i>
                      {"  " + new Date(event.endDate).toLocaleDateString() + " , " + new Date(event.endDate).toLocaleTimeString()}
                    </b></span></h6>
                    <h6><i class="fa-regular fa-handshake me-3 mb-3"></i>{event.eventType}</h6>
                    <h6><i class="fa-solid fa-location-dot me-3 mb-3"></i>{event.eventLocation}</h6>

                  </div>
                  <div className="booked-event-find-more-btn d-flex align-items-center justify-content-center">
                    <button
                      onClick={() => {
                        setEventId(event._id);
                        document.getElementById("eventNamePopUp").innerHTML = event.eventName;
                        document.getElementById("eventOrganizationPopUp").innerHTML = "ORGANIZATION";
                        document.getElementById("eventTypePopUp").innerHTML = event.eventType;
                        document.getElementById("eventDatePopUp").innerHTML = new Date(event.startDate).toLocaleDateString() + " - " + new Date(event.endDate).toLocaleDateString()
                        document.getElementById("eventTimePopUp").innerHTML = new Date(event.startDate).toLocaleTimeString() + " - " + new Date(event.endDate).toLocaleTimeString()
                        document.getElementById("eventLocationPopUp").innerHTML = event.eventLocation;
                        document.getElementById("eventAttendancePopUp").innerHTML = event.attendance.length;
                        document.getElementById("eventDescriptionPopUp").innerHTML = event.eventDescription;

                      }}
                      data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Find Out More <i class="fa-solid fa-angles-right"></i>
                    </button>
                  </div>

                </div>
              </Fade>
            );


          })}





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
                    <td id="eventNamePopUp">AI Conference For Alumni</td>

                  </tr>
                  <tr>
                    <th className="event-comp w-25" scope="row"> Channel/Organization</th>
                    <td id="eventOrganizationPopUp">Future Engineers</td>

                  </tr>
                  <tr>
                    <th scope="row"> Type</th>
                    <td id="eventTypePopUp">Workshop</td>

                  </tr>
                  <tr>
                    <th scope="row"> Date</th>
                    <td id="eventDatePopUp" colspan="2">22 JUN 2022</td>
                  </tr>
                  <tr>
                    <th scope="row"> Time</th>
                    <td id="eventTimePopUp" colspan="2">01:00 PM Jerusalem</td>
                  </tr>
                  <tr>
                    <th scope="row">Location</th>
                    <td id="eventLocationPopUp" colspan="2">Palestine/Nablus</td>
                  </tr>
                  <tr>
                    <th scope="row">Attendance</th>
                    <td id="eventAttendancePopUp" colspan="2">Palestine/Nablus</td>
                  </tr>
                  <tr>
                    <th scope="row">Description</th>
                    <td id="eventDescriptionPopUp" className='desc-event' colspan="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab illo doloremque delectus, officia perspiciatis aperiam sequi placeat distinctio commodi modi hic, minima explicabo natus accusamus similique corporis iusto ex repellat amet! Ipsum voluptatum dicta debitis, ullam modi consequuntur natus.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button onClick={async function () {
                let _id = userId;
                let data = {
                  _id,
                  eventId
                }
                await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/unbookEventforUser/`, {
                  method: 'DELETE',
                  body: JSON.stringify(data),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
                }).then(response => response.json())
                  .then(json => {
                    if (json.message == "success") {

                      Swal.fire("You deleted your booking for this event!", {
                        icon: "success",
                      });


                      setTimeout(() => {
                        window.location.reload()
                      }, 2000)
                    }
                  });

              }} type="button" className="btn btn-danger">Delete Booking</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
