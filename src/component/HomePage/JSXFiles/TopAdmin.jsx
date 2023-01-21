import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './TopAdminComp/Navbar';
import Sidebar from './TopAdminComp/Sidebar';
import Statistics from './TopAdminComp/Statistics';
import RegisteredChannels from './TopAdminComp/RegisteredChannels';
import ChannelTemplatePage from './TopAdminComp/ChannelTemplatePage';
import RegisteredMember from './TopAdminComp/RegisteredMember';
import MemTemplatePage from './TopAdminComp/MemTemplatePage';
import RegisteredUniversities from './TopAdminComp/RegisteredUniversities';
import UniTemplatePage from './TopAdminComp/UniTemplatePage';
import SignUpOrg from './TopAdminComp/SignUpOrg';
import SignUpMem from './TopAdminComp/SignUpMem';
import SignUpUni from './TopAdminComp/SignUpUni';


export default function TopAdmin() {
    return (
        <>
            <Sidebar />
            {/* <Navbar /> */}
            <Routes>
                <Route path='statistics' element={<Statistics />} ></Route>
                <Route path='channelsPage' element={<RegisteredChannels />} ></Route>
                <Route path='channelsPage/channelTemplatePage' element={<ChannelTemplatePage />} ></Route>
                <Route path='memsPage' element={<RegisteredMember />} ></Route>
                <Route path='memsPage/memTemplatePage' element={<MemTemplatePage />} ></Route>
                <Route path='unisPage' element={<RegisteredUniversities />} ></Route>
                <Route path='unisPage/unisTemplatePage' element={<UniTemplatePage />} ></Route>
                <Route path='signupMem' element={<SignUpMem />}></Route>
                <Route path='signupOrg' element={<SignUpOrg />}></Route>
                <Route path='signupuni' element={<SignUpUni />}></Route>
            </Routes>
        </>
    )
}
