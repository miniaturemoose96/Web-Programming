// Problem 4: Counting Letters

const countingLetters = (quote, punctuations) => {
    const letterCounts = {};

    for (let i = 0; i < quote.length; i++) {
        const character = quote[i];

        if (!punctuations.includes(character)) {
            const lowerQuote = character.toLowerCase();

            if (letterCounts[lowerQuote]) {
                letterCounts[lowerQuote] = letterCounts[lowerQuote] + 1;
            } else {
                letterCounts[lowerQuote] = 1;
            }
        }
    }

    return letterCounts;
};

const quote = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];
console.log(countingLetters(quote, punctuations));


// Problem 5: Compare Arrays

const compareArrays = (arrayOne, arrayTwo) => {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }

    for (let i = 0; i < arrayOne.length; i++) {
        const elemOne = arrayOne[i];
        const elemTwo = arrayTwo[i];

        if (elemOne !== elemTwo) {
            return false;
        }
    }
    return true;
};

const array_a1 = [1, 2, 3];
const array_a2 = [1, 2, 3];
const array_a3 = [1, 2, 3, 4];
const array_a4 = [1, 3, 2, 4, 2];
console.log("PROBLEM 5: Compare Arrays");
console.log(compareArrays(array_a1, array_a2)); // OUTPUT: True
console.log(compareArrays(array_a3, array_a4)); // OUTPUT: False


// Problem 6: Convert to an Object

const convertToObject = (gameArray) => {
    const gameObj = {};

    for (let i = 0; i < gameArray.length; i++) {
        const set = gameArray[i]

        const key = set[0];
        const value = set[1];

        gameObj[key] = value;
    }
    return gameObj;
};

const game_array = [
    ['developer', 'Respawn'],
    ['producer', ' EA'],
    ['game', 'Star Wars Jedi: Fallen Order'],
    ['year', 2019]
]

console.log("PROBLEM 6: Convert To Object")
console.log(convertToObject(game_array));

// Problem 7: Build an Object

const buildObject = (array) => {
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
};

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