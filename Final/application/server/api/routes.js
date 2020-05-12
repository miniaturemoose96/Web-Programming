// set up dependencies 
const express = require('express');
const router = express.Router();

// studio ghibli module
const ghibli = require('custom-module');

router.get('/catalog', async(req, res) => {
    // Endpoint to get all studio ghibli movies
    const category = 'films';

    try {
        const movies = await ghibli.getAllFilms(category);
        res.json(movies);
    } catch (err) {
        res.json({ err });
    }
});

// Passing data to our router
router.post('/movie', async(req, res) => {
    const category = 'films';
    // I need ID from the front end
    const { id } = req.body;
    try {
        const oneFilmUrl = await ghibli.getOneFilm(id, category);
        res.json(oneFilmUrl);
    } catch (err) {
        res.json({ err });
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