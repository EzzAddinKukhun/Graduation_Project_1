import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../../CSSFiles/UserCss/events.css';

export default function Events() {
  return (
    <>
      <div className='outlet ms-auto'>
        <div className="events-types">
          <div className="event-choice-view">
            <Link to="NewEvents">New Events</Link>
          </div>
          <div className="event-choice-view">
            <Link to="HistEvents">History</Link>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}
