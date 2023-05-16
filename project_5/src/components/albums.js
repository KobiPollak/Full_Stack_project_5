
import { useState, useEffect } from "react";
import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Photos from "./Photos";



function Albums() {

    const loggedinUser = JSON.parse(localStorage.getItem("user"));

    const [user_albums, setUserAlbums] = useState([]);

    async function importAlboms() {
        const albums_list = await fetch('https://jsonplaceholder.typicode.com/albums');
        const albums_json = await albums_list.json();


        const photos_list = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos_json = await photos_list.json();
        console.log(photos_json);
        const temp = albums_json.filter(album => album.userId === loggedinUser.id);
        setUserAlbums(temp);


    }

    useEffect(
        () => {
            importAlboms()
        }, []

    )



    return (
        <>
            <h1>Albums</h1>
            <ol>
                {user_albums.map((x) =>
                (<>
                    <li><Link to={`/application/:id/albums/${x.id}/photos`} state={x.id}>{x.title}</Link> </li>
                </>)
                )}
            </ol>
        </>
    )

}

export default Albums;

