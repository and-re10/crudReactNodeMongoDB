import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function About(){
    return (
        <div>
            <h1>About</h1>
            <nav className="nav">
                <Link to="/">Home</Link>
            </nav>
        </div> 
    );
};

export default About;