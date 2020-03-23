const figlet = require('figlet'); // adds ascii art headers
const superagent = require('superagent');
const inquirer = require('inquirer');

// Helper to display Id of items
const _displayId = (response, category) => {
    switch (category) {
        case 'films':
            figlet(`${category}`, {
                font: 'Small',
                horizontalLayout: 'full',
                verticalLayout: 'full'
            }, function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data)
            });

            response.forEach(film => {
                console.log(`Title: ${film.title}`);
            });
            break;

        default:
            figlet(`${category}`, {
                font: 'small',
                horizontalLayout: 'full',
                verticalLayout: 'full'
            }, function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data)
            });

            response.forEach(elem => {
                console.log(`Name: ${elem.name}`);
            });
            break;
    }
}

// Allow user to search selected category item by id
const _selectItemInCategory = (list) => {
    return inquirer.prompt([{
        type: 'rawlist',
        name: 'item',
        message: 'Select Item for more information.',
        choices: list
    }]);
};

// This function shall allow us to create a connection to Ghibli API
// takes one parameter by default set to films, displays all films by Studio Ghibli
async function search(category = 'films') {
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

    const ghibli_base = 'https://ghibliapi.herokuapp.com';
    const choiceUrl = `${ghibli_base}/${category}`;
    const baseUrlResponse = await superagent.get(choiceUrl);
    // loop through the response and display
    const items = baseUrlResponse.body;
    _displayId(items, category)

    // Select Item in chosen category depenging on choice
};

module.exports = {
    search
};