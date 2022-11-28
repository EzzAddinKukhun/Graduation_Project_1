import React from 'react'
import '../../CSSFiles/UserCss/channels.css';
import cover from '../../../../imgs/cover.jpg';
import ch2 from '../../../../imgs/Ch2.jpeg';
import ch3 from '../../../../imgs/ch3.jpg';
import ch4 from '../../../../imgs/ch4.jpg';
import ch5 from '../../../../imgs/ch5.jpg';
import ch6 from '../../../../imgs/ch6.jpg';
import ch7 from '../../../../imgs/ch7.jpg';
import ch8 from '../../../../imgs/ch8.jpg';
import ch9 from '../../../../imgs/ch9.jpg';
import ch10 from '../../../../imgs/ch10.jpg';
import Profile from '../../../../imgs/profile.jpg';
import ML from '../../../../imgs/ML.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import swal from 'sweetalert';



export default function Channels() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    // slidesToShow: 3,
    // speed: 500
  };
  return (
    <>
      <div className="outlet ms-auto">
        {/* GENERATE YOUR CHANNELS */}

        <div className='your-channel mb-4'>
          <div className='ps-4'>
            <h2>Your <span className='span-style'><b>Channels</b></span></h2>
          </div>
          <div className="search-field-channels search-field ms-3 mb-3  w-50  me-5 ">
            <input placeholder='Search Inside Your Channels.. ' className='search-text-field h-100 me-2' type="text"></input>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='d-flex  justify-content-center align-items-center'>
            <div className="container-slider ">
              <Slider {...settings}>
                <div className="card-container">
                  <div className='card-channels'>
                    <div className="card-cover-photo">
                      <img src={ML}></img>
                      <div className="overlayy"></div>
                      <div className="channel-desc-card">
                        <h5><b>Machine Learning</b></h5>
                        <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                        <h6 className='card-numb-followers'>1.2K Followers</h6>
                      </div>

                      <div className="card-choices d-flex">
                        <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                          <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                        </section>
                        <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                          <button onClick={function(){
                            swal({
                              title: "Are you sure that you will unfollow this channel?",
                              icon: "warning",
                              buttons: true,
                              dangerMode: true,
                            })
                            .then((willDelete) => {
                              if (willDelete) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                  icon: "success",
                                });
                              } else {
                                swal("Your imaginary file is safe!");
                              }
                            });
                          }} className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-container">
                  <div className='card-channels'>
                    <div className="card-cover-photo">
                      <img src={ch2}></img>
                      <div className="overlayy"></div>
                      <div className="channel-desc-card">
                        <h5><b>Smart Vision</b></h5>
                        <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                        <h6 className='card-numb-followers'>10.4K Followers</h6>
                      </div>

                      <div className="card-choices d-flex">
                        <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                          <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                        </section>
                        <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                          <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-container">
                  <div className='card-channels'>
                    <div className="card-cover-photo">
                      <img src={ch3}></img>
                      <div className="overlayy"></div>
                      <div className="channel-desc-card">
                        <h5><b>AI Interns</b></h5>
                        <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                        <h6 className='card-numb-followers'>1.2M Followers</h6>
                      </div>

                      <div className="card-choices d-flex">
                        <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                          <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                        </section>
                        <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                          <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-container">
                  <div className='card-channels'>
                    <div className="card-cover-photo">
                      <img src={ch4}></img>
                      <div className="overlayy"></div>
                      <div className="channel-desc-card">
                        <h5><b>Connection Skills</b></h5>
                        <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                        <h6 className='card-numb-followers'>10.4K Followers</h6>
                      </div>

                      <div className="card-choices d-flex">
                        <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                          <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                        </section>
                        <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                          <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-container">
                  <div className='card-channels'>
                    <div className="card-cover-photo">
                      <img src={ch9}></img>
                      <div className="overlayy"></div>
                      <div className="channel-desc-card">
                        <h5><b>Embedded Systems</b></h5>
                        <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                        <h6 className='card-numb-followers'>10.4K Followers</h6>
                      </div>

                      <div className="card-choices d-flex">
                        <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                          <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                        </section>
                        <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                          <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-container">
                  <div className='card-channels'>
                    <div className="card-cover-photo">
                      <img src={ch10}></img>
                      <div className="overlayy"></div>
                      <div className="channel-desc-card">
                        <h5><b>Robotics Interests</b></h5>
                        <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                        <h6 className='card-numb-followers'>11.2K Followers</h6>
                      </div>

                      <div className="card-choices d-flex">
                        <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                          <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                        </section>
                        <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                          <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-container">
                  <div className='card-channels'>
                    <div className="card-cover-photo">
                      <img src={ch8}></img>
                      <div className="overlayy"></div>
                      <div className="channel-desc-card">
                        <h5><b>Artificial Intelligence</b></h5>
                        <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                        <h6 className='card-numb-followers'>10.4K Followers</h6>
                      </div>

                      <div className="card-choices d-flex">
                        <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                          <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                        </section>
                        <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                          <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-container">
                  <div className='card-channels'>
                    <div className="card-cover-photo">
                      <img src={ch7}></img>
                      <div className="overlayy"></div>
                      <div className="channel-desc-card">
                        <h5><b>Consultants</b></h5>
                        <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                        <h6 className='card-numb-followers'>10.4K Followers</h6>
                      </div>

                      <div className="card-choices d-flex">
                        <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                          <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                        </section>
                        <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                          <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-container">
                  <div className='card-channels'>
                    <div className="card-cover-photo">
                      <img src={ch6}></img>
                      <div className="overlayy"></div>
                      <div className="channel-desc-card">
                        <h5><b>Creative Group</b></h5>
                        <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                        <h6 className='card-numb-followers'>10.4K Followers</h6>
                      </div>

                      <div className="card-choices d-flex">
                        <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                          <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                        </section>
                        <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                          <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>




              </Slider>
            </div>
          </div>
        </div>


        {/* GENERATE RECOMMENDED CHANNELS */}
        <div className="recommended-channel">
          <div className='your-channel mb-4'>
            <div className='ps-4'>
              <h2>Recommended <span className='span-style'><b>Channels</b></span></h2>
            </div>

            <div className='d-flex  justify-content-center align-items-center'>
              <div className="container-slider ">
                <Slider {...settings}>
                  <div className="card-container">
                    <div className='card-channels'>
                      <div className="card-cover-photo">
                        <img src={ch4}></img>
                        <div className="overlayy"></div>
                        <div className="channel-desc-card">
                          <h5><b>Connection Skills</b></h5>
                          <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                          <h6 className='card-numb-followers'>10.4K Followers</h6>
                        </div>

                        <div className="card-choices d-flex">
                          <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                            <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                          </section>
                          <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                            <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                          </section>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card-container">
                    <div className='card-channels'>
                      <div className="card-cover-photo">
                        <img src={ch9}></img>
                        <div className="overlayy"></div>
                        <div className="channel-desc-card">
                          <h5><b>Embedded Systems</b></h5>
                          <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                          <h6 className='card-numb-followers'>10.4K Followers</h6>
                        </div>

                        <div className="card-choices d-flex">
                          <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                            <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                          </section>
                          <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                            <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                          </section>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card-container">
                    <div className='card-channels'>
                      <div className="card-cover-photo">
                        <img src={ch10}></img>
                        <div className="overlayy"></div>
                        <div className="channel-desc-card">
                          <h5><b>Robotics Interests</b></h5>
                          <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                          <h6 className='card-numb-followers'>11.2K Followers</h6>
                        </div>

                        <div className="card-choices d-flex">
                          <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                            <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                          </section>
                          <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                            <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                          </section>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card-container">
                    <div className='card-channels'>
                      <div className="card-cover-photo">
                        <img src={ch8}></img>
                        <div className="overlayy"></div>
                        <div className="channel-desc-card">
                          <h5><b>Artificial Intelligence</b></h5>
                          <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                          <h6 className='card-numb-followers'>10.4K Followers</h6>
                        </div>

                        <div className="card-choices d-flex">
                          <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                            <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                          </section>
                          <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                            <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                          </section>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="card-container">
                    <div className='card-channels'>
                      <div className="card-cover-photo">
                        <img src={ML}></img>
                        <div className="overlayy"></div>
                        <div className="channel-desc-card">
                          <h5><b>Machine Learning</b></h5>
                          <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                          <h6 className='card-numb-followers'>1.2K Followers</h6>
                        </div>

                        <div className="card-choices d-flex">
                          <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                            <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                          </section>
                          <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                            <button className='bg-success'><i class="fa-solid fa-user-plus"></i>&nbsp; Follow</button>
                          </section>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card-container">
                    <div className='card-channels'>
                      <div className="card-cover-photo">
                        <img src={ch2}></img>
                        <div className="overlayy"></div>
                        <div className="channel-desc-card">
                          <h5><b>Smart Vision</b></h5>
                          <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                          <h6 className='card-numb-followers'>10.4K Followers</h6>
                        </div>

                        <div className="card-choices d-flex">
                          <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                            <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                          </section>
                          <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                            <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                          </section>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card-container">
                    <div className='card-channels'>
                      <div className="card-cover-photo">
                        <img src={ch3}></img>
                        <div className="overlayy"></div>
                        <div className="channel-desc-card">
                          <h5><b>AI Interns</b></h5>
                          <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                          <h6 className='card-numb-followers'>1.2M Followers</h6>
                        </div>

                        <div className="card-choices d-flex">
                          <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                            <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                          </section>
                          <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                            <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                          </section>
                        </div>
                      </div>

                    </div>
                  </div>



                  <div className="card-container">
                    <div className='card-channels'>
                      <div className="card-cover-photo">
                        <img src={ch7}></img>
                        <div className="overlayy"></div>
                        <div className="channel-desc-card">
                          <h5><b>Consultants</b></h5>
                          <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                          <h6 className='card-numb-followers'>10.4K Followers</h6>
                        </div>

                        <div className="card-choices d-flex">
                          <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                            <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                          </section>
                          <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                            <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                          </section>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card-container">
                    <div className='card-channels'>
                      <div className="card-cover-photo">
                        <img src={ch6}></img>
                        <div className="overlayy"></div>
                        <div className="channel-desc-card">
                          <h5><b>Creative Group</b></h5>
                          <h6 className='card-exp'>Mohammad Ahmad, As'ad saeed</h6>
                          <h6 className='card-numb-followers'>10.4K Followers</h6>
                        </div>

                        <div className="card-choices d-flex">
                          <section className='message-btn w-50 d-flex align-items-center justify-content-center'>
                            <button><i class="fa-regular fa-envelope"></i>&nbsp; Message</button>
                          </section>
                          <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                            <button className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                          </section>
                        </div>
                      </div>

                    </div>
                  </div>




                </Slider>
              </div>
            </div>
          </div>
        </div>




      </div>

    </>
  )
}
