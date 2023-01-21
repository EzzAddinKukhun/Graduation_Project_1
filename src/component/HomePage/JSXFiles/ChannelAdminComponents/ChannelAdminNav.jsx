import React, { useEffect, useState } from 'react';
import '../../CSSFiles/UserCss/usernavbar.css';
import Profile from '../../../../imgs/profile.jpg'
import { Link, Outlet } from 'react-router-dom';

export default function ChannelAdminNav() {
    let [adminName, setAdminName] = useState("");
    let [pic, setPic] = useState("");
    let [id, setId] = useState("");

    async function getOrgInfo(channelID) {
        console.log(channelID)
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrgInfo/${channelID}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setAdminName(json.orgInfo.orginizationName);
            });
    }

    async function getMemInfo(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/association/getAllAssociations`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                //get the main info of org 
                json.association.map((mem) => {
                    if (mem._id == id) {
                        setAdminName(mem.associationName);
                    }

                })


            });



    }


    async function getUniInfo(id) {
        console.log(id)
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/university/getAllUniversities`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                //get the main info of org 
                json.university.map((uni) => {
                    if (uni._id == id) {
                        setAdminName(uni.universityName);
                        console.log(true)
                    }


                })


            });



    }






    useEffect(() => {
        let localStorageData = localStorage.getItem('ACCOUNT');
        let dataParsed = JSON.parse(localStorageData);
        let typeOfUser = dataParsed.type;
        setId(dataParsed.id)
        console.log(typeOfUser)

        if (typeOfUser == 'channelAdminPage') {
            getOrgInfo(dataParsed.id)
            setPic("orginization/getOrginizationProfilePic");
        }
        else if (typeOfUser == 'uniAdminPage') {
            console.log(dataParsed.id)
            getUniInfo(dataParsed.id)
            setPic("orginization/getOrginizationProfilePic");


        }
        else if (typeOfUser == 'memAdminPage') {
            getMemInfo(dataParsed.id)
            setPic("association/getAssociationProfilePic");


        }
    }, []);
    return (
        <>
            <div className="user-search-nav ms-auto p-3 d-flex justify-content-end ">
                <div className="profile-photo me-2 position-relative">
                    <div className="basic-pop-up-data text-center">
                        <img className='me-3 ' src={`https://alumnibackend-fathifathallah.onrender.com/api/${pic}/${id}`}></img>
                        <span className='me-2'><b>
                            <Link to="profile">{adminName}</Link>
                        </b></span>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
