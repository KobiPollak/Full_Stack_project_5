import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import './photos.css'


export default function Photos() {

    const params = useParams();
    let [counter, setCounter] = useState(10);
    let [photosListSize, setPhotosListSize] = useState(0);
    const [userPhotos, setUserPhotos] = useState([]);
    const [photoCount, setPhotoCount] = useState(0);

    // async function importPhotos() {

    //     // const photos_list = await fetch('https://jsonplaceholder.typicode.com/photos');
    //     // const photos_json = await photos_list.json();

    //     // const temp = photos_json.filter(photo => photo.albumId == params["id"]);
    //     // setPhotosListSize(temp.length);
    //     // setUserPhotos(temp);
    //     try {
    //         // console.log(params['id'])
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params["id"]}&_limit=10&_start=${photoCount}`);
    //         const data = await response.json();
    //         console.log(data)
    //         console.log(photoCount)
    //         setUserPhotos(prevPhotos => [...prevPhotos, ...data]);
    //         setPhotoCount(prevCount => prevCount + 20);
    //       } catch (error) {
    //         alert('Error fetching photos:', error);
    //       }
    // }

    function importPhotos() {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params["id"]}&_limit=10&_start=${photoCount}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Error fetching photos');
            }
            return response.json();
          })
          .then(data => {
            console.log(data)
            // setPhotoCount(prevCount => prevCount + 10);
            setUserPhotos(prevPhotos => [...prevPhotos, ...data]);
            
          })
          .catch(error => {
            alert('Error fetching photos:', error);
          });
      }

    const fetchMorePhotos = () => {
        setPhotoCount(prevCount => prevCount + 10);
        // importPhotos();
    };

    useEffect(() => {
            importPhotos();
            
        },[photoCount]
    )

    return (
        <>
      <h1 className="title">Print Images for album {params["id"]}</h1>

      <div className="photos-container">
        {userPhotos.map((photo) => (
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            key={photo.id}
            className="photo-item"
          />
        ))}
      </div>

      <div className="button-container">
        <button onClick={fetchMorePhotos} className="load-more-button">
          Load 10 More
        </button>
      </div>
    </>
    );
}
