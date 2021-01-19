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


module.exports = router;



