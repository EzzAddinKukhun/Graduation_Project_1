import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ScholarshipsTable() {
    return (
        <>
            <div className="outlet ms-auto">
                <div className='jobsApplicationSearchBar d-flex justify-content-between'>
                    <div class="mb-3 w-90">
                        <label for="exampleInputEmail1" class="form-label">Search</label>
                        <input placeholder='Search using job application..' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="searchApplications" />
                    </div>
                    <button className='searchJobBtn'>
                        Search
                    </button>
                </div>

                <div className='jobsTableContainer'>
                    <table class="table table-hover jobsTable">
                        <thead>
                            <tr>
                                <th className='JT-H1' scope="col">Job ID</th>
                                <th className='JT-H2' scope="col">Job Name</th>
                                <th className='JT-H3' scope="col">Applicants Number</th>
                                <th className='JT-H4' scope="col">Update</th>
                                <th className='JT-H5' scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* GENERATE SCHOLARS HERE */}
                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Backend Developer
                                </td>
                                <td>
                                    <Link to="scholarApplicants">27</Link>
                                </td>
                                <td>
                                    {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                    <div className='updateJobBtn'>
                                        <Link to="update_scholar">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>

                                    </div>
                                </td>
                                <td >
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </td>
                            </tr>
                           
                           


                        </tbody>
                    </table>
                </div>

            </div>

            <Outlet />
        </>
    )
}
