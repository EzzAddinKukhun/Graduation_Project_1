import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function ScholarshipsTable() {
    let [scholarships, setScholarships] = useState([]);
    let [searchToken, setSearchToken] = useState(""); 
    let [scholarIdToNavigate, setScholarIdToNavigate] = useState(""); 
    let navigator = useNavigate(); 


    // function navigateToUpdateJobApplication(id) {
    //     navigator(
    //         {
    //             pathname: 'update_job',
    //             search: `?id=${id}`
    //         }
    //     );
    // }

    function navigateToScholarApplicants(id) {
        navigator(
            {
                pathname: 'scholarApplicants',
                search: `?id=${id}`
            }
        );
    }

    function renderScholarships() {
        return (
            scholarships.filter((scholarship) =>
                scholarship.scolarshipName.toLocaleLowerCase().includes(searchToken)
            ).map((scholarship, key) => {
                return (
                    <tr>
                        <th scope="row">{key}</th>
                        <td>
                            {scholarship.scolarshipName}
                        </td>
                        <td>
                            <div className='navigateTo' onClick={() => {
                                scholarIdToNavigate = scholarship._id;
                                setScholarIdToNavigate(scholarIdToNavigate)
                                navigateToScholarApplicants(scholarIdToNavigate)

                            }}>{scholarship.applicants.length}</div>
                        </td>
                        <td>
                            <div
                                // onClick={() => {
                                //     jobIDToNavigate = job._id;
                                //     setJobIDToNavigate(jobIDToNavigate)
                                //     navigateToUpdateJobApplication(jobIDToNavigate);

                                // }}
                                className='updateJobBtn'>
                                <i class="fa-solid fa-pen-to-square"></i>

                            </div>
                        </td>
                        <td >
                            <button onClick={() => {
                                // deleteJobAPI(job._id)
                            }} type="button" class="btn btn-danger">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>

                        </td>
                    </tr>);
            }))

    }

    async function getScholarshipsOfOrg(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/scholarships/getScolarshipUniId/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {

                setScholarships(json.scholarships);
            });
    }


    useEffect(() => {
        let universityData = localStorage.getItem('ACCOUNT');
        let dataParsed = JSON.parse(universityData);
        let id = dataParsed.id;
        getScholarshipsOfOrg(id);

    }, [])
    return (
        <>
            <div className="outlet ms-auto">
                <div className='jobsApplicationSearchBar d-flex justify-content-between'>
                    <div class="mb-3 w-90">
                        <label for="exampleInputEmail1" class="form-label">Search</label>
                        <input
                        onChange={(e)=>{
                            setSearchToken(e.target.value)
                        }}
                         placeholder='Search using job application..' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="searchApplications" />
                    </div>
                    <button className='searchJobBtn'>
                        Search
                    </button>
                </div>

                <div className='jobsTableContainer'>
                    <table class="table table-hover jobsTable">
                        <thead>
                            <tr>
                                <th className='JT-H1' scope="col">Scholarship ID</th>
                                <th className='JT-H2' scope="col">Scholarship Name</th>
                                <th className='JT-H3' scope="col">Applicants Number</th>
                                <th className='JT-H4' scope="col">Update</th>
                                <th className='JT-H5' scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* GENERATE SCHOLARS HERE */}



                            {renderScholarships()}



                        </tbody>
                    </table>
                </div>

            </div>

            <Outlet />
        </>
    )
}
