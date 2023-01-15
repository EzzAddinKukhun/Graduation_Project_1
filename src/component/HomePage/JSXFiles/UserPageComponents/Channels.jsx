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
import { useNavigate } from 'react-router-dom';



export default function Channels() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // className: "center",
    // centerMode: true,
    infinite: false,
    // centerPadding: "60px",
    // slidesToShow: 3,
    // speed: 500
  };

  const navigator = useNavigate();


  const [userChannels, setUserChannels] = useState([]);
  const [recommendedChannels, setRecommendedChannels] = useState([]);
  let [userId, setUserId] = useState("");
  const [token, setToken] = useState("");


  function navigateToChannelProfile(channelId) {
    navigator(
      {
        pathname: 'channel',
        search: `?id=${channelId}`
      }
    );
  }




  async function getUserChannels(id) {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getUserChannels/${id}`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setUserChannels(json.org);
        console.log(json.events)
      });
  }

  async function getRecommendedChannels(id) {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getUserRecommendedChannels/${id}`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        setRecommendedChannels(json.org);
      });
  }


  function renderUserChannels() {
    return(
      userChannels.filter((channel) => 
        channel.channelName.toLowerCase().includes(token)).map((channel)=>{
        return (<div className="card-container">
          <div className='card-channels'>
            <div className="card-cover-photo">
              <img src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationCoverPic/${channel.orgId}`}  ></img>
              <div className="overlayy"></div>
              <div className="channel-desc-card">
                <h5><b>{channel.channelName}</b></h5>
                <h6 className='card-exp'>{channel.expertName}</h6>
                <h6 className='card-numb-followers'>{channel.category}</h6>
              </div>

              <div className="card-choices d-flex justify-content-center">
                <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                  <button style={{ backgroundColor: "#5e55e8" }} onClick={function () {
                    navigateToChannelProfile(channel.orgId)
                  }} className='bg-primary'><i class="fa-solid fa-address-card"></i>&nbsp; Profile</button>
                </section>
                <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                  <button onClick={

                    async function () {

                      let _id = userId;
                      let channelId = channel.orgId;

                      let data = {
                        _id,
                        channelId
                      }

                      await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/unfollowChannel`, {
                        method: 'PUT',
                        body: JSON.stringify(data),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8"
                        }
                      }).then(response => response.json())
                        .then(json => {
                          window.location.reload();
                        });

                    }} className='bg-danger'><i class="fa-solid fa-user-xmark"></i>&nbsp; Unfollow</button>
                </section>
              </div>
            </div>

          </div>
        </div>)

      })); 
    }

  


  useEffect(() => {
    let userString = localStorage.getItem("ACCOUNT");
    let user = JSON.parse(userString);
    let id = user.id;
    userId = id;
    setUserId(userId);
    getUserChannels(id);
    getRecommendedChannels(id);



  }, [])




  return (
    <>
      <div className="outlet ms-auto">
        {/* GENERATE YOUR CHANNELS */}

        <div className='your-channel mb-4'>
          <div className='ps-4'>
            <h2>Your <span className='span-style'><b>Channels</b></span></h2>
          </div>
          <div className="search-field-channels search-field ms-3 mb-3  w-50  me-5 ">
            <input onChange={(e) => {
              setToken(e.target.value)
            }} placeholder='Search Inside Your Channels.. ' className='search-text-field h-100 me-2' type="text"></input>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='d-flex  justify-content-center align-items-center'>
            <div className="container-slider ">
              <Slider {...settings}>

                {renderUserChannels()}








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



                  {recommendedChannels.map((channel) => {
                    return <div className="card-container">
                      <div className='card-channels'>
                        <div className="card-cover-photo">
                          <img src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationCoverPic/${channel.orgId}`}  ></img>
                          <div className="overlayy"></div>
                          <div className="channel-desc-card">
                            <h5><b>{channel.channelName}</b></h5>
                            <h6 className='card-exp'>{channel.expertName}</h6>
                            <h6 className='card-numb-followers'>{channel.category}</h6>
                          </div>

                          <div className="card-choices d-flex justify-content-end">
                            <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                              <button style={{ backgroundColor: "#5e55e8" }} onClick={function () {
                                navigateToChannelProfile(channel.orgId)
                              }} className='bg-primary'><i class="fa-solid fa-address-card"></i>&nbsp; Profile</button>
                            </section>
                            <section className="unfollow-btn w-50  d-flex align-items-center justify-content-center">
                              <button onClick={

                                async function () {

                                  let _id = userId;
                                  let channelId = channel.orgId;

                                  let data = {
                                    _id,
                                    channelId
                                  }

                                  await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/followChannel`, {
                                    method: 'PUT',
                                    body: JSON.stringify(data),
                                    headers: {
                                      "Content-type": "application/json; charset=UTF-8"
                                    }
                                  }).then(response => response.json())
                                    .then(json => {
                                      window.location.reload();
                                    });

                                }} className='bg-primary'><i class="fa-solid fa-user-plus"></i>&nbsp; Follow</button>
                            </section>
                          </div>
                        </div>

                      </div>
                    </div>

                  })}




                </Slider>
              </div>
            </div>
          </div>
        </div>




      </div>

    </>
  )
}
