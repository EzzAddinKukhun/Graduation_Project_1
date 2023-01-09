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
    currentEvents: [],
    eventSelected: {},
    eventThumbnail: "",
    currentEventsPost: [],
    initializeArray: [],
    eventType: "",
    // apiEvents : []
  };


componentDidMount = () => {
  //HERE WE WILL WRITE THE CODE TO GET DATA FROM API
  //THEN WE WILL USE IMPORTED FUNCTION TO SEND ARRAY FOR VIEW EVENTS
  // getChannelEvents()
  let apiEvents = [
    {
      "_id": "63b9085e809797ed2a2d6c14",
      "eventName": "E1",
      "startDate": "2022-12-01T07:00:00.000Z",
      "endDate": "2022-12-01T07:00:00.000Z",
      "startTime": "2023-01-04T09:00:00",
      "endTime": "2023-01-07T15:00:00",
      "eventType": "Webinar",
      "eventLocation": "Remote",
      "eventDescription": "THIS IS THE BEST EVENT",
      "eventThumbnail": "1673070686753-778970927-2664414.jpg",
      "attendance": [],
      "orginizationId": "6390c162d9c4e5d6bff034a2",
      "__v": 0,
      "createdAt": "2023-01-07T05:51:26.763Z",
      "updatedAt": "2023-01-07T05:51:26.763Z"
    },
    {
      "_id": "63b917e77df9a97545452b6c",
      "eventName": "AI in CS",
      "startDate": "2022-04-01T06:00:00.000Z",
      "endDate": "2023-01-22T09:00:00.000Z",
      "startTime": "2023-01-22T08:00:00.000Z",
      "endTime": "2023-01-24T16:30:00.000Z",
      "eventType": "Seminar",
      "eventLocation": "Nablus, An najah national uni",
      "eventDescription": "THIS IS THE BEST EVENT",
      "eventThumbnail": "1673074663595-166140140-2664414.jpg",
      "attendance": [],
      "orginizationId": "6390c162d9c4e5d6bff034a2",
      "__v": 0,
      "createdAt": "2023-01-07T06:57:43.603Z",
      "updatedAt": "2023-01-07T06:57:43.603Z"
    },
    {
      "_id": "63b917e77df9a97545452b23",
      "eventName": "TEST EVENT",
      "startDate": "2022-04-01T06:00:00.000Z",
      "endDate": "2023-01-22T09:00:00.000Z",
      "startTime": "2023-01-28T08:00:00.000Z",
      "endTime": "2023-01-31T16:30:00.000Z",
      "eventType": "Seminar",
      "eventLocation": "Nablus, An najah national uni",
      "eventDescription": "THIS IS THE BEST EVENT",
      "eventThumbnail": "1673074663595-166140140-2664414.jpg",
      "attendance": [],
      "orginizationId": "6390c162d9c4e5d6bff034a2",
      "__v": 0,
      "createdAt": "2023-01-07T06:57:43.603Z",
      "updatedAt": "2023-01-07T06:57:43.603Z"
    },
    {
      "_id": "63b917e77df9a97545452b23",
      "eventName": "TEST EVENT",
      "startDate": "2022-04-01T06:00:00.000Z",
      "endDate": "2023-01-22T09:00:00.000Z",
      "startTime": "2023-01-28T08:00:00.000Z",
      "endTime": "2023-01-31T16:30:00.000Z",
      "eventType": "Seminar",
      "eventLocation": "Nablus, An najah national uni",
      "eventDescription": "THIS IS THE BEST EVENT",
      "eventThumbnail": "1673074663595-166140140-2664414.jpg",
      "attendance": [],
      "orginizationId": "6390c162d9c4e5d6bff034a2",
      "__v": 0,
      "createdAt": "2023-01-07T06:57:43.603Z",
      "updatedAt": "2023-01-07T06:57:43.603Z"
    },
  ]

  let ee = [];
  apiEvents.map((eve) => {
    let obj = {
      id: createEventId(),
      title: eve.eventName,
      start: eve.startTime,
      end: eve.endTime,
    };
    ee.push(obj);
  });

  this.setState({
    initializeArray: ee,
  });

  this.setState({
    currentEvents: apiEvents
  })
};

render() {
  return (
    <>
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
            this.state.eventThumbnail = e.target.value;
            console.log(this.state.eventThumbnail)
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
                  console.log(calendarApi.getEvents());
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
  console.log(e);
  // console.log(e);
  // console.log(e.event.id); 
  this.setState({
    updateSelectedEvent: "Update",
    eventIDToUpdate: e.event.id
  })
}

handleEvents = (events) => {
  // console.log("EVENTS_TOTAL_INFO"); // array of events
  // console.log(events[events.length-1]);

  if (this.state.updateSelectedEvent == "Update") {
    console.log("updateEvent");
    let eventUpdate = events[this.state.eventIDToUpdate - 1];//GET old EVENT FROM CALENDAR 
    let newStartTime = eventUpdate.startStr; //GET START TIME
    let newEndTime = eventUpdate.endStr; // GET END TIME
    let eventUpdatedToSend = this.state.currentEvents[this.state.eventIDToUpdate - 1]; //GET INTENDED EVENT FROM API
    console.log(this.state.eventIDToUpdate)
    console.log(eventUpdatedToSend)
    //UPDATE START TIME AND END TIME OF THE EVENT 
    eventUpdatedToSend.startTime = newStartTime;
    eventUpdatedToSend.endTime = newEndTime;

    //GENERATE UPDATE EVENT REQUEST
    window.location.reload();
  }

  else if (this.state.updateSelectedEvent == "Add") {
    console.log("addNewEvent");
    let element = events[events.length - 1];
    let eventName = element.title;
    let eventDescription = element.extendedProps.eventDescription;
    let eventLocation = element.extendedProps.eventLocation;
    let eventThumbnail = element.extendedProps.eventThumbnail;
    let startDate = element.startStr;
    let endDate = element.endStr
    let startTime = element.startStr;
    let endTime = element.endStr;
    let eventType = this.state.eventType;

    let obj = {
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
    // this.setState({
    //   updateSelectedEvent: ""
    // })
    window.location.reload();

    // addNewEvent(obj); // UNCOMMENT THIS FOR ADD NEW EVENT



  }




  // this.setState({
  //   currentEvents: events,
  // });

  // events.map((element) => {
  //   let eventName = element.title;
  //   let eventDescription = element.extendedProps.eventDescription;
  //   let eventLocation = element.extendedProps.eventLocation;
  //   let eventThumbnail = element.extendedProps.eventThumbnail;
  //   let startInformation = "" + element.start;
  //   let endInformation = "" + element.end;
  //   let startDate = element.startStr;
  //   let endDate = element.endStr
  //   let startTime = element.startStr; 
  //   let endTime = element.endStr; 
  //   let eventType = this.state.eventType;

  //   // let startDate = element.startStr.split("T")[0];
  //   // let endDate = element.endStr.split("T")[0];
  //   // let startTime = startInformation.split(" ")[4];
  //   // let endTime = endInformation.split(" ")[4];

  //   let obj = {
  //     eventName,
  //     startDate,
  //     endDate,
  //     startTime,
  //     endTime,
  //     eventType,
  //     eventLocation,
  //     eventDescription,
  //     eventThumbnail
  //   };
  //   // console.log(obj); 

  //   // THIS FUNCTION USED TO ADD/UPDATE EVENT
  //   // WE HAVE TO ADD THIS OBJECT TO THE GLOBAL ARRAY AND RESENT IT TO THE DATA BASE
  //   //   GENERATE REQUEST FOR ADD NEW EVENT TO THE ARRAY OR EDIT EVENT
  //   // A CODE FOR ADD/UPDATE SAME
  // });
};
}

function renderEventContent(eventInfo) {
  // console.log("EVENT_INFO");
  // console.log(eventInfo);
  return (
    <>
      {console.log(eventInfo)}
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

async function addNewEvent(data) {
  await fetch(`http://localhost:5000/api/job/updateJob`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json())
    .then(json => {
      if (json.message == "success") {
        Swal.fire("Good job!", "The New Event Added successfully!", "success");

      }
      else {
        Swal.fire("Oh No!", "There is an error, try to readd the job!", "error");

      }


    });


}

async function getChannelEvents() {
  let channelInfo = localStorage.getItem("ACCOUNT");
  let channelJSON = JSON.parse(channelInfo);
  let channelID = channelJSON.id;
  await fetch(`http://localhost:5000/api/event/getChannelEvents/${channelID}`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })

    .then(response => response.json())
    .then(json => {
      let eventsAPI = json.events;
      this.setState({
        apiEvents : eventsAPI
      })
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
