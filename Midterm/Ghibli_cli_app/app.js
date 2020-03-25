const figlet = require('figlet'); // adds ascii art headers
const superagent = require('superagent');
const inquirer = require('inquirer');

// Testing out if a dictionary is the answer to my problem
// Focus only on using getting ID and TITLE/NAME keys from the objects
// Save them in a dictionary with an easier title to search directly
const _createDictionary = (response, category) => {
    let objectList = []
    if (category === 'films') {
        response.forEach(film => {
            const objItems = {};
            const { id, title } = film;
            objItems[title] = id;
            objectList.push(objItems);
        });
    } else {
        response.forEach(elem => {
            const objItems = {};
            const { id, name } = elem;
            objItems[name] = id;
            objectList.push(objItems);
        });
    }

    return objectList;
};

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
            figlet(`${response.name}`, {
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

            console.log(`Gender: ${response.gender}\n`);
            console.log(`Age: ${response.age}\n`);
            console.log(`Eye Color: ${response.eye_color}, Hair Color: ${response.hair_color}`);

            break;
        case 'locations':
            figlet(`${response.name}`, {
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

            console.log(`Climate: ${response.climate}\n`);
            console.log(`Terrain: ${response.terrain}\n`);
            console.log(`Surface Water: ${response.surface_water}`);
            break;
        case 'species':
            figlet(`${response.name}`, {
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

            console.log(`Classification: ${response.classification}\n`);
            console.log(`Eye Colors: ${response.eye_colors}\n`);
            console.log(`Hair Colors: ${response.hair_colors}`);

            break;
        case 'vehicles':
            figlet(`${response.name}`, {
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
            console.log(`Type: ${response.vehicle_class}\n`);
            console.log(`Size: ${response.length}`);

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

            let count_films = 0;
            response.forEach(film => {
                count_films += 1;
                console.log(`${count_films}) ${film.title}....................ID: ${film.id},`);
            });
            break;

        default:
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

            let count_elem = 0;
            response.forEach(elem => {
                count_elem += 1;
                console.log(`${count_elem}) ${elem.name}....................ID: ${elem.id}`);
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
        message: '\nSelect Item for more information.',
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
    // Test
    const test = _createDictionary(itemsResponse, category);
    console.log(test);

    //_displayId(itemsResponse, category)

    // Select Item in chosen category depenging on choice
    // Create id list depending on chosen then prompt user
    // const idList = _idList(itemsResponse);
    // const selectedId = await _selectItemInCategory(idList);
    // if (selectedId.item) {
    //     // Open new connection to specified id info
    //     // choice url keeps track of category 
    //     const singleItemUrl = `${choiceUrl}/${selectedId.item}`;
    //     const singleItemResponse = await superagent.get(singleItemUrl);
    //     const singleItem = singleItemResponse.body;
    //     // Call Info print helper for information 
    //     _displayInformation(singleItem, category);
    // }

};

module.exports = {
    search
};