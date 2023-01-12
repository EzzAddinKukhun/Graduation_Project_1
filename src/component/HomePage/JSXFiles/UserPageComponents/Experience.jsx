import React, { useEffect } from 'react';
import '../../CSSFiles/UserCss/userprofile.css'
import cover from '../../../../imgs/cover.jpg';
import Profile from '../../../../imgs/profile.jpg';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Settings from './Settings';
import FileDownload from "js-file-download";
import Axios from 'axios';

export default function Experience() {
    let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let [expAllYear, setExpAllYear] = useState([]);
    let [expo, setExp] = useState([]);
    let [userID, setUserID] = useState("");
    let [expSelected, setExpSelected] = useState(0);


    // let expo = [
    //     {
    //         "experienceId": 1,
    //         "orginization": "Apple",
    //         "startDate": "2009-04-04",
    //         "endDate": "2022-04-04",
    //         "details": "this was the best thing i have ever done",
    //         "fileName": "1670006852066-675218383-yuchenliang-resume.pdf"
    //     },
    //     {
    //         "experienceId": 2,
    //         "orginization": "An najah National University",
    //         "startDate": "2019-04-04",
    //         "endDate": "2020-03-04",
    //         "details": "Assistant Professor",
    //         "fileName": "1670006899716-102174393-yuchenliang-resume.pdf"
    //     },
    //     {
    //         "experienceId": 3,
    //         "orginization": "Asal Tech",
    //         "startDate": "2019-04-04",
    //         "endDate": "2020-05-04",
    //         "details": "Assistant Professor",
    //         "fileName": "1670006899716-102174393-yuchenliang-resume.pdf"
    //     },
    //     {
    //         "experienceId": 4,
    //         "orginization": "Foothill",
    //         "startDate": "2019-04-04",
    //         "endDate": "2020-10-04",
    //         "details": "Assistant Professor",
    //         "fileName": "1670006899716-102174393-yuchenliang-resume.pdf"
    //     },
    //     {
    //         "experienceId": 4,
    //         "orginization": "Foothill",
    //         "startDate": "2019-04-04",
    //         "endDate": "2021-12-31",
    //         "details": "Assistant Professor",
    //         "fileName": "1670006899716-102174393-yuchenliang-resume.pdf"
    //     },
    //     {
    //         "experienceId": 5,
    //         "orginization": "exalt",
    //         "startDate": "2019-04-04",
    //         "endDate": "2023-02-04",
    //         "details": "Assistant Professor",
    //         "fileName": "1670006899716-102174393-yuchenliang-resume.pdf"
    //     },
    //     {
    //         "experienceId": 6,
    //         "orginization": "An najah National University",
    //         "startDate": "2019-04-04",
    //         "endDate": "2021-06-14",
    //         "details": "Assistant Professor",
    //         "fileName": "1670006899716-102174393-yuchenliang-resume.pdf"
    //     },
    //     {
    //         "experienceId": 7,
    //         "orginization": "An najah National University",
    //         "startDate": "2019-04-04",
    //         "endDate": "2021-08-27",
    //         "details": "Assistant Professor",
    //         "fileName": "1670006899716-102174393-yuchenliang-resume.pdf"
    //     },
    //     {
    //         "experienceId": 8,
    //         "orginization": "An najah National University",
    //         "startDate": "2019-04-04",
    //         "endDate": "2022-01-18",
    //         "details": "Assistant Professor",
    //         "fileName": "1670006899716-102174393-yuchenliang-resume.pdf"
    //     },
    //     {
    //         "experienceId": 9,
    //         "orginization": "An najah National University",
    //         "startDate": "2019-04-04",
    //         "endDate": "2022-08-12",
    //         "details": "Assistant Professor",
    //         "fileName": "1670006899716-102174393-yuchenliang-resume.pdf"
    //     }
    // ]

    async function getExp(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/experience/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setExp(json.experience);
                displayExperience(json.experience)
            });
    }


    function displayExperience(expo) {
        let year;
        let years = [];
        let experiancesAllYear = [];
        for (let i = 0; i < expo.length; i++) {
            years.push(expo[i].endDate.split("-")[0]);

        }
        let setYears = new Set(years);
        let yearsArrayDistinct = Array.from(setYears).sort();

        for (let el of yearsArrayDistinct) {
            let experienceInSelectedYear = {
                year: el,
                data: []
            }
            for (let i = 0; i < expo.length; i++) {
                if (el == expo[i].endDate.split("-")[0]) {
                    experienceInSelectedYear.data.push(expo[i])
                }
            }
            experiancesAllYear.push(experienceInSelectedYear);
        }

        expAllYear = experiancesAllYear;
        setExpAllYear(expAllYear)


    }

    useEffect(() => {
        let userString = localStorage.getItem("ACCOUNT");
        let user = JSON.parse(userString);
        let id = user.id;
        userID = id;
        setUserID(userID);
        getExp(id);



    }, [])

    return (
        <>
            {console.log(expo)}
            <div className='outlet ms-auto'>
                <section className=' w-100  p-3'>
                    <h2 className='mb-2 p-3'><b><span className='span-style '>Experiences</span></b></h2>
                    <div className="experiences">
                        <span className='exp-line-list d-block'></span>
                        {/* GENERATE YEARS OF EXPERIENCES */}

                        {expAllYear.map((expYear) => {

                            console.log(expYear)
                            return (
                                <div className="year-exp d-block">
                                    <span id="experience-year"><b>{expYear.year}</b></span>

                                    {expYear.data.map((element, key) => {
                                        return (

                                            <Fade delay={1000}>
                                                <div className="experience d-flex">
                                                    <div className="experience-month d-flex align-items-center justify-content-center">
                                                        <section className='month-and-day d-flex justify-content-center align-items-center'>
                                                            <div className="number-month text-light">
                                                                <h6><b>{month[parseInt(element.endDate.split("-")[1]) - 1]}</b></h6>
                                                                <h1><b>{parseInt(element.endDate.split("-")[2])}</b></h1>
                                                            </div>
                                                        </section>
                                                        <span className='line-connect'></span>

                                                    </div>
                                                    <div className="experience-details p-3">
                                                        <h3><b>{element.orginization}</b></h3>
                                                        <div className="duration d-flex w-75">
                                                            <i class="fa-solid fa-calendar-days me-2 text-muted"></i>
                                                            <div className='me-4'>
                                                                <label className='text-muted'> Start Date: </label><span className='text-muted'> {element.startDate}</span>
                                                            </div>

                                                            <div>
                                                                <label className='text-muted'> End Date: </label><span className='text-muted'>{element.endDate}</span>
                                                            </div>


                                                        </div>
                                                        <p id="experience-explain">
                                                            {element.details}
                                                        </p>
                                                        <button
                                                            onClick={() => {
                                                                let _id = userID;
                                                                let experienceId = "" + element.experienceId;

                                                               
                                                                Axios({
                                                                    url: `https://alumnibackend-fathifathallah.onrender.com/experienceFile/${_id}/${experienceId}`,
                                                                    method: "GET",
                                                                    responseType: "blob",
                                                                }).then((response) => {
                                                                    console.log(response);
                                                                    FileDownload(response.data, "Exp." + response.data.type.split("/")[1]);
    });
                                                            }}
                                                            className='viewExp'>View</button>

                                                    </div>

                                                </div>
                                            </Fade>
                                        );
                                    })}


                                </div>);
                        })}


                    </div>
                </section>
            </div >

        </>
    )
}
