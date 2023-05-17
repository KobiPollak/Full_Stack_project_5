
import { useState, useEffect } from "react";
import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

import './albums.css'


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
        <h1 className="title">Albums</h1>
        <div className="album-list-container">
            <ol className="album-list">
                {user_albums.map((album) => (
                <Link
                    to={`/application/${loggedInUser.id}/albums/${album.id}/photos`}
                    state={album.id}
                    key={album.id}
                    className="album-item-link"
                >
                    <div className="album-item">
                    <span className="album-title">{album.title}</span>
                    </div>
                </Link>
                ))}
            </ol>
        </div>
        </>
    )

}

export default Albums;

