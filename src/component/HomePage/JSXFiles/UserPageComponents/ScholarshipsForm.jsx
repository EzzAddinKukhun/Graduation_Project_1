import React from 'react';
import '../../CSSFiles/UserCss/Scholar.css'
import test1 from '../../../../imgs/OIP.jpg'
import { Fade } from 'react-reveal';
import { Outlet } from 'react-router-dom';

export default function ScholarshipsForm() {
    return (
        <>
            <div className="outlet ms-auto">

                <Fade>
                    <div className="header-scholar d-flex justify-content-center align-items-center position-relative">
                        <Fade delay={700}>
                            <div className="bookname text-light text-center">
                                <h6 id="Scholar_name" className='bookname text-center mb-2'><b>Future Engineers For Scholarships</b></h6>
                                <h6 id="scholar_fund">An-Najah National University</h6>
                            </div>
                        </Fade>
                        <div className="overlay-div"></div>
                    </div>
                </Fade>

                <div className='position-relative'>
                  <Outlet/>
                </div>

            </div>




        </>
    )
}
