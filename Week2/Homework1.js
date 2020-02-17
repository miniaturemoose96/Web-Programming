// Problem 4: Counting Letters

function countingLetters(quote, punctuations) {
    let obj = {};
    let rem_punct = '';

    let low_quote = quote.toLowerCase();
    for (let i = 0; i < low_quote.length; i++) {
        let char = low_quote[i];
        // Check for punctuations remove and add to a new string
        if (punctuations.includes(char)) {
            // Skip This part
        } else {
            if (Object.keys(obj).includes(char)) {
                obj[char] += 1;
            } else {
                obj[char] = 1;
            }
        }
    }

    return obj;
}

const quote = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];
console.log(countingLetters(quote, punctuations));


// Problem 5: Compare Arrays

function compareArrays(arrayOne, arrayTwo) {
    const arr1 = arrayOne;
    const arr2 = arrayTwo;
    let sameArray = false;

    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (arr1[i] === arr2[j]) {
                sameArray = true;
            } else {
                sameArray = false;
            }
        }
    }
    return sameArray;
}

const array_a1 = [1, 2, 3];
const array_a2 = [1, 2, 3];
const array_a3 = [1, 2, 3, 4];
const array_a4 = [1, 3, 2, 4, 2];
console.log("PROBLEM 5: Compare Arrays");
console.log(compareArrays(array_a1, array_a2)); // OUTPUT: True
console.log(compareArrays(array_a3, array_a4)); // OUTPUT: False


// Problem 6: Convert to an Object

function convertToObject(gameArray) {
    let key = '';
    let value = '';
    let gameObject = {};
    for (let i = 0; i < gameArray.length; i++) {
        const inner = gameArray[i].length;
        for (let j = 0; j < inner; j++) {
            key = gameArray[i][0];
            value = gameArray[i][1];
        }
        gameObject[key] = value;
    }
    return gameObject;
}

const game_array = [
    ['developer', 'Respawn'],
    ['producer', ' EA'],
    ['game', 'Star Wars Jedi: Fallen Order'],
    ['year', 2019]
]

console.log("PROBLEM 6: Convert To Object")
console.log(convertToObject(game_array));

// Problem 7: Build an Object

function buildObject(array) {
    let productObject = {};
    let prop = '';
    let asgn = '';

    for (let i = 0; i < array.length; i++) {
        const inner = array[i].length;
        productObject[i + 1] = {};
        for (let j = 0; j < inner; j++) {
            const objValues = array[i][j]
            prop = objValues.property;
            asgn = objValues.assign;
            productObject[i + 1][prop] = asgn;
        }
    }

    return productObject;
}

const products = [
    [{
        property: 'product',
        assign: 'PS4'
    }, {
        property: 'company',
        assign: 'Sony'
    }, {
        property: 'release',
        assign: '2013'
    }],

    [{
        property: 'product',
        assign: 'Xbox One X'
    }, {
        property: 'company',
        assign: 'Microsoft'
    }, {
        property: 'release',
        assign: '2016'
    }],

    [{
        property: 'product',
        assign: 'Switch'
    }, {
        property: 'company',
        assign: 'Nintendo'
    }, {
        property: 'release',
        assign: '2017'
    }]
];

console.log("PROBLEM 7: Build Object");
console.log(buildObject(products));