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
import HistEvents from './UserPageComponents/HistEvents';
import NewEvents from './UserPageComponents/NewEvents';
import Scholarships from './UserPageComponents/Scholarships';
import ScholarshipsForm from './UserPageComponents/ScholarshipsForm';
import ScholarOverview from './UserPageComponents/ScholarOverview';
import ScholarReq from './UserPageComponents/ScholarReq';
import ScholarFilesToUpload from './UserPageComponents/ScholarFilesToUpload';
import Jobs from './UserPageComponents/Jobs';
import JopDetailsPage from './UserPageComponents/JopDetailsPage';
import MemberShips from './UserPageComponents/MemberShips';
import ChannelViewProfile from './UserPageComponents/ChannelViewProfile';
import MembershipsViewProfile from './UserPageComponents/MembershipsViewProfile';

export default class User extends Component {
  render() {
    return (
      <>
        {console.log(this.props.id)}
        <Sidebar />
        <UserNavbar />
        <Routes>
          <Route path="/" element={<TimeLine />}></Route>
          <Route path="timeLine" element={<TimeLine />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="alumniProf" element={<AlumniProfile />} ></Route>
          </Route>
          <Route path="channels" element={<Channels />}>
          </Route>
          <Route path="channels/channel" element={<ChannelViewProfile />}></Route>

          <Route path="scholars" element={<Scholarships />}></Route>

          <Route path="" element={<ScholarshipsForm />} >
            <Route path="scholars/scholarsForm" element={<ScholarOverview />} ></Route>
          </Route>

          {/* {THIS IS THE USER JSX} */}

          <Route path="alumniProf" element={<AlumniProfile />}></Route>
          <Route path="mem" element={<MemberShips />}></Route>
          <Route path="mem/memprofile" element={<MembershipsViewProfile />}></Route>
          <Route path="alumniProf" element={<AlumniProfile />}>
            {/* <Route path="" element={<BasicInformation />}></Route> */}
            <Route path="exp" element={<Experience />}></Route>
            <Route path="basicInfo" element={<BasicInformation />}></Route>
            <Route path="education" element={<Education />}></Route>
            <Route path="positions" element={<Positions />}></Route>
          </Route>

          <Route path="settings" element={<Settings />}></Route>
          <Route path="jobs" element={<Jobs />}></Route>
          <Route path="jobs/job_apply_page" element={<JopDetailsPage />}></Route>

          <Route path="alumniProf/settings" element={<Settings />}></Route>
          <Route path="events" element={<Events />}>
            <Route path="" element={<NewEvents />}></Route>
            <Route path="HistEvents" element={<HistEvents />}></Route>
            <Route path="NewEvents" element={<NewEvents />}></Route>
          </Route>
        </Routes>
      </>
    )
  }
}
