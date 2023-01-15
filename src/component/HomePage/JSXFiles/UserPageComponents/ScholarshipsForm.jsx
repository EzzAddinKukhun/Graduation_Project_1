import React from 'react';
import '../../CSSFiles/UserCss/Scholar.css'
import test1 from '../../../../imgs/OIP.jpg'
import { Fade } from 'react-reveal';
import { Zoom } from 'react-reveal';
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

                <Zoom delay={500}>
                    <div className="container">
                        <div className="skills container mb-4 ">
                            <div className='d-flex justify-content-between'>

                                <h2 className='mb-2 p-3'><b><span className='span-style '>Overview</span></b></h2>
                                <button className='job-apply-btn mt-3'>
                                    Apply Now!
                                </button>

                            </div>
                            <p id="aboutPara">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores blanditiis vero cum aperiam ea, totam similique quis distinctio! Repudiandae commodi modi ullam voluptatibus aut quia asperiores eveniet, dicta eum repellat doloribus officia! Non atque pariatur alias error illo eaque, doloribus voluptate provident placeat natus eligendi. Ut enim soluta quos earum voluptatum, debitis doloremque. Dolores ducimus cumque quisquam odio quod veritatis, odit vero cupiditate enim, error quas quasi ipsa dolorum veniam consequatur beatae expedita ullam quos velit? Beatae molestiae totam itaque excepturi tenetur accusantium vero repellendus, sunt, nihil aliquam quibusdam voluptas earum omnis! Enim, ratione. Aspernatur iusto alias laboriosam nostrum perspiciatis.
                            </p>
                        </div>
                    </div>
                </Zoom>

                <Zoom delay={1000}>
                    <div className="container">
                        <div className="skills container mb-4 ">
                            <h2 className='mb-2 p-3'><b><span className='span-style '>Mission</span></b></h2>
                            <ol className='ms-4'>
                                <li>The Student must have GPA at least 2.5 over 4</li>
                                <li>Applicant must be a student from Faculty of Engineering & IT </li>
                                <li>Student must be from Computer Engineering or Computer Science or CAP</li>
                                <li>Student must have a Tofel certificate in English</li>
                                <li>Student mustn't have benefits from other scholarships</li>
                            </ol>
                        </div>

                    </div>
                </Zoom>
            </div>





        </>
    )
}
