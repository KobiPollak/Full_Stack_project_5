import React , {useState, useEffect} from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import './application.css'

// import Info from './info';
// import Todos from './todos';
// import Posts from './posts';
// import Albums from './albums';

const Application = () => {
    const [data, setData] = useState();

    const handleLogout = () => {
        localStorage.removeItem("user");
    }

    const handleTodos = () => {
        const user_id = JSON.parse(localStorage.getItem('user')).id

        async function importTodos() {
            const todo_list = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await todo_list.json()
            const temp = data.filter(todo => todo.userId === user_id)
            setData(temp)
        }

        importTodos()
    }


    return (
        <>
            <div className="navbar">
                <div className="navbar__left">
                    <Link to='/application/info'>Info</Link>
                    <span className="navbar__separator"></span>
                    <Link to={{pathname: `/application/todos`,state: { data }}} onClick={handleTodos}>Todos</Link>
                    <span className="navbar__separator"></span>
                    <Link to='/application/posts'>Posts</Link>
                    <span className="navbar__separator"></span>
                    <Link to='/application/albums'>Albums</Link>
                </div>
                <div className="navbar__right">
                    <Link to='/' onClick={handleLogout}>Logout</Link>
                </div>
            </div>
            <div>
                <h1>hello {JSON.parse(window.localStorage.getItem('user')).name} and welcome to our website</h1>
            </div>
            <Outlet />
        </>
    )
}

export default Application;