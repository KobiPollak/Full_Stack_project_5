import React from "react";
import { useLocation } from 'react-router-dom';

const Todos = () => {
    const location = useLocation();
    const { data } = location.state;
    console.log(data)

    return(
        <h1>Todos</h1>
    )

}

export default Todos;