import React from 'react'
import Navbar from './HomePageComponents/Navbar'
import Header from './HomePageComponents/Header'
import Services from './HomePageComponents/Services'
import Activites from './HomePageComponents/Activites'
import Reach from './HomePageComponents/Reach'
import Success from './HomePageComponents/Success'
import Portfolio from './HomePageComponents/Portfolio'
import Footer from './Footer'
import Scroll from './Scroll'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

export default function Home() {
  return (

    
    <>
      <Header />
      <Services />
      <Activites />
      <Reach />
      <Success />
      <Portfolio />
      <Footer />
      <Scroll />
    </>
  )
}
