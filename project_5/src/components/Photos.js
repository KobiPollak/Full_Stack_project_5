import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


export default function Photos() {

    const params = useParams();
    let [counter, setCounter] = useState(10);
    let [photosListSize, setPhotosListSize] = useState(0);
    const [userPhotos, setUserPhotos] = useState([]);

    async function importPhotos() {

        const photos_list = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos_json = await photos_list.json();

        const temp = photos_json.filter(photo => photo.albumId == params["id"]);
        setPhotosListSize(temp.length);
        setUserPhotos(temp);
    }

    useEffect(
        () => {
            importPhotos();
                }, []
    )

    return (
        <>
        <h1>print images</h1>
            
                {userPhotos.map(
                    (photo) =>
                        
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                ).slice(0, counter)}
                <button style={{visibility: counter==photosListSize ? "hidden" : "visible" }} onClick={()=> setCounter(prev=>prev+10)} >Load 10 More</button>
        </>
    );
}