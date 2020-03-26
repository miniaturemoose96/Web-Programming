const superagent = require('superagent');
const config = require('./config.json');

// function Gets the all studio ghibli films
const getAllFilms = async category => {
    const filmsUrl = `${config.url}/${category}`;
    const filmUrlResponse = await superagent.get(filmsUrl);
    const filmsBody = filmUrlResponse.body;

    return filmsBody;

};

// function that gets single film from given id
const getOneFilm = async(id, category) => {
    const oneFilmUrl = `${config.url}/${category}/${id}`;
    const oneFilmResponse = await superagent.get(oneFilmUrl);
    const oneFilmBody = oneFilmResponse.body;

    return oneFilmBody;
};

// Export functions to make them accessible to cli
module.exports = {
    getAllFilms,
    getOneFilm
};