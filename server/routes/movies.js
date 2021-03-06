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
router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        console.log(movies)
        res.send(movies);
    } catch(error){
        console.error(error);
    };
});

// Show a specific Movie
router.get("/movies/:movieId", async (req, res) => {
    try {
        const movie = await Movie.findById( req.params.movieId );
        console.log(movie);
        res.send(movie);
    } catch (error) {
        console.error(error);
    };
});

// Delete a Movie
router.delete('/delete/:movieId', async (req, res) => {
    try {
        const movie = await Movie.deleteOne({ _id: req.params.movieId });
        console.log(movie);
        res.send(movie);
    } catch (error) {
        console.error(error);
    };
});

// Update the Review of a specific Movie
router.put('/update/:movieId', async (req, res) => {
    try {
        const updatedReview = await Movie.updateOne({ 
            _id: req.params.movieId
        }, {
            $set: {
                review: req.body.movieReview
            }
        });
        console.log(updatedReview);
        res.send(updatedReview);
    } catch (error) {
        console.error(error);
    };
})

module.exports = router;



