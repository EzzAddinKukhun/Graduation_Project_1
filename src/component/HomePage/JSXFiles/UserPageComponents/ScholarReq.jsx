import React from 'react'; 
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade'

export default function ScholarReq() {
  return (
    <>
      <div className="outlet w-100 " >
      <Fade delay={200}>
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
          <div className='next-btn-overview d-flex justify-content-between'>
            <Link to="../">Previous</Link>
            <Link to="../ScholarFilesToUpload">Next</Link>
          </div>

        </div>
        </Fade>
      </div>
    </>
  )
}
