const figlet = require('figlet'); // adds ascii art headers
const superagent = require('superagent');
const inquirer = require('inquirer');

// Helper to display data
const _displayInformation = (response, category) => {
    switch (category) {
        case 'films':
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

            break;
        case 'people':
            break;
        case 'locations':
            break;
        case 'species':
            break;
        case 'vehicles':
            break;
        default:
            break;
    }
};

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
                console.log(`ID: ${film.id}, TITLE: ${film.title}`);
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
                console.log(`ID: ${elem.id}, NAME: ${elem.name}`);
            });
            break;
    }
};

// Helper that will create a list of ID depending on category chosen
// Pass this to inquirer select prompt to find out more info on selected
const _idList = (response) => {
    let listOfId = [];
    response.forEach(elem => {
        listOfId.push(elem.id);
    });
    return listOfId;
};

// Allow user to search selected category item by id list and display info
const _selectItemInCategory = (listOfId) => {
    return inquirer.prompt([{
        type: 'rawlist',
        name: 'item',
        message: 'Select Item for more information.',
        choices: listOfId
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
    const itemsResponse = baseUrlResponse.body;
    _displayId(itemsResponse, category)

    // Select Item in chosen category depenging on choice
    // Create id list depending on chosen then prompt user
    const idList = _idList(itemsResponse);
    const selectedId = await _selectItemInCategory(idList);
    if (selectedId.item) {
        // Open new connection to specified id info
        // choice url keeps track of category 
        const singleItemUrl = `${choiceUrl}/${selectedId.item}`;
        const singleItemResponse = await superagent.get(singleItemUrl);
        const singleItem = singleItemResponse.body;
        // Call Info print helper for information 
        _displayInformation(singleItem, category);
    }

};

module.exports = {
    search
};