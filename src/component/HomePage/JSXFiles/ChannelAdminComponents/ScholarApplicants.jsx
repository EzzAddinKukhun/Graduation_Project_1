import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function ScholarApplicants() {
    return (
        <>
            <div className="outlet ms-auto">
                <div className='jobsApplicationSearchBar d-flex justify-content-between'>
                    <div class="mb-3 w-90">
                        <label for="exampleInputEmail1" class="form-label">Search</label>
                        <input placeholder='Search using job applicant name..' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="searchApplications" />
                    </div>
                    <button className='searchJobBtn'>
                        Search
                    </button>
                </div>

                <div className='jobsTableContainer'>
                    <table class="table table-hover jobsTable">
                        <thead>
                            <tr>
                                <th className='JT-H1' scope="col">Applicant ID</th>
                                <th className='JT-H2' scope="col">Applicant Name</th>
                                <th className='JT-H3' scope="col">Scholarship Name</th>
                                <th className='JT-H4' scope="col">Application</th>
                                <th className='JT-H5' scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* GENERATE JOBS HERE */}

                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                            
                          
                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                            
                          
                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                            
                          
                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                            
                          
                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                            
                          
                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                            
                          
                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                            
                          
                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                            
                          
                          
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
                                    <button type="button" class="btn btn-danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                                             
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    Ezz Addin H. Kukhun
                                </td>
                                <td>
                                    Frontend Development
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="scholarApplication">
                                            <i class="fa-solid fa-file-contract text-light"></i>
                                        </Link>
                                    </button>
                                </td>
                             
                                <td>
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
