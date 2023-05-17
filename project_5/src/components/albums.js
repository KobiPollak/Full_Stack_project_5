
import { useState, useEffect } from "react";
import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";


function Albums() {

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const [user_albums, setUserAlbums] = useState([]);

    async function importAlbums() {
        const albums_list = await fetch('https://jsonplaceholder.typicode.com/albums');
        const albums_json = await albums_list.json();


        // const photos_list = await fetch('https://jsonplaceholder.typicode.com/photos');
        // const photos_json = await photos_list.json();
        // console.log(photos_json);
        const temp = albums_json.filter(album => album.userId === loggedInUser.id);
        setUserAlbums(temp);
    }

    useEffect(
        () => {
            importAlbums()
        }, []

    )

    return (
        <>
            <h1>Albums</h1>
            <ol>
                {user_albums.map((x) =>
                (<div key={x.id}>
                    <li><Link to={`/application/${loggedInUser.id}/albums/${x.id}/photos`} state={x.id}>{x.title}</Link> </li>
                </div>)
                )}
            </ol>
        </>
    )

}

export default Albums;

