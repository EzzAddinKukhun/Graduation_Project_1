import React from 'react'
import { Fade } from 'react-reveal';
import { Zoom } from 'react-reveal';
import coverApplyPage from '../../../../imgs/cover_apply.png';
import Combobox from "react-widgets/Combobox";
import Scroll from '../Scroll'


export default function JobAdminView() {
    const a = [];
    return (
        <>
            <div className="outlet ms-auto">
                <Fade>
                    <div className="cover-page-apply-photo">
                        <img src={coverApplyPage} />
                    </div>
                </Fade>
                <div className="container p-4 personal-container">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h2>Employment <span className='span-style'><b>Information</b></span></h2>
                        </div>
                        <div>
                            <button className='job-apply-btn'>
                                Save Edit
                            </button>
                        </div>
                    </div>
                    
                    <div className="job-info-container mb-4">
                        <div className=" container pt-4">
                            <div className="row">
                                <div class="form-group mb-3 col-md-6 d-flex">
                                    <div className='me-3 job-symbol'>
                                        <i class="fa-solid fa-font"></i>
                                    </div>
                                    <div className='w-100'>
                                        <label className='mb-2' for="firstNameEdit">Job Name</label>
                                        <input type="text" class="form-control" id="city"
                                            placeholder="Job Name" />
                                    </div>
                                </div>

                                <div class="form-group mb-3 col-md-6 d-flex">
                                    <div className='me-3 job-symbol'>
                                        <i className="fa-solid fa-industry"></i>
                                    </div>
                                    <div className='w-100'>
                                        <label className='mb-2' for="firstNameEdit">Industry</label>
                                        <input type="text" class="form-control" id="city" aria-describedby="emailHelp"
                                            placeholder="Industry" />
                                    </div>

                                </div>
                                <div class="form-group mb-3 col-md-6 d-flex">
                                    <div className='me-3 job-symbol'>
                                        <i className="fa-solid fa-user-tie"></i>
                                    </div>
                                    <div className='w-100'>
                                        <label className='mb-2' for="firstNameEdit">Job Level</label>
                                        <input type="text" class="form-control" id="city" aria-describedby="emailHelp"
                                            placeholder="Job Level" />
                                    </div>

                                </div>
                                <div class="form-group mb-3 col-md-6 d-flex">
                                    <div className='me-3 job-symbol'>
                                        <i class="fa-solid fa-dollar-sign"></i>
                                    </div>
                                    <div className='w-100'>
                                        <label className='mb-2' for="firstNameEdit">Salary</label>
                                        <input type="text" class="form-control" id="city"
                                            placeholder="Salary" />
                                    </div>

                                </div>
                                <div class="form-group mb-3 col-md-6 d-flex">
                                    <div className='me-3 job-symbol'>
                                        <i className="fa-solid fa-medal"></i>
                                    </div>
                                    <div className='w-100'>
                                        <label className='mb-2' for="firstNameEdit">Experience</label>
                                        <input type="text" class="form-control" id="city" aria-describedby="emailHelp"
                                            placeholder="Experience" />
                                    </div>

                                </div>
                                <div class="form-group mb-3 col-md-6 d-flex">
                                    <div className='me-3 job-symbol'>
                                        <i className="fa-solid fa-briefcase"></i>
                                    </div>
                                    <div className='w-100'>
                                        <label className='mb-2' for="firstNameEdit">Job Type</label>
                                        <Combobox defaultValue="Full Time" data={["Full Time", "Part Time", "Volunteer", "Freelance", "Internship"]} />

                                    </div>

                                </div>
                                <div class="form-group mb-3 col-md-6 d-flex">
                                    <div className='me-3 job-symbol'>
                                        <i class="fa-solid fa-calendar-days"></i>
                                    </div>
                                    <div className='w-100'>
                                        <label className='mb-2' for="firstNameEdit">Post Date</label>
                                        <input type="date" class="form-control" id="city"
                                        />
                                    </div>

                                </div>
                                <div class="form-group mb-3 col-md-6 d-flex">
                                    <div className='me-3 job-symbol'>
                                        <i class="fa-solid fa-calendar-days"></i>
                                    </div>
                                    <div className='w-100'>
                                        <label className='mb-2' for="firstNameEdit">Deadline</label>
                                        <input type="date" class="form-control" placeholder="City" />
                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>

                    <div className="job-info-part-2">
                        <h2>Job <span className='span-style'><b>Overview</b></span></h2>
                        <div className=" container pt-3">
                            <div className="row">
                                <div class="mb-3">
                                    <textarea rows="6" type="email" placeholder='Write an over view about this job..' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="job-info-part-3">
                        <h2><span className='span-style'><b>Essential Knowledge, Skills, and Experience</b></span></h2>
                        <div className=" container pt-3">
                            <div className="row">
                                <div className="add-skill-for-job d-flex">
                                    <div class="mb-3 w-100">
                                        <textarea rows="6" type="text" placeholder='Edit Essential Knowledge, Skills, and Experience..' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="job-info-part-4">
                        <h2><span className='span-style'><b>Preferred Experience</b></span></h2>
                        <div className=" container pt-3">
                            <div className="row">
                                <div className="add-skill-for-job d-flex">
                                    <div class="mb-3 w-100">
                                        <textarea rows="6" type="text" placeholder='Edit Preferred Experience..' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Scroll />
        </>
    )
}
