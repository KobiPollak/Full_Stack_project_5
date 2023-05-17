import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {

    let [data, setData] = useState([]);
    const loggedinUser = JSON.parse(localStorage.getItem("user"));
    const userId = loggedinUser.id;

    async function importData() {
        const posts_list = await fetch("https://jsonplaceholder.typicode.com/posts");
        const post_list_json = await posts_list.json();
        const temp = post_list_json.filter(post => post.userId === userId);
        setData(temp);
    }

    useEffect(
        () => {
            importData();
        }, []
    )



    return (
        <>
            <h1>Posts</h1>
            <ol>
                {console.log(data)}
                {data.map(
                    (post) => 
                        <li>
                            <Post key={post.id} p={post} />
                        </li>
                    
                )}
            </ol>
        </>
    )

}

export default Posts;