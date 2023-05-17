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
        e.target.style.visibility = "hidden";
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
                <button style={{ visibility: props.isSelected ? "visible" : "hidden" }} onClick={(e) => importComments(e)} > Show Comments</button>
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
                <button style={{ visibility: commentsList.length === 0  ? "hidden" : "visible" }} onClick={() => setCommentsList([])} > Hide Comments</button>


            </div>
        </>

    )
}
