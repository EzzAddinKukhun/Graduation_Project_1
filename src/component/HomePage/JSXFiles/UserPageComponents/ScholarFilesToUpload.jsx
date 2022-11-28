import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


export default function ScholarFilesToUpload() {
    return (
        <>
            <div className="outlet w-100 " >
                <Fade delay={200}>
                    <div className="container">
                        <div className="skills  container mb-4 ">
                            <h2 className='mb-2 p-3'><b><span className='span-style '>Files To Upload</span></b></h2>
                            <div className="Files">
                                <Zoom left delay={200}>
                                    <div className="upload-new-photo p-4 w-100 h-25 mb-3 d-flex align-items-center">
                                        {/* <img className='me-4' src={Profile}></img> */}
                                        <div className="upp">
                                            <h2><b>Upload Your ID Card Photo</b></h2>
                                            <h6 className='text-muted'>profile.jpg</h6>
                                        </div>
                                        <button className="upload-btn ms-auto">
                                            <div>
                                                <i class="fa-solid fa-cloud-arrow-up"></i> Upload
                                            </div>
                                            <input type="file"></input>

                                        </button>

                                    </div>
                                </Zoom>

                                <Zoom right delay={600}>
                                    <div className="upload-new-photo p-4 w-100 h-25 mb-3 d-flex align-items-center">
                                        {/* <img className='me-4' src={Profile}></img> */}
                                        <div className="upp">
                                            <h2><b>Upload Your Personal Photo</b></h2>
                                            <h6 className='text-muted'>profile.jpg</h6>
                                        </div>
                                        <button className="upload-btn ms-auto">
                                            <div>
                                                <i class="fa-solid fa-cloud-arrow-up"></i> Upload
                                            </div>
                                            <input type="file"></input>

                                        </button>

                                    </div>
                                </Zoom>

                                <Zoom left delay={1000}>
                                    <div className="upload-new-photo p-4 w-100 h-25 mb-3 d-flex align-items-center">
                                        {/* <img className='me-4' src={Profile}></img> */}
                                        <div className="upp">
                                            <h2><b>Upload Photo Of Your Passport</b></h2>
                                            <h6 className='text-muted'>profile.jpg</h6>
                                        </div>
                                        <button className="upload-btn ms-auto">
                                            <div>
                                                <i class="fa-solid fa-cloud-arrow-up"></i> Upload
                                            </div>
                                            <input type="file"></input>

                                        </button>

                                    </div>
                                </Zoom>

                                <Zoom left delay={400}>
                                    <div className="upload-new-photo p-4 w-100 h-25 mb-3 d-flex align-items-center">
                                        {/* <img className='me-4' src={Profile}></img> */}
                                        <div className="upp">
                                            <h2><b>Upload Photo Your University Marks</b></h2>
                                            <h6 className='text-muted'>profile.jpg</h6>
                                        </div>
                                        <button className="upload-btn ms-auto">
                                            <div>
                                                <i class="fa-solid fa-cloud-arrow-up"></i> Upload
                                            </div>
                                            <input type="file"></input>

                                        </button>

                                    </div>
                                </Zoom>

                            </div>
                        </div>

                        <div className='next-btn-overview d-flex justify-content-between'>
                            <Link to="../ScholarReq">Previous</Link>
                            <Link to="">Next</Link>

                        </div>

                    </div>
                </Fade>
            </div>
        </>
    )
}
