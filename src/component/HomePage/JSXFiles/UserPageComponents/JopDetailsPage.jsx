import React from 'react'
import '../../CSSFiles/UserCss/jobs.css'
import coverApplyPage from '../../../../imgs/cover_apply.png'
import { Fade, Zoom } from 'react-reveal';

export default function JopDetailsPage() {
    return (
        <>
            <div className="outlet ms-auto">
                <Fade>
                    <div className="cover-page-apply-photo">
                        <img src={coverApplyPage} />
                    </div>
                </Fade>
                <div className="container p-4 ">
                    <Fade delay={1500}>
                        <div className="job-apply-title d-flex">
                            <div className="job-apply-title-child w-50 h-100  d-flex align-items-center ">
                                <div>
                                    <h2><b>Lead Quality Control QA</b></h2>
                                    <div className="meta-job-data d-flex justify-content-start text-muted">
                                        <div className="job-type-card d-flex me-4">
                                            <i className="fa-solid fa-briefcase me-1"></i>
                                            <h6>Full Time</h6>
                                        </div>
                                        <div className="job-type-time d-flex">
                                            <i className="fa-solid fa-clock me-1"></i>
                                            <h6>Posted 2 months ago</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="job-apply-title-child d-flex align-items-center justify-content-end  w-100">
                                <button className='job-apply-btn-final'>
                                    Apply Now!
                                </button>
                            </div>
                        </div>
                    </Fade>

                    <div className="job-info-container mb-4">
                        <div className="container personal-info">
                            <Zoom delay={1800}>
                                <h2 className='mb-4'><b><span className='span-style '>Employment </span></b> Information</h2>
                            </Zoom>
                            <div className="row flex-nowrap justify-content-around">
                                <Zoom delay={2000}>
                                    <div className="col-md-3">
                                        <div className="sign-up-field mb-4 d-flex flex-nowrap">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-industry"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="Industry" className="form-label">Industry</label>
                                                <h6 name="Industry"><b>Web Developer</b></h6>
                                            </div>
                                        </div>

                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-dollar-sign"></i>
                                            </div>
                                            <div className="field-form ">
                                                <label for="Salary" className="form-label">Salary</label>
                                                <h6 name="Salary"><b>500</b></h6>
                                            </div>

                                        </div>

                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-briefcase"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="JobType" className="form-label">Job Type</label>
                                                <h6 name="JobType"><b>Full Time</b></h6>


                                            </div>
                                        </div>


                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-location-dot"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="lastNameTextField" className="form-label">Location</label>
                                                <h6 name="studystate"><b>France</b></h6>
                                            </div>
                                        </div>



                                    </div>
                                </Zoom>

                                <Zoom delay={2500}>

                                    <div className="col-md-3">
                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-user-tie"></i>                                        </div>
                                            <div className="field-form ">
                                                <div className="field-form ">
                                                    <label for="Joblevel" className="form-label">
                                                        Job level</label>
                                                    <h6 name="Joblevel"><b>Experienced</b></h6>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-medal"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="lastNameTextField" className="form-label">Experience</label>
                                                <h6 name="phone"><b>
                                                    1-2 Years</b></h6>

                                            </div>
                                        </div>

                                        <div className="sign-up-field mb-4 d-flex">
                                            <div className="icon-form text-center">
                                                <i className="fa-solid fa-clock"></i>                                        </div>
                                            <div className="field-form ">
                                                <label for="Deadline" className="form-label">Deadline</label>
                                                <h6 name="Deadline"><b>30/12/2024</b></h6>
                                            </div>
                                        </div>

                                    </div>
                                </Zoom>

                                <Fade delay={2700}>


                                    <div className="job-address-info b-r col-md-4 text-light  p-3">
                                        <h2><b>Our Location</b></h2>
                                        <ul>
                                            <li>Location: Palestine/Nablus</li>
                                            <li>Street:   Aseera Street</li>
                                            <li>Phone: +970 599836899</li>
                                            <li>Email: ezkukhun2000@gmail.com</li>
                                        </ul>
                                    </div>

                                </Fade>
                            </div>
                        </div>
                    </div>

                    <Fade>
                        <div className="skills container mb-4 ">
                            <h2 className='mb-2 p-3'><b><span className='span-style '>Essential Knowledge, Skills, and Experience</span></b></h2>
                            <ul className='ps-5'>
                                <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                <li>5+ years of industry experience in interactive design and / or visual design</li>
                                <li> Excellent interpersonal skills</li>
                                <li>Aware of trends in mobile, communications, and collaboration</li>
                                <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                <li> History of impacting shipping products with your work</li>
                                <li> A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                                <li>  Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                            </ul>
                        </div>
                    </Fade>

                    <Fade delay={1000}>
                        <div className="skills container mb-4 ">
                            <h2 className='mb-2 p-3'><b><span className='span-style '>Preferred Experience</span></b></h2>
                            <ul className='ps-5'>
                                <li>Designing user experiences for enterprise software / services</li>
                                <li>Creating and applying established design principles and interaction patterns</li>
                                <li>Aligning or influencing design thinking with teams working in other geographies</li>

                            </ul>
                        </div>
                    </Fade>
                </div>
            </div>

        </>
    )
}
