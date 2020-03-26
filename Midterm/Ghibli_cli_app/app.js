const figlet = require('figlet'); // adds ascii art headers
const inquirer = require('inquirer');
const Ghiblimodule = require('Ghibli_module');

// Helper function to have a nice display of film objects
const _displayFilmInformation = (response) => {
    figlet(`${response.title}`, {
        font: 'Small',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });

    console.log(`Description: ${response.description}\n`);
    console.log(`Release Year: ${response.release_date}\n`);
    console.log(`Rating: ${response.rt_score}`);

};

// Function will create a list of films
// returns list to use with inquirer prompt
const _createFilmList = (response) => {
    let listOfItems = [];

    response.forEach(film => {
        listOfItems.push(film.title);
    });

    return listOfItems;
};

// Allow user to search selected category item by id list and display info
const _selectFilmInCategory = (listOfId) => {
    return inquirer.prompt([{
        type: 'rawlist',
        name: 'item',
        message: '\nSelect Item for more information.',
        choices: listOfId
    }]);
};

// Function uses inquirer to ask user if you need to see another movie details
const _checkAnotherMovie = () => {
    return inquirer.prompt([{
        type: 'confirm',
        name: 'film',
        message: 'would you like to check out another Film?'
    }]);
};

// gets studio ghibli films
// Uses lowercase to allow user to search by keyword
// returns list of id of those that include keyword
const _getFilmByKeyword = (response, keyword) => {
    let itemId = [];

    response.forEach(film => {
        const { id, title } = film;
        const filmTitle = title.toLowerCase();
        if (filmTitle.includes(keyword)) {
            itemId.push(id);
        }
    });

    return itemId;
};

// This function shall allow us to create a connection to Ghibli API
// takes one parameter by default set to films, displays all films by Studio Ghibli
async function search(keyword = '') {
    // Banner 
    figlet('Studio Ghibli Films', {
        font: 'Small',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });

    // Endpoint we are searching
    // Will access all of studio ghibli films
    const category = 'films';

    // get all movies from Studio Ghibli api
    // This is our response from api
    const allFilms = await Ghiblimodule.getAllFilms(category);
    const filmList = _createFilmList(allFilms);

    // Prompt
    // Lets you choose a film and allows you to choose 
    // see the film's description and more
    if (keyword === '') {
        const selectFilm = await _selectFilmInCategory(filmList);

        let id = '';
        // Get the ID of the film
        if (selectFilm.item) {
            for (let i = 0; i < allFilms.length; i++) {
                if (selectFilm.item === allFilms[i].title) {
                    id = allFilms[i].id;
                }
            }
        }

        const oneFilm = await Ghiblimodule.getOneFilm(id, category);
        _displayFilmInformation(oneFilm)

        // Ask user if they want to checkout another movie
        const anotherFilm = await _checkAnotherMovie();
        if (anotherFilm.film) {
            const selectAnotherfilm = await _selectFilmInCategory(filmList);

            let id = '';
            // Get the ID of the film
            if (selectAnotherfilm.item) {
                for (let i = 0; i < allFilms.length; i++) {
                    if (selectAnotherfilm.item === allFilms[i].title) {
                        id = allFilms[i].id;
                    }
                }
            }
            const anotherFilm = await Ghiblimodule.getOneFilm(id, category);
            _displayFilmInformation(anotherFilm);
        }
    } else {
        const filmsWithKeyword = _getFilmByKeyword(allFilms, keyword);
        if (filmsWithKeyword.length === 0) {
            console.log(`No results for Keyword ---> ${keyword}`);
        } else {
            console.log(`Found ${filmsWithKeyword.length} result(s) for keyword: ${keyword}`);
            for (let i = 0; i < filmsWithKeyword.length; i++) {
                const getFilmsWithKeyword = await Ghiblimodule.getOneFilm(filmsWithKeyword[i], category);
                _displayFilmInformation(getFilmsWithKeyword);
            }
        }
    }
};

module.exports = {
    search
};