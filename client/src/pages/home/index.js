import React, { useState, useEffect } from "react";
import "./style.css";
import axios from 'axios';

function Home(){
    // hook to store the data from the l'api
    const [movieReviewList, setMovieReviewList] = useState([]);

    // Connect to the API and recive all the movies
    useEffect(() => {
        axios.get('http://localhost:3004/api/movies').then(response => {
        console.log(response.data);
        // send the data to the hook movieReviewList
        setMovieReviewList(response.data);
        });
    }, [])

    return (
        <div className="App">
            <h1>CRUD APPLICATION</h1>
            <h1>Home</h1>
            <ul>
            {movieReviewList.map((data, key) => {
                return (
                    <div key={data._id}>
                        <li>Movie Name: {data.name}</li>
                        <li>Movie Review: {data.review}</li>
                    </div>
                )
            })}
            </ul>
        </div>
    );
};

export default Home;