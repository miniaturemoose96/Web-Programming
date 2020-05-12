// set up dependencies 
const express = require('express');
const router = express.Router();

// studio ghibli module
const ghibli = require('custom-module');

// get all films, use param to filter list and search
router.get('/movies/:title', async(req, res) => {
    const category = 'films';
    const { title } = req.params;

    try {
        // filter base on what the user inputs
        const movies = await ghibli.getAllFilms(category);
        res.send(movies.filter(movie => {
            if (movie.title.toLowerCase().includes(title.toLowerCase())) {
                return movie;
            }
        }));
    } catch (err) {
        res.send({ err })
    }
});

// get one film passing ID to display all information about the film
router.get('/one-movie/:id', async(req, res) => {
    const category = 'films';
    const { id } = req.params;

    try {
        const oneMovie = await ghibli.getOneFilm(id, category);
        res.send(oneMovie);
    } catch (err) {
        res.send({ err });
    }
});

// For the images
router.get('/images', function(req, res) {
    try {
        const imgInfo = ghibli.getImageInfo();
        res.json(imgInfo);
    } catch (err) {
        console.log(err);
    }
});

// Export your routes
module.exports = router;