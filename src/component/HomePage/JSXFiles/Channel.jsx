import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AlumniProfile from './UserPageComponents/AlumniProfile';
import BasicInformation from './UserPageComponents/BasicInformation';
import Channels from './UserPageComponents/Channels';
import Events from './UserPageComponents/Events';
import Profile from './UserPageComponents/Profile';
import Sidebar from './ChannelAdminComponents/Sidebar';
import TimeLine from './ChannelAdminComponents/TimeLine';
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
import NewJob from './ChannelAdminComponents/NewJob';
import JobsTable from './ChannelAdminComponents/JobsTable';
import JobAdminView from './ChannelAdminComponents/JobAdminView';
import JobsApplicants from './ChannelAdminComponents/JobsApplicants';
import JobApplication from './ChannelAdminComponents/JobApplication';
import ChannelAdminNav from './ChannelAdminComponents/ChannelAdminNav';
import ChannelAdminProfile from './ChannelAdminComponents/ChannelAdminProfile';
import Settings from './ChannelAdminComponents/Settings';
import NewEvent from './ChannelAdminComponents/NewEvent';
import EventsList from './ChannelAdminComponents/EventsList';
import NewScholar from './ChannelAdminComponents/NewScholar';
import ScholarshipsTable from './ChannelAdminComponents/ScholarshipsTable';
import ScholarshipEdit from './ChannelAdminComponents/ScholarshipEdit';
import ScholarApplicants from './ChannelAdminComponents/ScholarApplicants';
import ScholarApplication from './ChannelAdminComponents/ScholarApplication';

export default class Channel extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <ChannelAdminNav />
        <Routes>
          <Route path="/" element={<ChannelAdminProfile />}></Route>
          <Route path="profile" element={<ChannelAdminProfile />}></Route>
          <Route path="timeLine" element={<TimeLine />}></Route>
          <Route path="settings" element={<Settings />}></Route>

          {/* JOB RELATED PAGES  */}
          <Route path="newJob" element={<NewJob />}></Route>
          <Route path="jobstable" element={<JobsTable />}></Route>
          <Route path="jobstable/update_job" element={<JobAdminView />}></Route>
          <Route path="jobstable/jobApplicants" element={<JobsApplicants />}></Route>
          <Route path="jobstable/jobApplicants/jopApplication" element={<JobApplication />}></Route>

          <Route path='eventsList' element={<EventsList/>}></Route>
          <Route path="newEvent" element={<NewEvent />}></Route>

          <Route path='newSchoolar' element={<NewScholar/>}></Route>
          <Route path="scholarTable" element={<ScholarshipsTable />}></Route>
          <Route path="scholarTable/update_scholar" element={<ScholarshipEdit />}></Route>
          <Route path="scholarTable/scholarApplicants" element={<ScholarApplicants />}></Route>
          <Route path="scholarTable/scholarApplicants/scholarApplication" element={<ScholarApplication />}></Route>



        </Routes>
      </>
    )
  }
}
