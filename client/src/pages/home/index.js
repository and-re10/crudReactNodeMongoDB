import React, { useState, useEffect } from "react";
import "./style.css";
import axios from 'axios';
import { Link } from "react-router-dom";

function Home(){
    // hook to store the data from the l'api
    const [movieReviewList, setMovieReviewList] = useState([]);
    // hooks to store the value of the insert form inputs "Movie Name" and "Review"
    const [movieName, setMovieName] = useState("");
    const [review, setReview] = useState("");
    // hook to save the updated review
    const [newReview, setNewReview] = useState('');

    // Connect to the API and recive all the movies
    useEffect(() => {
        axios.get('http://localhost:3004/api/movies').then(response => {
        console.log(response.data);
        // send the data to the hook movieReviewList
        setMovieReviewList(response.data);
        });
    }, []);

    // Submit a Movie
    // Show the changements on live
    const submitMovie = () => {
        axios.post('http://localhost:3004/api/insert', {
            movieName: movieName, // hook movieName
            movieReview: review // hook review
        });

        setMovieReviewList([
            ...movieReviewList, {
                name: movieName,
                review: review
            }
        ]);
    };

    // Delete a movie and Review
    // Show the changements on live
    const deleteMovie = (movie) => {
        axios.delete(`http://localhost:3004/api/delete/${movie._id}`);
        const newList = movieReviewList.filter((item) => item._id !== movie._id);
        console.log(newList);
        setMovieReviewList(newList);
    };

    // Edit the review of a spécific Movie
    // Show the changements on live
    const updateReview = (movie, key) => {
        axios.put(`http://localhost:3004/api/update/${movie._id}`, {
            movieReview: newReview
        });
        movieReviewList[key].review = newReview;
        console.log(newReview);
        setNewReview("");
    };


    return (
        <div className="App">
            <h1>CRUD APPLICATION</h1>
            <h1>Home</h1>
            <nav className="nav">
                <Link to="/about" className="link">About</Link>
            </nav>

            <div className="form">
                <div className="row">
                    <div>
                        {/* Input Name */}
                        <label>Movie Name</label>
                        <input type="text" name="movieName" id="InputName" onChange={e => setMovieName(e.target.value) }/>
                    </div>
                    <div>
                        {/* Input Review */}
                        <label>Movie Review</label>
                        <input type="text" name="movieReview" id="InputReview" onChange={e => setReview(e.target.value) }/>
                    </div>
                </div>
                {/* Button Submit */}
                <button onClick={e => {
                    submitMovie();
                    e.target.parentNode.querySelector("#InputName").value = "";
                    e.target.parentNode.querySelector("#InputReview").value = "";
                }} >Add Movie</button>
            </div>
            <div className="container">
            {movieReviewList.map((data, key) => {
                return (
                    <div key={key} className="card">
                        <p>Movie Name: <Link className="link" to={`/${data._id}`}>{data.name}</Link></p>
                        <p>Movie Review: {data.review}</p>
                        <div className>
                            <button className="btn_update" onClick={(e) => {
                                updateReview(data, key);
                                e.target.parentNode.querySelector('#updateInput').value = "";
                            }} >Update</button>
                            <input type="text" id="updateInput" onChange={(e) => setNewReview(e.target.value)}/>
                            <button className="btn_delete" onClick={() => deleteMovie(data)} >Delete</button>
                        </div>
                        
                    </div>
                )
            })}
            </div>
        </div>
    );
};

export default Home;