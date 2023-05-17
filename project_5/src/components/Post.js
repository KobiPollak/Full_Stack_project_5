import React, { useState } from 'react'

export default function Post(props) {

    let [boldPostId, setBoldPostId] = useState(1);
    let [pid, setPid] = useState(props.p.id);

    return (
        <>
  
        <div onClick={ ()=>setBoldPostId(pid)} style={{fontWeight: boldPostId === pid ? 'bold' : 'normal'}}>
            <label >Title: </label >
            <label >{props.p.title}</label >
            <br />

            <label >Body: </label >
            <label >{props.p.body}</label >
            <br />
            <br />
        </div>

        </>

    )
}
