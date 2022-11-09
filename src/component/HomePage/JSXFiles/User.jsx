import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AlumniProfile from './UserPageComponents/AlumniProfile';
import BasicInformation from './UserPageComponents/BasicInformation';
import Channels from './UserPageComponents/Channels';
import Education from './UserPageComponents/Education';
import Events from './UserPageComponents/Events';
import Experience from './UserPageComponents/Experience';
import Positions from './UserPageComponents/Positions';
import Profile from './UserPageComponents/Profile';
import Settings from './UserPageComponents/Settings';
import Sidebar from './UserPageComponents/Sidebar';
import TimeLine from './UserPageComponents/TimeLine';
import UserNavbar from './UserPageComponents/UserNavbar';


export default class User extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <UserNavbar />
        <Routes>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="timeLine" element={<TimeLine />}></Route>
          <Route path="channels" element={<Channels />}></Route>
          <Route path="alumniProf" element={<AlumniProfile />}>
            <Route path="exp" element={<Experience />}></Route>
            <Route path="basicInfo" element={<BasicInformation />}></Route>
            <Route path="education" element={<Education />}></Route>
            <Route path="positions" element={<Positions />}></Route>
          </Route>
          <Route path="settings" element={<Settings />}></Route>
          <Route path="alumniProf/settings" element={<Settings />}></Route>
          <Route path="events" element={<Events />}></Route>
        </Routes>
      </>
    )
  }
}
