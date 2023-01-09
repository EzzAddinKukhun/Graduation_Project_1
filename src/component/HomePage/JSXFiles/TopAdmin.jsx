import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './TopAdminComp/Navbar';
import Sidebar from './TopAdminComp/Sidebar';
import Statistics from './TopAdminComp/Statistics';
import RegisteredChannels from './TopAdminComp/RegisteredChannels';
import ChannelTemplatePage from './TopAdminComp/ChannelTemplatePage';



export default function TopAdmin() {
    return (
        <>
            <Sidebar />
            <Navbar />
            <Routes>
                <Route path='statistics' element={<Statistics />} ></Route>
                <Route path='channelsPage' element={<RegisteredChannels />} ></Route>
                <Route path='channelsPage/channelTemplatePage' element={<ChannelTemplatePage />} ></Route>
            </Routes>
        </>
    )
}
