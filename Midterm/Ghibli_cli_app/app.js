const figlet = require('figlet'); // adds ascii art headers
const superagent = require('superagent');
const inquirer = require('inquirer');

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
    figlet('Studio Ghibli API', {
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

    // add to index js
    const ghibli_base = 'https://ghibliapi.herokuapp.com/films';
    const baseUrlResponse = await superagent.get(ghibli_base);
    // loop through the response and display
    const filmsResponse = baseUrlResponse.body;
    const filmsList = _createFilmList(filmsResponse);

    // To check by keyword option
    if (keyword === '') {
        // Prompt
        const selectFilm = await _selectFilmInCategory(filmsList);

        let id = '';
        // Get the ID of the film
        if (selectFilm.item) {
            for (let i = 0; i < filmsResponse.length; i++) {
                if (selectFilm.item === filmsResponse[i].title) {
                    id = filmsResponse[i].id;
                }
            }
        }
        // Create new connection 
        // Display Contents
        const selectedfilmUrl = `${ghibli_base}/${id}`;
        const selectedfilmResponse = await superagent.get(selectedfilmUrl);
        const selectedFilmBody = selectedfilmResponse.body;
        _displayFilmInformation(selectedFilmBody);
    } else {
        // Get list of those movie that contain the given keyword
        const getIDlist = _getFilmByKeyword(filmsResponse, keyword);
        if (getIDlist.length == 0) {
            console.log(`No results for keyword --> ${keyword}`);
        } else {
            console.log(`Found ${getIDlist.length} result(s) for Keyword: ${keyword}`);
            for (let i = 0; i < getIDlist.length; i++) {
                // Construct url
                const keyfoundUrl = `${ghibli_base}/${getIDlist[i]}`;
                const keyfoundResponse = await superagent.get(keyfoundUrl);
                const keyfoundBody = keyfoundResponse.body;
                _displayFilmInformation(keyfoundBody);
            }

        }
    }
};

module.exports = {
    search
};