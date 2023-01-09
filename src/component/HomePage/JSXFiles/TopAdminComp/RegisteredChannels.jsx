import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { render } from '@testing-library/react';
import Swal from 'sweetalert2';

export default function RegisteredChannels() {
  /*
  UNCOMMENT THE Channels HOOK, AND CHANNELS INSIDE GETCHANNELS FUNCTION AND GET INISDE USEEFFECT
  */
  let navigator = useNavigate();
  let [jobIDToNavigate, setJobIDToNavigate] = useState("");
  let [searchToken, setSearchToken] = useState("");
  // let [channels, setChannels] = useState ([]); 


  async function getChannels(id) {
    await fetch(`http://localhost:5000/api/job/getAllJobs/${id}`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {
        let channelsJson = json.applicantsArray;
        channels = channelsJson;
        // setChannels(channels);
      });
  }

  function navigateToUpdateJobApplication(id) {
    navigator(
      {
        pathname: 'channelTemplatePage',
        search: `?id=${id}`
      }
    );
  }



  function renderChannels() {
    return (
      channels.filter((channels) =>
        channels.jobName.toLocaleLowerCase().includes(searchToken)
      ).map((job, key) => {
        return (
          <tr>
            <th scope="row">{key}</th>
            <td>
              {job.jobName}
            </td>

            <td>
              <div
                onClick={() => {
                  jobIDToNavigate = job._id;
                  setJobIDToNavigate(jobIDToNavigate)
                  navigateToUpdateJobApplication(jobIDToNavigate);

                }}
                className='updateJobBtn'>
                <i class="fa-solid fa-pen-to-square"></i>

              </div>
            </td>
            <td >
              <button onClick={() => {
                deleteJobAPI(job._id)
              }} type="button" class="btn btn-danger">
                <i class="fa-solid fa-trash-can"></i>
              </button>

            </td>
          </tr>);
      }))

  }



  useEffect(() => {
    // getChannels();  

  }, [])



  let channels = [
    {
      "_id": "6390ecb1d782cb68698894d9",
      "orginizationId": "6390b9a2fbf8669105e238e1",
      "jobName": "Data Engineering",
      "jobLevel": "Senior",
      "industry": "Computer Science",
      "salary": 3500,
      "experience": "4 Years",
      "jobType": "Full Time",
      "postDate": "2022-01-01",
      "deadline": "2023-07-01",
      "jobOverview": "YES YES YES YES YES YES ",
      "applicants": [],
      "requiredSkills": [
        "Sprting Boot",
        "C",
        "SQL"
      ],
      "preferredExperience": [
        "GIT",
        "XML",
        "Bonto"
      ],
      "__v": 0,
      "createdAt": "2022-12-07T19:42:41.806Z",
      "updatedAt": "2022-12-10T17:18:20.799Z"
    },
    {
      "_id": "6390ed1bd782cb68698894dc",
      "orginizationId": "6390b9a2fbf8669105e238e1",
      "jobName": "MACHINE LEARNING",
      "jobLevel": "Senior",
      "industry": "IT",
      "salary": 5461,
      "experience": "Back End",
      "jobType": "Internship",
      "postDate": "2022-12-07",
      "deadline": "2023-01-01",
      "jobOverview": "this is a front end development job",
      "applicants": [],
      "requiredSkills": [
        "java",
        "c++",
        "python"
      ],
      "preferredExperience": [
        "git",
        "github",
        "jasper"
      ],
      "__v": 0,
      "createdAt": "2022-12-07T19:44:27.566Z",
      "updatedAt": "2022-12-07T19:44:27.566Z"
    }
  ]



  return (
    <>
      <div className="outlet ms-auto">
        <div className='jobsApplicationSearchBar d-flex justify-content-between'>
          <div class="mb-3 w-100">
            <label for="exampleInputEmail1" class="form-label">Search</label>
            <input
              onKeyUp={(e) => {
                searchToken = e.target.value;
                setSearchToken(searchToken);
              }}
              placeholder='Search using channels name..' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="searchApplications" />
          </div>

        </div>

        <div className='jobsTableContainer'>
          <table class="table table-hover jobsTable">
            <thead>
              <tr>
                <th className='JT-H1' scope="col">Channel ID</th>
                <th className='JT-H2' scope="col">Channel Name</th>
                <th className='JT-H4' scope="col">Update</th>
                <th className='JT-H5' scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* GENERATE channels HERE */}
              {renderChannels()}



            </tbody>
          </table>
        </div>

      </div>

      <Outlet />
    </>
  )
}


async function deleteJobAPI(id) {
  await fetch(`http://localhost:5000/api/job/deleteJob/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json())
    .then(json => {
      if (json.message == "success") {
        Swal.fire("Good job!", "Job Deleted Successfully!", "success");
      }
    });
}



