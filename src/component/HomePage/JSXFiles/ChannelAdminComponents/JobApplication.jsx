import React from 'react'
import Profile from '../../../../imgs/profile.jpg';

export default function JobApplication() {
    return (
        <>
            <div className="outlet ms-auto">
                <h2 className='text-center mt-4'><b><span className='span-style'>Job Application Form</span></b></h2>
                <div className="job-application-container">
                    <div className="upload-new-photo p-4 w-100 h-25 mb-3 d-flex align-items-center">
                        {/* <img src={`data:video/mp4;base64,${mediaFile}`} alt="" /> */}
                        <img className='me-4' src={Profile}></img>
                        <div className="upp">
                            <h2><b>Ezz Addin H. Kukhun</b></h2>
                            <h5 className='text-muted'>Frontend Developer</h5>
                        </div>
                        <button className='downloadCV'>
                            <i class="fa-solid fa-download"></i> CV
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
