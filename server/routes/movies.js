const express = require('express');
const router = express();
const Movie = require('../models/Movie');

// Insert a Movie
router.post('/insert', async (req, res) => {
    const movie = new Movie({
        name: req.body.movieName,
        review: req.body.movieReview
    });

    try {
        const savedMovie = await movie.save();
        console.log(savedMovie);
        res.send(savedMovie)
    } catch (error) {
        console.log(error)
    }
});

// Show all the Movies
router.get('/all', async (req, res) => {
    try {
        const movies = await Movie.find();
        console.log(movies)
        res.send(movies);
    } catch(error){
        console.error(error);
    };
});

module.exports = router;



