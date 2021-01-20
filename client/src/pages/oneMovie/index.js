import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
 
function OneMovie(){

    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3004/api/movies/${id}`).then(response => {
            console.log(response.data);
            setData(response.data)
        });

    }, [id])

    return (
        <>
            <h1>Page OneMovie</h1>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <ul>
                <li>ID: {data?._id}</li>
                <li>NAME: {data?.name}</li>
                <li>REVIEW: {data?.review}</li>
            </ul>
            </>
    );
};

export default OneMovie;