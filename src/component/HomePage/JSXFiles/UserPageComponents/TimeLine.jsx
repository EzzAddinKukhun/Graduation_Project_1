import React, { useEffect, useState } from 'react';
import '../../CSSFiles/UserCss/timeline.css'
import cover from '../../../../imgs/cover.jpg';
import Profile from '../../../../imgs/profile.jpg';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal'


export default function TimeLine() {

    let [userID, setUserId] = useState("");
    let [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);
    const [commentToSend, setCommentToSend] = useState("");
    const[postIdComment, setPostIdComment] = useState(""); 

    async function getPosts(id) {
        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/user/getTimelinePosts/${id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(response => response.json())
            .then(json => {
                console.log(json.postsResponse)
                setPosts(json.postsResponse);
            });

    }

    // here when the array brackets are blanks, it represents the componentDidMount
    // we can use useEffect for three functions (Mount,DidMount,Unmount)



    useEffect(() => {
        let userDataString = localStorage.getItem("ACCOUNT");
        let userData = JSON.parse(userDataString);
        setUserId(userData.id);
        getPosts(userData.id)

    }, []);


    return (
        <>

            <div className='d-flex outlet ms-auto'>
                <div className="timeline ">
                    <div className="inner-timeline  ">
                        {/* GENERATE ALL POSTS START FROM HERE */}
                        {posts.map((post, key) => {
                            return (
                                <Fade>
                                    <div className="post mb-3">
                                        <div className="post-container">
                                            <div className="post-header">
                                                <div className="channel-puplisher d-flex h-100">
                                                    {/* CHANEL PROFILE AND EXPERT PROFILE PHOTO */}
                                                    <div className="chaneel-photo">
                                                        <div className="post-photo">
                                                            <img className='w-100 h-100' src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationCoverPic/${post.orginizationId}`} ></img>
                                                        </div>
                                                        <div className="expert-photo bg-danger">
                                                            <img className='w-100 h-100' src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationProfilePic/${post.orginizationId}`} ></img>
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

                                            </div>
                                            <div className="post-text">
                                                {post.description}
                                            </div>
                                            <div className="post-img">
                                                {
                                                    post.mediaType == "img" ? <img className='w-100 h-100' src={`https://alumnibackend-fathifathallah.onrender.com/api/posts/getPostMedia/${post._id}`} ></img>
                                                        : <video controls className='w-100 h-100' src={`https://alumnibackend-fathifathallah.onrender.com/api/posts/getPostMedia/${post._id}`} ></video>

                                                }
                                            </div>
                                            <div className="reaction-statistics mt-1 w-25 d-flex align-items-center ">
                                                <div className='d-flex me-3'>
                                                    <div className="rs-div">
                                                        <i className="fa-solid fa-heart "></i>
                                                    </div>
                                                    <div className="rs-div">
                                                        <button
                                                    
                                                         className="likesCounterBtn" data-bs-toggle="modal" data-bs-target="#likePost0000"
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
                                                                setPostIdComment(post._id); 
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
                                                            data-bs-target="#commentPost0000" className="commentsCounter" data-bs-toggle="modal" >{post.comments}</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="commands d-flex">
                                                <button
                                                    onClick={async () => {

                                                        let _id = userID;
                                                        let data = {
                                                            _id,
                                                            postId: post._id
                                                        }



                                                        if (post.liked == true) {
                                                            // dislike  On Post
                                                            console.log("INSIDE DISLIKE" + post._id)
                                                            await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/user/removeLike`, {
                                                                method: 'DELETE',
                                                                body: JSON.stringify(data),
                                                                headers: {
                                                                    "Content-type": "application/json; charset=UTF-8"
                                                                }
                                                            }).then(response => response.json())
                                                                .then(json => {


                                                                });

                                                            // update likes counter
                                                            await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/posts/getPostLikes/${post._id}`, {
                                                                method: 'GET',
                                                                headers: {
                                                                    "Content-type": "application/json; charset=UTF-8"
                                                                }
                                                            })
                                                                .then(response => response.json())
                                                                .then(json => {
                                                                    setLikes(json.postLikes);
                                                                    document.getElementsByClassName("likesCounterBtn")[key].innerHTML = json.postLikes.length
                                                                    console.log(json.postLikes)
                                                                });

                                                            await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/user/getTimelinePosts/${_id}`, {
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
                                                        else {
                                                            // Put Like On Post
                                                            console.log("INSIDE LIKE" + post._id)

                                                            await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/user/addLike`, {
                                                                method: 'PUT',
                                                                body: JSON.stringify(data),
                                                                headers: {
                                                                    "Content-type": "application/json; charset=UTF-8"
                                                                }
                                                            }).then(response => response.json())
                                                                .then(json => {

                                                                });

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
                                                                    document.getElementsByClassName("likesCounterBtn")[key].innerHTML = json.postLikes.length

                                                                });

                                                            await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/user/getTimelinePosts/${_id}`, {
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
                                                    }
                                                    }




                                                    className='w-50'><i style={post.liked == true ? { color: "red" } : { color: "#2A4D69" }} className="likeBtn" class="fa-solid fa-thumbs-up"></i>
                                                    &nbsp; Like</button>
                                                <button className='w-50' onClick={() => {
                                                    var comment_pane = document.getElementById("comment_pane");
                                                    console.log(comment_pane);
                                                    comment_pane.classList.add("d-block")

                                                }}

                                                ><i className="fa-solid fa-comment"></i> Comment</button>

                                            </div>
                                            <div id="comment_pane ">
                                                <div className="comment-write d-flex " >
                                                    <div className="comment-img text-center">
                                                        <img src={`https://alumnibackend-fathifathallah.onrender.com/api/orginization/getOrginizationProfilePic/${userID}`} ></img>
                                                    </div>
                                                    <div id="comment-input" className="comment-input  d-flex align-items-center   ms-auto">
                                                        <div id="comment" className="comment d-flex justify-content-around border-color ">
                                                            <input className="commentInput"
                                                                onKeyUp={(e) => {
                                                                    var comment = document.getElementById("comment");
                                                                    setCommentToSend(e.target.value)
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

                                                            <div
                                                                onClick={async () => {
                                                                    console.log(commentToSend);
                                                                    let comment = commentToSend;
                                                                    let _id = userID;
                                                                    let postId = post._id;

                                                                    let data = {
                                                                        _id,
                                                                        postId,
                                                                        comment
                                                                    }


                                                                    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/posts/addComment`, {
                                                                        method: 'PUT',
                                                                        body: JSON.stringify(data),
                                                                        headers: {
                                                                            "Content-type": "application/json; charset=UTF-8"
                                                                        }
                                                                    }).then(response => response.json())
                                                                        .then(json => {
                                                                        });

                                                                    //update comments counter 

                                                                    await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/posts/getPostComments/${post._id}`, {
                                                                        method: 'GET',
                                                                        headers: {
                                                                            "Content-type": "application/json; charset=UTF-8"
                                                                        }
                                                                    })
                                                                        .then(response => response.json())
                                                                        .then(json => {
                                                                            setComments(json.comments);
                                                                            document.getElementsByClassName("commentsCounter")[key].innerHTML = json.comments.length;
                                                                            document.getElementsByClassName("commentInput")[key].value = "";
                                                                        });


                                                                }}
                                                                className="emoji d-flex justify-content-center align-items-center">
                                                                <div>
                                                                    <i class="fa-solid fa-paper-plane"></i>
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

                {/* <Fade>
                    <div className="profile-info-timeline">
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
                    </div>
                </Fade> */}
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
                                                {comment._id == userID ? <div
                                                    onClick={async () => {
                                                      
                                                        let data = {
                                                            postId: postIdComment,
                                                            commentId: comment.commentId
                                                        }
                                                        await fetch(`https://alumnibackend-fathifathallah.onrender.com/api/posts/deleteComment`, {
                                                            method: 'DELETE',
                                                            body: JSON.stringify(data),
                                                            headers: {
                                                                "Content-type": "application/json; charset=UTF-8"
                                                            }
                                                        }).then(response => response.json())
                                                            .then(json => {
                                                                console.log("Comment Deleted")
                                                            });
                                                    }}
                                                    className='cursor-pointer'><i class="fa-solid fa-trash-can text-danger"></i></div> : ""}


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
