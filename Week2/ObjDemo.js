// // // OBJECTS
const transformer = {
    name: 'Optimus Prime',
    team: 'Autobots',
    colors: ['red', 'blue', 'silver']
};

// // Keys can be added using various notations
transformer.homeWorld = 'Cybertron'

const type = 'vehicle'
transformer[type] = 'truck'

// // Keys can be removed using the delete keyword
delete transformer.vehicle
console.log(transformer);


// // OBJECTS CONTINUED
const company = {
    name: 'EA',
    type: 'Video Games',
    subsidiaries: ['BioWare', 'DICE', 'PopCap']
};
company.subsidiaries.push('Respawn')
console.log(company)
    // // accessing arrays in objects
    // // adding properties to object
const games = [{
        name: 'Battlefield V',
        release: 2018
    },
    {
        name: 'FIFA 19',
        release: 2018
    },
    {
        name: 'Apex Legends',
        release: 2019
    }
];
company.games = games;
console.log(company)