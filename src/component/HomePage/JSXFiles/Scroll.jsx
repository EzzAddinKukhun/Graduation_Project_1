import React, { Component } from 'react';
import '../CSSFiles/scroll.css';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';



export default function Scroll() {
    const displayScrollBtn = () =>{

        if (window.scrollY >= 200){
            // setDisBtn(true); 
            document.getElementById("scrlBtn").style.display = "block"; 
        } 
        else{
            // setDisBtn(false); 
            document.getElementById("scrlBtn").style.display = "none"; 

        }
      }
    
      window.addEventListener('scroll', displayScrollBtn); 
    return (
        <>
            <Fade>
                <button  id="scrlBtn" className='scroll-btn'
                   
                    onClick={
                        function () {
                            window.scrollTo({
                                top:0,
                                behavior:'smooth'
                            })

                        }
                    }><i class="fa-solid fa-angles-up"></i></button>
            </Fade>
        </>
    )
}
