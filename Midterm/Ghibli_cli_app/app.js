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
// const _displayCategoryItems = (response, category) => {
//     if (category === 'films') {

//         figlet(`${category}`, {
//             font: 'Small',
//             horizontalLayout: 'full',
//             verticalLayout: 'full'
//         }, function(err, data) {
//             if (err) {
//                 console.log('Something went wrong...');
//                 console.dir(err);
//                 return;
//             }
//             console.log(data)
//         });

//         let count_films = 0;
//         response.forEach(film => {
//             count_films += 1;
//             console.log(`${count_films}) ${film.title}`);
//         });

//     } else {
//         figlet(`${category}`, {
//             font: 'Small',
//             horizontalLayout: 'full',
//             verticalLayout: 'full'
//         }, function(err, data) {
//             if (err) {
//                 console.log('Something went wrong...');
//                 console.dir(err);
//                 return;
//             }
//             console.log(data)
//         });

//         let count_elem = 0;
//         response.forEach(elem => {
//             count_elem += 1;
//             console.log(`${count_elem}) ${elem.name}`);
//         });

//     }
// };

// Function will create a list of films, people, locations, species or vehicles
// call thsi function if the user does not pass a keyword to search category
// returns list to use with inquirer prompt
const _createList = (response, category) => {
    let listOfItems = [];
    if (category === 'films') {
        response.forEach(film => {
            listOfItems.push(film.title);
        });
    } else {
        response.forEach(elem => {
            listOfItems.push(elem.name);
        });
    }

    return listOfItems;
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

// gets studio ghibli films
// Uses lowercase to allow user to search by keyword, gets one film based on id
const _getItemId = (response, keyword, category) => {
    let itemId = [];
    if (category === 'films') {
        response.forEach(film => {
            const { id, title } = film;
            const filmTitle = title.toLowerCase();
            if (filmTitle.includes(keyword)) {
                itemId.push(id);
            }
        });

    } else {
        response.forEach(item => {
            const { id, name } = item;
            const itemName = name.toLowerCase();
            if (itemName.includes(keyword)) {
                itemId.push(id);
            }
        });
    }

    return itemId;
};

// This function shall allow us to create a connection to Ghibli API
// takes one parameter by default set to films, displays all films by Studio Ghibli
async function search(category = 'films', keyword = '') {
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

    if (keyword === '') {
        const listOfItems = _createList(itemsResponse, category);
        const selectItem = await _selectItemInCategory(listOfItems);
        if (category === 'films' && selectItem.item) {
            itemsResponse.forEach(film => {
                if (film.title.includes(selectItem.item)) {
                    console.log(film.id);
                }
            });
        } else {
            itemsResponse.forEach(item => {
                if (item.name.includes(selectItem.item)) {
                    console.log(item.id);
                }
            });
        }
    } else {
        const itemID = _getItemId(itemsResponse, keyword, category);
        for (let i = 0; i < itemID.length; i++) {
            const singleItemUrl = `${choiceUrl}/${itemID[i]}`;
            const singleItemResponse = await superagent.get(singleItemUrl);
            const singleItemBody = singleItemResponse.body;
            _displayInformation(singleItemBody, category);
        }
    }

};

module.exports = {
    search
};