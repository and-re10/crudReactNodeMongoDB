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
        <div className="App">
            <h1>Page {data.name}</h1>
            <nav className="nav">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
            </nav>
            <div className="list">
                <div>
                    <p><span className="title">ID:</span> {data?._id}</p>
                    <p><span className="title">NAME:</span> {data?.name}</p>
                    <p><span className="title">REVIEW:</span> {data?.review}</p>
                </div>
            </div>
        </div>
    );
};

export default OneMovie;