import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { receiveArray } from "./event-utils";
import { Fade } from "react-reveal";
import Combobox from "react-widgets/Combobox";

export default class NewEvent extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
    eventSelected: {},
    eventThumbnail : "", 
    currentEventsPost: [],
    initializeArray: [],
    eventType: "",
  };

  componentDidMount = () => {
    //HERE WE WILL WRITE THE CODE TO GET DATA FROM API
    //THEN WE WILL USE IMPORTED FUNCTION TO SEND ARRAY FOR VIEW EVENTS
    let fakeEvents = [
      {
        id: 1,
        name: "FIRST EVENT",
        sdate: "2022-12-01",
        edate: "2022-12-02",
        stime: "T09:00:00",
        etime: "T12:30:00",
        etype: "workshop",
        edesc: "NN",
        elocation: "nablus",
      },
      {
        id: 1,
        name: "SECOND EVENT",
        sdate: "2022-12-07",
        edate: "2022-12-10",
        stime: "T12:00:00",
        etime: "T12:00:00",
        etype: "workshop",
        edesc: "NN",
        elocation: "nablus",
      },
      {
        id: 1,
        name: "THIRD EVENT",
        sdate: "2022-12-20",
        edate: "2022-12-25",
        stime: "T08:00:00",
        etime: "T12:30:00",
        etype: "workshop",
        edesc: "NN",
        elocation: "nablus",
      },
    ];

    let ee = [];
    fakeEvents.map((eve) => {
      let obj = {
        id: createEventId(),
        title: eve.name,
        start: eve.sdate + eve.stime,
        end: eve.edate + eve.etime,
      };
      ee.push(obj);
    });

    this.setState({
      initializeArray: ee,
    });
  };

  render() {
    return (
      <>
        <div className="ms-auto outlet">
          <div className="demo-app">
            {console.log(this.state.initializeArray)}
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
                eventChange={function (e) {
                  console.log(e);
                }}
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
            <input onChange={(e)=>{
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

  handleEvents = (events) => {
    console.log("EVENTS_TOTAL_INFO"); // array of events
    console.log(events);
    this.setState({
      currentEvents: events,
    });
    events.map((element) => {
      let eventName = element.title;
      let eventDescription = element.extendedProps.eventDescription;
      let eventLocation = element.extendedProps.eventLocation;
      let eventThumbnail = element.extendedProps.eventThumbnail;
      let startInformation = "" + element.start;
      let endInformation = "" + element.end;
      let startDate = element.startStr.split("T")[0];
      let endDate = element.endStr.split("T")[0];
      let startTime = startInformation.split(" ")[4];
      let endTime = endInformation.split(" ")[4];
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

      // THIS FUNCTION USED TO ADD/UPDATE EVENT
      // WE HAVE TO ADD THIS OBJECT TO THE GLOBAL ARRAY AND RESENT IT TO THE DATA BASE
      //   GENERATE REQUEST FOR ADD NEW EVENT TO THE ARRAY OR EDIT EVENT
      // A CODE FOR ADD/UPDATE SAME
    });
  };
}

function renderEventContent(eventInfo) {
  console.log("EVENT_INFO");
  console.log(eventInfo);
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
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
