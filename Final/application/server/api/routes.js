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

router.get('/movie', async(req, res) => {
    // How do I get ID here from 
    const id = '2baf70d1-42bb-4437-b551-e5fed5a87abe';
    const category = 'films';

    try {
        const movie = await ghibli.getOneFilm(id, category);
        res.json(movie);
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