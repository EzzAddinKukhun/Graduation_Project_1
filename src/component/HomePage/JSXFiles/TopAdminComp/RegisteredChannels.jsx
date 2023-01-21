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
  let [channelIdToNavigate, setChannelIDToNavigate] = useState("");
  let [searchToken, setSearchToken] = useState("");
  let [channels, setChannels] = useState([]);


  async function getChannels() {
    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getAllOrginizations`, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => {

        setChannels(json.org);
        console.log(json.org)
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
      channels?.filter((channel) =>
        channel.channelName.toLocaleLowerCase().includes(searchToken)
      ).map((channel, key) => {
        return (
          <tr>
            <th scope="row">{key}</th>
            <td>
              {channel.channelName}
            </td>

            <td>
              <div
                onClick={() => {
                  channelIdToNavigate = channel._id;
                  setChannelIDToNavigate(channelIdToNavigate)
                  navigateToUpdateJobApplication(channelIdToNavigate);

                }}
                className='updateJobBtn'>
                <i class="fa-solid fa-id-badge"></i>
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



  useEffect(() => {
    getChannels();

  }, [])





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
                <th className='JT-H4' scope="col">View</th>
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



