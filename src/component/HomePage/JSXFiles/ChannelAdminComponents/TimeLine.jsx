import React, { useEffect } from 'react';
import '../../CSSFiles/UserCss/timeline.css'
import cover from '../../../../imgs/cover.jpg';
import Profile from '../../../../imgs/profile.jpg';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal'
import { useState } from 'react';
import { Axios } from 'axios';

export default function TimeLine() {
    const [fileData, setFileData] = useState();
    const [posts, setPosts] = useState([]);
    const [id, setID] = useState("");
    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);

    async function getPosts(orginizationId) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/post/getChannelsPosts/6390c162d9c4e5d6bff034a2`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                setPosts(json.postsResponse);


            });

    }



    // here when the array brackets are blanks, it represents the componentDidMount
    // we can use useEffect for three functions (Mount,DidMount,Unmount)
    useEffect(() => {
        let dataLocal = localStorage.getItem("ACCOUNT");
        let dataParsed = JSON.parse(dataLocal);
        let orginizationId = dataParsed.id;
        setID(orginizationId);
        getPosts(orginizationId);

    }, []);


    return (
        <>
            {console.log(posts)}
            <div className='d-flex outlet ms-auto'>
                <div className="timeline">
                    <div className="inner-timeline">
                        {/* GENERATE ALL POSTS START FROM HERE */}
                        {posts?.map((post) => {
                            return (
                                <Fade>
                                    <div className="post mb-3">
                                        <div className="post-container">
                                            <div className="post-header">
                                                <div className="channel-puplisher d-flex h-100">
                                                    {/* CHANEL PROFILE AND EXPERT PROFILE PHOTO */}
                                                    <div className="chaneel-photo">
                                                        <div className="post-photo">
                                                            <img className='w-100 h-100' src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationCoverPic/${id}`} ></img>
                                                        </div>
                                                        <div className="expert-photo bg-danger">
                                                            <img className='w-100 h-100' src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationProfilePic/${id}`} ></img>
                                                        </div>
                                                    </div>



                                                    <div className="main-info-post d-flex flex-column">
                                                        <div className="chanel-name ">
                                                            <h5><b>{post.channelName}</b></h5>
                                                        </div>
                                                        <div className="expert-name ">
                                                            <h6>{post.expertName}  | <span className='post-time'>
                                                                {post.time}
                                                            </span></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-choices h-100">
                                                    <div className="choices-icon">
                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-text">
                                                {post.description}
                                            </div>
                                            <div className="post-img">
                                                <img className='w-100 h-100' src={`https://alumnibackend-fathifathallah.onrender.com/api/posts/getPostMedia/${post._id}`} ></img>
                                            </div>
                                            <div className="reaction-statistics mt-1 w-25 d-flex align-items-center ">
                                                <div className='d-flex me-3'>
                                                    <div className="rs-div">
                                                        <i className="fa-solid fa-heart "></i>
                                                    </div>
                                                    <div className="rs-div">
                                                        <button id="likesCounterBtn" data-bs-toggle="modal" data-bs-target="#likePost0000"
                                                            onClick={async () => {
                                                                await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/posts/getPostLikes/${post._id}`, {
                                                                    method: 'GET',
                                                                    headers: {
                                                                        "Content-type": "application/json; charset=UTF-8"
                                                                    }
                                                                })
                                                                    .then(response => response.json())
                                                                    .then(json => {
                                                                        setLikes(json.postLikes);
                                                                        console.log(json.postLikes)
                                                                    });
                                                            }}
                                                        >{post.likes}</button>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className="rs-div">
                                                        <i className="fa-solid fa-comment"></i>
                                                    </div>
                                                    <div className="rs-div">
                                                        <button
                                                            onClick={async () => {
                                                                await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/posts/getPostComments/${post._id}`, {
                                                                    method: 'GET',
                                                                    headers: {
                                                                        "Content-type": "application/json; charset=UTF-8"
                                                                    }
                                                                })
                                                                    .then(response => response.json())
                                                                    .then(json => {
                                                                        setComments(json.comments);
                                                                    });
                                                            }}
                                                            data-bs-target="#commentPost0000" data-bs-toggle="modal" >{post.comments}</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="commands d-flex">
                                                <button
                                                    onClick={async () => {
                                                        let heart = document.getElementById("heartIcon");
                                                        heart.style.color = "red";
                                                        let _id = id;
                                                        let data = {
                                                            _id,
                                                            postId: post._id
                                                        }


                                                        // Put Like On Post
                                                        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/user/addLike`, {
                                                            method: 'PUT',
                                                            body: JSON.stringify(data),
                                                            headers: {
                                                                "Content-type": "application/json; charset=UTF-8"
                                                            }
                                                        }).then(response => response.json())
                                                            .then(json => {
                                                            });

                                                        //update likes counter
                                                        // await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/posts/getPostLikes/${post._id}`, {
                                                        //     method: 'GET',
                                                        //     headers: {
                                                        //         "Content-type": "application/json; charset=UTF-8"
                                                        //     }
                                                        // })
                                                        //     .then(response => response.json())
                                                        //     .then(json => {
                                                        //         setLikes(json.postLikes);
                                                        //         console.log(json.postLikes)
                                                        //     });
                                                        // document.getElementById("likesCounterBtn").innerHTML = likes.length

                                                    }

                                                    }




                                                    className='w-50'><i id="heartIcon" className="fa-solid fa-heart"></i> Love</button>
                                                <button className='w-50' onClick={() => {
                                                    var comment_pane = document.getElementById("comment_pane");
                                                    console.log(comment_pane);
                                                    comment_pane.classList.add("d-block")

                                                }}

                                                ><i className="fa-solid fa-comment"></i> Comment</button>

                                            </div>
                                            <div id="comment_pane">
                                                <div className="comment-write d-flex" >
                                                    <div className="comment-img text-center">
                                                        <img src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationProfilePic/${id}`} ></img>
                                                    </div>
                                                    <div id="comment-input" className="comment-input  d-flex align-items-center   ms-auto">
                                                        <div id="comment" className="comment d-flex justify-content-center border-color">
                                                            <input
                                                                onKeyUp={(e) => {
                                                                    var comment = document.getElementById("comment");
                                                                    console.log(e.target.value.length);
                                                                    if (e.target.value.length == 0) {
                                                                        comment.classList.add("border-color");
                                                                        comment.classList.remove("border-double-color")
                                                                    }
                                                                    else {
                                                                        comment.classList.remove("border-color");
                                                                        comment.classList.add("border-double-color")
                                                                    }

                                                                }}

                                                                placeholder='Write a comment..' type="text"></input>



                                                            <div className="emoji d-flex justify-content-center align-items-center">
                                                                <div>
                                                                    <i className="fa-regular fa-face-smile-beam"></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            );
                        })}


                    </div>
                </div>

                <Fade>
                    {/* <div className="profile-info-timeline">
                        <div className="prof-info-tm-line">
                            <div className="time-line-cover">
                                <img src={cover}></img>
                            </div>
                            <div className="time-line-profile-photo ">
                                <img src={Profile}></img>
                            </div>
                            <div className="time-line-name-and-position text-center">
                                <h5 className='tm-line-name'><b><Link to="../alumniProf">Ezz Addin H. Kukhun</Link></b></h5>
                                <h6 className='position-or-student text-muted'>
                                    Frontend Intern @ Foothill Technology Solutions LLC.
                                </h6>
                            </div>
                            <div className="time-line-statistics">
                                <div className="d-flex justify-content-between">
                                    <label>People Who Watched Your Profile</label><a href='#'>346</a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Number of Your Connections</label><a href='#'>737</a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Number of Your Activites</label><a href='#'>3020</a>
                                </div>

                            </div>



                        </div>
                    </div> */}
                    <button type="button" className="addNewPostByChannel  btn-primary" data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </Fade>

            </div>



            {/* ADD NEW POST */}
            <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add New Post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="textAreaPost form-floating">
                                <textarea className="form-control h-100" placeholder="Leave a comment here" id="descPost"></textarea>
                                <label for="floatingTextarea2">What You Think about? </label>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button className="me-auto upload-btn-post">
                                <div className='d-flex'>
                                    <i class="fa-solid fa-cloud-arrow-up me-1"></i> Upload
                                </div>
                                <input type="file"
                                    onChange={(e) => {
                                        setFileData(e.target.files[0]);
                                    }}
                                />
                            </button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cansel</button>
                            <button
                                onClick={async (e) => {
                                    e.preventDefault();
                                    const data = new FormData();
                                    data.append("_id", id);
                                    data.append("description", document.getElementById("descPost").value);
                                    data.append("mediaFile", fileData);

                                    await fetch("https://alumnibackend-fathifathallah.onrender.com/api/post/orginization/newPost", {
                                        method: "PUT",
                                        body: data,
                                    })
                                        .then((result) => {
                                            console.log("File Sent Successful");
                                        })
                                        .catch((err) => {
                                            console.log(err.message);
                                        });



                                }}
                                type="button" className="btn btn-primary">Post Now</button>
                        </div>

                    </div>
                </div>
            </div>



            {/* LIKES LIST */}
            <div className="modal fade" id="likePost0000" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Likes</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex flex-column">
                            {
                                likes.map((like) => {
                                    return (
                                        <div className="person-like d-flex mb-2 w-100">
                                            <div className="liked-photo">
                                                <img src={`https://alumnibackend-fathifathallah.onrender.com/getProfilePicture/${like._id}`} ></img>
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                            <div className="liked-person-info h-100  d-flex flex-column">
                                                <h5><b>{like.firstName + " " + like.lastName}</b></h5>
                                                <h6 className='text-muted'>{like.studyField}</h6>
                                            </div>
                                        </div>

                                    );
                                })
                            }



                        </div>

                    </div>
                </div>
            </div>


            {/* COMMENT LIST */}
            <div className="modal fade " id="commentPost0000" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Comments</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex flex-column">

                            {
                                comments.map((comment) => {
                                    return (
                                        <div className="comment-of-post">
                                            <div className="person-like d-flex mb-2 w-100">
                                                <div className="liked-photo">
                                                    <img src={`https://alumnibackend-fathifathallah.onrender.com/getProfilePicture/${comment._id}`} ></img>
                                                </div>
                                                <div className="liked-person-info d-flex flex-column">
                                                    <h5><b>{comment.firstName + " " + comment.lastName}</b></h5>
                                                    <h6 className='text-muted'>{comment.studyField}</h6>
                                                </div>

                                            </div>
                                            <div className="comment-text d-block">
                                                <p className='d-block'>{comment.comment}</p>
                                            </div>
                                        </div>);

                                })
                            }



                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
