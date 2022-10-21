import React from 'react';
import '../../CSSFiles/Header.css';
import im1 from '../../../../imgs/pane4.jpg'
import im3 from '../../../../imgs/pane2.jpg'
import im2 from '../../../../imgs/pane3.png'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';






export default function Header() {
    let [slide,setNumberSlide] = useState(0); 
    return (
        <>
            <div className="header">
                <Fade>
                    <div id="pane_0" className="pane-1 ">
                        <img className='img-pane' src={im1}></img>
                        <div id="pc1" className="pane-caption">
                            <Fade cascade delay={300}><span>We never</span></Fade> <b className=''><Fade cascade top delay={700}><span>Dreamed</span></Fade></b><br></br>
                            <Fade cascade delay={1200}><span>about</span></Fade> <b><Fade top cascade delay={1600}><span>Success, </span></Fade></b><br></br>
                            <Fade cascade delay={1900}><span>We</span></Fade> <b><Fade top cascade delay={2300}><span>Worked</span></Fade></b> <Fade cascade delay={2600}><span>for it.</span></Fade><br></br>
                            <Fade  top delay={3000}>
                                <button className='read-more-btn'>Read More &nbsp;
                                    <i class="fa-solid fa-angle-right"></i>
                                </button>
                            </Fade>
                        </div>
                    </div>

                    <div id="pane_1" className="pane-2  ">
                        <img className='img-pane' src={im2}></img>
                        <div id="pc2" className="pane-caption">
                            <Fade cascade delay={300}><span className='span-style'>Always</span></Fade> <b className=''><Fade cascade top delay={700}><span className='span-style'>Dreamed</span></Fade></b><br></br>
                            <b><Fade cascade delay={1000}><span className='span-style-2'>More</span></Fade></b> <Fade top cascade delay={1300}><span className='span-style-2'>than </span></Fade><b><Fade cascade delay={1600}><span className='span-style-2'>expected.</span></Fade></b><br></br>
                            <Fade  top delay={2000}>
                                <button className='read-more-btn'>Read More &nbsp;
                                    <i class="fa-solid fa-angle-right"></i>
                                </button>
                            </Fade>
                        </div>

                    </div>

                    <div id="pane_2" className="pane-3 ">
                        <img className='img-pane' src={im3}></img>
                        <div id="pc3" className="pane-caption">
                            <Fade cascade delay={300}><span className='span-style'>Expert</span></Fade> <b className=''><Fade cascade top delay={700}><span className='span-style'>in</span></Fade></b><br></br>
                            <b><Fade cascade delay={1000}><span className='span-style-2'>Business</span></Fade></b> <Fade top cascade delay={1300}><span className='span-style-2'>Advice </span></Fade><br></br>
                            <Fade  top delay={2000}>
                                <button className='read-more-btn'>Read More &nbsp;
                                    <i class="fa-solid fa-angle-right"></i>
                                </button>
                            </Fade>
                        </div>

                    </div>
                </Fade>

                <button
                onClick={function(){
                    let p0 = document.getElementById("pane_0"); 
                    let p1 = document.getElementById("pane_1"); 
                    let p2 = document.getElementById("pane_2"); 

                    if (slide == 0){
                        setNumberSlide(2); 
                        p0.style.display = "none"; 
                        p1.style.display = "none"; 
                        p2.style.display = "block"; 
                    }
                    else if (slide == 1){
                        setNumberSlide(0); 
                        p0.style.display = "block"; 
                        p1.style.display = "none"; 
                        p2.style.display = "none"; 
                    }
                    else if (slide == 2){
                        setNumberSlide(1); 
                        p0.style.display = "none"; 
                        p1.style.display = "block"; 
                        p2.style.display = "none"; 
                    } 

                }}
                id="l_btn" className='button-slider'>
                    <i className="fa-solid fa-angle-left"></i>
                </button>

                <button
                onClick={function(){
                    let p0 = document.getElementById("pane_0"); 
                    let p1 = document.getElementById("pane_1"); 
                    let p2 = document.getElementById("pane_2"); 

                    if (slide == 0){
                        setNumberSlide(1); 
                        p0.style.display = "none"; 
                        p1.style.display = "block"; 
                        p2.style.display = "none"; 
                    }
                    else if (slide == 1){
                        setNumberSlide(2); 
                        p0.style.display = "none"; 
                        p1.style.display = "none"; 
                        p2.style.display = "block"; 
                    }
                    else if (slide == 2){
                        setNumberSlide(0); 
                        p0.style.display = "block"; 
                        p1.style.display = "none"; 
                        p2.style.display = "none"; 
                    } 

                }}
                id="r_btn" className='button-slider'>
                    <i className="fa-solid fa-angle-right"></i>
                </button>

            </div>

            {/* <div className="test">

            </div> */}

        </>
    )
}
