import React  from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import './styles/application.css'

const Application = () => {
    const user_name = JSON.parse(localStorage.getItem('user')).name
    const params = useParams();

    const handleLogout = () => {
        localStorage.removeItem("user");
    }

    


    return (
        <>
            <div className="navbar">
                <div className="navbar__left">
                    <Link to={`/application/${params['id']}/info`}>Info</Link>
                    <span className="navbar__separator"></span>
                    <Link to={`/application/${params['id']}/todos`}>Todos</Link>
                    <span className="navbar__separator"></span>
                    <Link to={`/application/${params['id']}/posts`}>Posts</Link>
                    <span className="navbar__separator"></span>
                    <Link to={`/application/${params['id']}/albums`}>Albums</Link>
                </div>
                <div className="navbar__right">
                    <Link to='/login' onClick={handleLogout}>Logout</Link>
                </div>
            </div>
            <div className="welcome-container">
                <h1>hello {user_name} and welcome to our website </h1>
            </div>
            <Outlet />
        </>
    )
}

export default Application;