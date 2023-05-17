import React, { useState } from 'react'

import './post.css'

export default function Post(props) {

    let [selectedPostId, setSelectedPostId] = useState(1);
    let [pid, setPid] = useState(props.p.id);
    let [commentsList, setCommentsList] = useState([]);

    // const handlePostClick = (postId) => {
    //     setSelectedPostId((prevSelectedPostId) => {
    //       if (prevSelectedPostId === postId) {
    //         return null; // If the clicked post is already selected, deselect it
    //       } else {
    //         return postId; // Otherwise, select the clicked post
    //       }
    //     });
    //   };


    async function importComments(e){
        const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.p.id}`);
        const comments_list = await comments.json();
        setCommentsList(comments_list);
        // e.target.style.visibility = "hidden";
        e.target.classList.add("hidden");
    }

    return (
        <>

            <div
                className={`post-card ${props.isSelected ? 'selected' : ''}`}
                onClick={() => props.handleClick(props.p.id)}
            >
                <div className="post-card-title">
                    <label>Title: </label>
                    <label>{props.p.title}</label>
                </div>
                <div className="post-card-body">
                    <label>Body: </label>
                    <label>{props.p.body}</label>
                </div>
                <div className="button-cont">
                    <button 
                    id={`showB-${props.p.id}`}
                    className={`see-comments-button ${props.isSelected ? "" : "hidden"}` }
                    // style={{ visibility: props.isSelected ? "visible" : "hidden" }} 
                    onClick={(e) => importComments(e)} > 
                    Show Comments
                    </button>
                </div>
                {commentsList.map(
                    (comment) => <li>
                        <div className="post-card-title">
                            <label>Name: </label>
                            <label>{comment.name}</label>
                        </div>
                        <div className="post-card-body">
                            <label>Body: </label>
                            <label>{comment.body}</label>
                        </div>

                    </li>
                )}
                <div className="button-cont">
                    {/* <button className='see-comments-button' style={{ visibility: commentsList.length === 0  ? "hidden" : "visible" }} onClick={() => setCommentsList([])} > Hide Comments</button> */}
                    <button 
                    className={`see-comments-button ${commentsList.length === 0 ? "hidden" : ""}` }
                    // style={{ visibility: commentsList.length === 0  ? "hidden" : "visible" }} 
                    onClick={() => {
                        setCommentsList([])
                        console.log(document.getElementById(`showB-${props.p.id}`).classList)
                        document.getElementById(`showB-${props.p.id}`).classList.remove("hidden")
                        console.log(document.getElementById(`showB-${props.p.id}`).classList)
                        }} > 
                    Hide Comments
                    </button>
                </div>

            </div>
        </>

    )
}
