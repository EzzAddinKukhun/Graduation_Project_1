import React, { Component } from 'react';
import Home from './component/HomePage/JSXFiles/Home';
import About from './component/HomePage/JSXFiles/About';
import Navbar from './component/HomePage/JSXFiles/HomePageComponents/Navbar';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/HomePage/JSXFiles/Contact';
import SignUp from './component/HomePage/JSXFiles/SignUp';
import User from './component/HomePage/JSXFiles/User';
import Settings from './component/HomePage/JSXFiles/UserPageComponents/Settings';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='signup' element={<SignUp />}></Route>
        </Routes>
      </>
    )
  }
}
