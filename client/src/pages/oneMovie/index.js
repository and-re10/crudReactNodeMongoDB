import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
 
function OneMovie(){
    return (
        <>
            <h1>Page OneMovie</h1>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <ul>
                <li>ID: </li>
                <li>NAME: </li>
                <li>REVIEW: </li>
            </ul>
            </>
    );
};

export default OneMovie;