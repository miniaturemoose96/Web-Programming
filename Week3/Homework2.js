// Problem 1: Use the .map() method on the heros array to return a new array. (5 pts)
const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
];

// Remove id name and add 'id' instead with id as index of the object
const newHeros = heros.map(eachHero => {
    let name = eachHero.name;
    eachHero.id = 0;
    eachHero.hero = name;
    delete eachHero.name;
    return eachHero;
})

console.log("----PROBLEM 1----");
console.log(newHeros);

// Problem 2:  Use the .filter() method on the consoles array to return a new array. (5 pts)
const manufacturer = 'nintendo';
const consoles = [
    { item: 'Sony PS4 Pro', price: 399.99 },
    { item: 'Microsoft Xbox One X', price: 499.99 },
    { item: 'Nintendo Switch', price: 299.99 },
    { item: 'Sony PS2 Console', price: 299.99 },
    { item: 'Nintendo 64', price: 199.999 }
];

// Filter consoles to only those by nintendo
const getNintendoConsoles = consoles.filter(product => {
    if (product.item.toLowerCase().includes(manufacturer)) {
        return product;
    }
})

console.log("----PROBLEM 2----");
console.log(getNintendoConsoles);

// Problem 3: Use the .reduce() method on the marvel array to return the count of villains (5)
const marvel = [
    { name: 'Spider-Man', hero: true },
    { name: 'Thor', hero: true },
    { name: 'Thanos', hero: false },
    { name: 'Black Panther', hero: true },
    { name: 'Loki', hero: false },
    { name: 'Captain Marvel', hero: true },
    { name: 'Silver Surfer', hero: true },
    { name: 'Magneto', hero: false },
    { name: 'Venom', hero: false }
];

// Count the total number of villains in the array of marvel
const villainCount = marvel.reduce((accumulator, character) => {
    const villain = character.hero;
    if (villain === false) {
        accumulator += 1;
    }
    return accumulator;
}, 0)

console.log("----PROBLEM 3----");
console.log(`Total villain Count: ${villainCount}`);