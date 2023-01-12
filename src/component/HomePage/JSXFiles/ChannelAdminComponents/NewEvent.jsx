import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { receiveArray } from "./event-utils";
import { Fade } from "react-reveal";
import Combobox from "react-widgets/Combobox";
import Swal from "sweetalert2";

export default class NewEvent extends React.Component {

  state = {
    weekendsVisible: true,
    updateSelectedEvent: "",
    eventIDToUpdate: -1,
    channelID: "",
    currentEvents: [],
    eventSelected: {},
    eventThumbnail: {},
    currentEventsPost: [],
    initializeArray: [],
    eventType: "",
    apiEvents: [],
    file: ""
  };





  componentDidMount = () => {
    //HERE WE WILL WRITE THE CODE TO GET DATA FROM API
    //THEN WE WILL USE IMPORTED FUNCTION TO SEND ARRAY FOR VIEW EVENTS
    this.getChannelEvents();
    // let apiEvents = [
    //   {
    //     "_id": "63b9085e809797ed2a2d6c14",
    //     "eventName": "E1",
    //     "startDate": "2022-12-01T07:00:00.000Z",
    //     "endDate": "2022-12-01T07:00:00.000Z",
    //     "startTime": "2023-01-04T09:00:00",
    //     "endTime": "2023-01-07T15:00:00",
    //     "eventType": "Webinar",
    //     "eventLocation": "Remote",
    //     "eventDescription": "THIS IS THE BEST EVENT",
    //     "eventThumbnail": "1673070686753-778970927-2664414.jpg",
    //     "attendance": [],
    //     "orginizationId": "6390c162d9c4e5d6bff034a2",
    //     "__v": 0,
    //     "createdAt": "2023-01-07T05:51:26.763Z",
    //     "updatedAt": "2023-01-07T05:51:26.763Z"
    //   },
    //   {
    //     "_id": "63b917e77df9a97545452b6c",
    //     "eventName": "AI in CS",
    //     "startDate": "2022-04-01T06:00:00.000Z",
    //     "endDate": "2023-01-22T09:00:00.000Z",
    //     "startTime": "2023-01-22T08:00:00.000Z",
    //     "endTime": "2023-01-24T16:30:00.000Z",
    //     "eventType": "Seminar",
    //     "eventLocation": "Nablus, An najah national uni",
    //     "eventDescription": "THIS IS THE BEST EVENT",
    //     "eventThumbnail": "1673074663595-166140140-2664414.jpg",
    //     "attendance": [],
    //     "orginizationId": "6390c162d9c4e5d6bff034a2",
    //     "__v": 0,
    //     "createdAt": "2023-01-07T06:57:43.603Z",
    //     "updatedAt": "2023-01-07T06:57:43.603Z"
    //   },
    //   {
    //     "_id": "63b917e77df9a97545452b23",
    //     "eventName": "TEST EVENT",
    //     "startDate": "2022-04-01T06:00:00.000Z",
    //     "endDate": "2023-01-22T09:00:00.000Z",
    //     "startTime": "2023-01-28T08:00:00.000Z",
    //     "endTime": "2023-01-31T16:30:00.000Z",
    //     "eventType": "Seminar",
    //     "eventLocation": "Nablus, An najah national uni",
    //     "eventDescription": "THIS IS THE BEST EVENT",
    //     "eventThumbnail": "1673074663595-166140140-2664414.jpg",
    //     "attendance": [],
    //     "orginizationId": "6390c162d9c4e5d6bff034a2",
    //     "__v": 0,
    //     "createdAt": "2023-01-07T06:57:43.603Z",
    //     "updatedAt": "2023-01-07T06:57:43.603Z"
    //   },
    //   {
    //     "_id": "63b917e77df9a97545452b23",
    //     "eventName": "TEST EVENT",
    //     "startDate": "2022-04-01T06:00:00.000Z",
    //     "endDate": "2023-01-22T09:00:00.000Z",
    //     "startTime": "2023-01-28T08:00:00.000Z",
    //     "endTime": "2023-01-31T16:30:00.000Z",
    //     "eventType": "Seminar",
    //     "eventLocation": "Nablus, An najah national uni",
    //     "eventDescription": "THIS IS THE BEST EVENT",
    //     "eventThumbnail": "1673074663595-166140140-2664414.jpg",
    //     "attendance": [],
    //     "orginizationId": "6390c162d9c4e5d6bff034a2",
    //     "__v": 0,
    //     "createdAt": "2023-01-07T06:57:43.603Z",
    //     "updatedAt": "2023-01-07T06:57:43.603Z"
    //   },
    // ]

    let ee = [];
    this.state.apiEvents?.map((eve) => {
      let obj = {
        id: createEventId(),
        title: eve.eventName,
        start: eve.startDate,
        end: eve.endDate,
      };
      console.log(eve)
      ee.push(obj);
    });

    this.setState({
      initializeArray: ee,
    });

    this.setState({
      currentEvents: this.state.apiEvents
    })
  };

  getChannelEvents = async () => {
    let channelInfo = localStorage.getItem("ACCOUNT");
    let channelJSON = JSON.parse(channelInfo);
    let channelIDParsed = channelJSON.id;
    this.setState({
      channelID: channelIDParsed
    })
    let data = [];
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/getChannelEvents/${channelIDParsed}`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        data = json.events;
        this.setState({
          apiEvents: data
        })

      });

    let ee = [];
    data.map((eve) => {
      let obj = {
        id: createEventId(),
        title: eve.eventName,
        start: eve.startTime,
        end: eve.endTime,
      };
      console.log(eve)
      ee.push(obj);
    });

    this.setState({
      initializeArray: ee,
    });

    this.setState({
      currentEvents: this.state.apiEvents
    })


  }

  // test = () => {
  //   let ee = [];
  //   this.state.apiEvents?.map((eve) => {
  //     let obj = {
  //       id: createEventId(),
  //       title: eve.eventName,
  //       start: eve.startTime, 
  //       end: eve.endTime
  //     };
  //     console.log(eve)
  //     ee.push(obj);
  //   });

  //   this.setState({
  //     initializeArray: ee,
  //   });

  //   this.setState({
  //     currentEvents: this.state.apiEvents
  //   })
  // }





  render() {
    return (
      <>
        {console.log(this.state.apiEvents)}
        <div className="ms-auto outlet">
          <div className="demo-app">
            <div className="demo-app-main">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek",
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                events={this.state.initializeArray}
                dayMaxEvents={true}
                weekends={this.state.weekendsVisible}
                select={this.handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={this.handleEventClick}
                eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                eventChange={this.updateEvent}
                eventRemove={function () { }}
              /* you can update a remote database when these fire:
                              eventAdd={function(){}}
                              eventChange={function(){}}
                              eventRemove={function(){}}
                              */
              />
            </div>
          </div>
        </div>
        <div id="event-pop-up">
          <div className="event-pop-up-container">
            <h4 className="text-center mb-2">Add New Event</h4>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="eventName" placeholder="name@example.com" />
              <label for="floatingInput">Event Name</label>
            </div>

            <label class="form-label" for="customFile">Thumbnail</label>
            <input onChange={(e) => {
              this.setState({
                eventThumbnail: e.target.files[0]
              })
            }} type="file" class="form-control mb-3" id="customFile" />

            <Combobox
              onChange={(e) => {
                this.state.eventType = e;
              }}
              defaultValue="Full Time"
              data={["Workshop", "Tf", "ee", "ww", "ww"]}
            />

            <div class="form-floating mt-3">
              <input type="text" class="form-control" id="eventLocation" placeholder="name@example.com" />
              <label for="floatingInput">Location</label>
            </div>

            <div className="form-floating mt-3">
              <textarea className="form-control" placeholder="Leave a comment here" id="eventDescription"   ></textarea>
              <label for="floatingTextarea2">Event Description</label>
            </div>

            <div className="d-flex mt-2 justify-content-end">
              <button
                onClick={() => {
                  console.log(this.state.eventSelected);
                  document.getElementById("event-pop-up").style.display = "none";
                  document.getElementById("overLayEvents").style.display = "none";
                  let title = document.getElementById("eventName").value;
                  let eventLocation =
                    document.getElementById("eventLocation").value;
                  let eventDescription =
                    document.getElementById("eventDescription").value;
                  let calendarApi = this.state.eventSelected.view.calendar;
                  let eventThumbnail = this.state.eventThumbnail;
                  calendarApi.unselect(); // clear date selection
                  if (title) {
                    calendarApi.addEvent({
                      id: createEventId(),
                      title,
                      eventLocation,
                      eventDescription,
                      eventThumbnail,
                      start: this.state.eventSelected.startStr,
                      end: this.state.eventSelected.endStr,
                      allDay: this.state.eventSelected.allDay,
                    });
                    this.setState({
                      updateSelectedEvent: "Add"
                    })
                    // console.log(calendarApi.getEvents());
                  }
                }}
                type="button"
                className="btn btn-primary me-1"
              >
                Save
              </button>
              <button onClick={() => {
                document.getElementById("event-pop-up").style.display = "none";
                document.getElementById("overLayEvents").style.display = "none";
              }} className="btn btn-secondary">
                Close
              </button>
            </div>

          </div>
        </div>

        <div
          onClick={(e) => {
            document.getElementById("event-pop-up").style.display = "none";
            e.target.style.display = "none";
          }}
          className="overLayEvents"
          id="overLayEvents"
        ></div>
      </>
    );
  }

  handleDateSelect = (selectInfo) => {
    document.getElementById("event-pop-up").style.display = "block";
    document.getElementById("overLayEvents").style.display = "block";
    this.state.eventSelected = selectInfo;
  };


  updateEvent = (e) => {
    console.log("INSIDE UPDATE HANDLER");
    console.log(e);
    console.log(e.event.id);
    this.setState({
      updateSelectedEvent: "Update",
      eventIDToUpdate: e.event.id
    })
  }

  handleEvents = (events) => {
    // console.log("EVENTS_TOTAL_INFO"); // array of events
    // console.log(events[events.length-1]);
    console.log(events.length);

    if (this.state.updateSelectedEvent == "Update" && events.length > 0) {
      let eventUpdate = events[this.state.eventIDToUpdate - 1];//GET old EVENT FROM CALENDAR 
      let newStartTime = eventUpdate.start; //GET START TIME
      let newEndTime = eventUpdate.end; // GET END TIME

      console.log(this.state.currentEvents);

      let eventUpdatedToSend = this.state.initializeArray[this.state.eventIDToUpdate - 1]; //GET INTENDED EVENT FROM API
      // console.log(this.state.eventIDToUpdate)
      console.log(eventUpdatedToSend)
      //UPDATE START TIME AND END TIME OF THE EVENT 
      eventUpdatedToSend.startTime = newStartTime;
      eventUpdatedToSend.endTime = newEndTime;

      let obj = {
        _id: this.state.apiEvents[eventUpdatedToSend.id-1]._id,
        startDate: newStartTime,
        endDate: newEndTime,
        startTime: newStartTime,
        endTime: newEndTime
      }
      this.setState({
        updateSelectedEvent: ""
      })

      updateAppointmentEvent(obj); 
    
    }

    else if (this.state.updateSelectedEvent == "Add") {
      console.log("addNewEvent");
      let element = events[events.length - 1];
      console.log(element)
      let eventName = element.title;
      let eventDescription = element.extendedProps.eventDescription;
      let eventLocation = element.extendedProps.eventLocation;
      let eventThumbnail = this.state.eventThumbnail;
      let t1 = element.startDate;
      let startDate = element.start;
      let endDate = element.end
      let startTime = element.start
      let endTime = element.end
      let eventType = this.state.eventType;
      let orginizationId = this.state.channelID;





      let obj = {
        orginizationId,
        eventName,
        startDate,
        endDate,
        startTime,
        endTime,
        eventType,
        eventLocation,
        eventDescription,
        eventThumbnail
      };
      console.log(obj);
      addNewEvent(obj);
      this.setState({
        updateSelectedEvent: ""
      })



    }


  }
};


function renderEventContent(eventInfo) {
  // console.log("EVENT_INFO");
  // console.log(eventInfo);
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

async function addNewEvent(obj) {
  const data = new FormData();


  data.append("orginizationId", obj.orginizationId);
  data.append("eventName", obj.eventName);
  data.append("startDate", obj.startDate);
  data.append("endDate", obj.endDate);
  data.append("startTime", obj.startTime);
  data.append("endTime", obj.endTime);
  data.append("eventType", obj.eventType);
  data.append("eventLocation", obj.eventLocation);
  data.append("eventDescription", obj.eventDescription);
  data.append("eventThumbnail", obj.eventThumbnail);

  console.log(data);

  await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/addNewEvent`, {
    method: 'PUT',
    body: data,

  }).then(response => response.json())
    .then(json => {
      if (json.message == "success") {
        Swal.fire("Good job!", "The New Event Added successfully!", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000)


      }
      else {
        Swal.fire("Oh No!", "There is an error, try to readd the job!", "error");

      }
      console.log("INISDE RESPO")


    })


}

async function updateAppointmentEvent(obj) {

  await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/event/updateEventTime`, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json())
    .then(json => {
      if (json.message == "success") {
        Swal.fire("Good job!", "The Event Time Updated successfully!", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000)

      }
      else {
        Swal.fire("Oh No!", "There is an error, try to republish the job!", "error");

      }


    });

}



function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
