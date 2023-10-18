import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {

    let [data, setData] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const userId = loggedInUser.id;

    async function importData() {
        const posts_list = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        const post_list_json = await posts_list.json();
        setData(post_list_json);
    }

    useEffect(
        () => {
            importData();
        }, []
    )

    const handlePostClick = (postId) => {
        setSelectedPostId(postId);
      };



    return (
        <>
            <h1 className="title">Posts</h1>
            <ol>
                {console.log(data)}
                {data.map(
                    (post) => 
                        <li>
                            <Post 
                            key={post.id} 
                            p={post} 
                            isSelected={selectedPostId === post.id}
                            handleClick={handlePostClick}
                            />
                        </li>
                    
                )}
            </ol>
        </>
    )

}

export default Posts;