import React, { useState } from 'react'

import './post.css'

export default function Post(props) {

    let [selectedPostId, setSelectedPostId] = useState(1);
    let [pid, setPid] = useState(props.p.id);

    // const handlePostClick = (postId) => {
    //     setSelectedPostId((prevSelectedPostId) => {
    //       if (prevSelectedPostId === postId) {
    //         return null; // If the clicked post is already selected, deselect it
    //       } else {
    //         return postId; // Otherwise, select the clicked post
    //       }
    //     });
    //   };

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
        </div>

        </>

    )
}
