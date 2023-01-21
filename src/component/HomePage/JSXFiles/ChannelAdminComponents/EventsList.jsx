import React, { useEffect } from 'react';
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
import Swal from 'sweetalert2';


export default function EventsList() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [channelID, setChannelID] = useState("");
    const [channelEvents, setChannelEvents] = useState([]);
    const [fileImageToUpdate, setFileImageToUpdate] = useState();
    let [eventIDToUpdate, setEventIDToUpdate] = useState("");
    let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    async function getChannelEvents(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/getChannelEvents/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setChannelEvents(json.events);

            });


    }

    useEffect(() => {
        let dataFromLocalStorage = localStorage.getItem("ACCOUNT");
        let jsonData = JSON.parse(dataFromLocalStorage);
        let id = jsonData.id;
        getChannelEvents(id);




    }, [])
    return (
        <>
            {console.log(channelEvents)}
            <div className='outlet ms-auto'>
                <div className='container-hist-events'>
                    <div className='w-100 mb-4 filter d-flex align-items-center '>
                        <div className='me-4'>
                            <h3><i class="fa-solid fa-arrow-down-wide-short"></i> &nbsp; Filter Your Results </h3>
                        </div>
                        <div>
                            {/* <DatePicker
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                dateFormat="yyyy/MM"
                                showWeekNumbers
                            /> */}
                        </div>

                    </div>

                    {
                        channelEvents.map((event) => {
                            return (
                                <Fade>
                                    <div className="booked-event w-100 d-flex mb-5">
                                        <div className="booked-event-date d-flex justify-content-center align-items-center">
                                            <img className='w-100 h-100' src={`https://alumnibackend-fathifathallah.onrender.com/api/event/getEventThumbnail/${event._id}`} ></img>
                                            <div className="overlay-event jjj "></div>
                                            <div className='full-date-event'>
                                                <h1><b>{new Date(event.startDate).toLocaleDateString().split("/")[1]}</b></h1>
                                                <h6><b>{month[new Date(event.startDate).toLocaleDateString().split("/")[0]-1]}</b></h6>
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
                                                    document.getElementById("eventNameUpdate").value = event.eventName;
                                                    document.getElementById("eventTypeUpdate").value = event.eventType;
                                                    document.getElementById("eventLocationUpdate").value = event.eventLocation;
                                                    document.getElementById("eventDescriptionUpdate").value = event.eventDescription;
                                                    setEventIDToUpdate(event._id);

                                                }}
                                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Find Out More <i class="fa-solid fa-angles-right"></i>
                                            </button>
                                        </div>

                                    </div>
                                </Fade>

                            );
                        })
                    }



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
                                                <input type="text" class="form-control" id="eventNameUpdate" aria-describedby="emailHelp" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row"> Type</th>
                                        <td>
                                            <div>
                                                <input type="text" class="form-control" id="eventTypeUpdate" aria-describedby="emailHelp" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Location</th>
                                        <td>
                                            <div>
                                                <input type="text" class="form-control" id="eventLocationUpdate" aria-describedby="emailHelp" />
                                            </div>
                                        </td>                                    </tr>
                                    <tr>
                                        <th scope="row">Description</th>
                                        <td>
                                            <div>
                                                <textarea rows={10} class="form-control" id="eventDescriptionUpdate" aria-describedby="emailHelp" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Thumbnail</th>
                                        <td>
                                            <div>
                                                <input
                                                    onChange={(e) => {
                                                        setFileImageToUpdate(e.target.files[0]);
                                                    }}
                                                    type="file" class="form-control" id="customFile" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={async () => {
                                    let _id = eventIDToUpdate;
                                    const data = new FormData();

                                    let eventName = document.getElementById("eventNameUpdate").value;
                                    let eventType = document.getElementById("eventTypeUpdate").value;
                                    let eventLocation = document.getElementById("eventLocationUpdate").value;
                                    let eventDescription = document.getElementById("eventDescriptionUpdate").value;

                                    data.append("_id", _id);
                                    data.append("eventName", eventName);
                                    data.append("eventType", eventType);
                                    data.append("eventLocation", eventLocation);
                                    data.append("eventDescription", eventDescription);
                                    data.append("eventThumbnail", fileImageToUpdate);

                                    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/updateEventInfo`, {
                                        method: 'PUT',
                                        body: data,

                                    }).then(response => response.json())
                                        .then(json => {
                                            if (json.message == "success") {
                                                Swal.fire("Good job!", "This Event Updated successfully!", "success");
                                                setTimeout(() => {
                                                    window.location.reload();
                                                }, 2000)


                                            }
                                            else {
                                                Swal.fire("Oh No!", "There is an error, try to readd the job!", "error");

                                            }
                                            console.log("INISDE RESPO")


                                        })



                                }}
                                className='btn btn-primary'>
                                Update
                            </button>
                            <button
                             onClick={async()=> {
                                let data = {
                                    _id : eventIDToUpdate
                                }
                                console.log (data)
                               await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/deleteChannelEvent`, {
                                                method: 'DELETE',
                                                body : JSON.stringify(data), 
                                                headers: {
                                                    "Content-type": "application/json; charset=UTF-8"
                                                }
                                            }).then(response => response.json())
                                                .then(json => {
                                                    if (json.message == "success") {
                                                        Swal.fire("Good job!", "Event Deleted Successfully!", "success");
                                                        setTimeout(()=>{
                                                            window.location.reload()
                                                        },2000)
                                                    }
                                                });
                            }} 
                            
                            type="button" className="btn btn-danger">Delete Event</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
