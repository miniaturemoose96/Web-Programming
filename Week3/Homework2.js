// Problem 1: Use the .map() method on the heros array to return a new array. (5 pts)
const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
];

// Remove id name and add 'id' instead with id as index of the object
const newHeros = heros.map((eachHero, index) => {
    let name = eachHero.name;
    eachHero.id = index;
    eachHero.hero = name;
    delete eachHero.name;
    return eachHero;
});

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
});

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

// Problem 4: Write a higher order function called iterateInventory (15 pts)
const inventory = [
    { item: 'Sony PS4 Pro', price: 399.99, stock: 3 }, // OK
    { item: 'Atari', price: 125.0, stock: 0 }, // OUT OF STOCK
    { item: 'Microsoft Xbox One X', price: 499.99, stock: 1 }, // LOW
    { item: 'Nintendo Switch', price: 299.99, stock: 4 }, // OK
    { item: 'Sony PS2 Console', price: 299.99, stock: 1 }, // LOW
    { item: 'Nintendo 64', price: 199.999, stock: 2 }, // LOW
    { item: 'Sega Genesis', price: 104.0, stock: 0 } // OUT OF STOCK
];

// evaluateInventory will check following conditions:
// if Stock count is 3 or more status OK, Stcok count is 1 to 2 status LOW
// finally stock is 0 status OUT OF STOCK
function evaluateInventory(inventory) {
    if (inventory.stock >= 3) {
        inventory.status = 'OK';
    } else if (inventory.stock === 1 || inventory.stock === 2) {
        inventory.status = 'LOW';
    } else {
        inventory.status = 'OUT OF STOCK'
    }
    return inventory;
}

// Write a higher order funuction called iterateInventory(function, array)
// iterateFunction will take function evaluateInventory() and inventory array as parameters
function iterateInventory(inventory, evaluateInventory) {
    inventory.forEach((elem) => {
        evaluateInventory(elem);
    });
    return inventory;
}

console.log("----PROBLEM 4----");
console.log(iterateInventory(inventory, evaluateInventory));

// Problem 5:  Write a function called calculateSalesTotals (20pts)
const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

// calculateSalesTotal will return and array of objects with two new keys 
// first new key is sales which gives discounted price if discount is contained in obj
// second new key is Total is total price of all items in object with discount if exists
function calculateSalesTotals(sales) {
    sales.forEach((elem) => {
        // Destructure, use default of 0.0 for those with no discount
        const { stock, original, discount = 0.0 } = elem;
        // Do calculations here, add new keys with appropriate values
        let discountedPrice = original * discount;
        elem.total = stock * original - discountedPrice;
        elem.sale = original - discountedPrice;
    })
    return sales;
}

console.log("----PROBLEM 5----");
console.log(calculateSalesTotals(sales));