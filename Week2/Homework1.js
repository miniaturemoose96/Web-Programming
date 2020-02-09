// // Problem 4: Counting Letters
// function countingLetters(quote, punctuations) {
//     let letterCount = 0;
//     let currentLetter = ''
//     for (let i = 0; i < quote.length; i++) {
//         currentLetter = quote[i].toLowerCase();
//         if (currentLetter)
//     }
// }

// // Test Counting Letters
// const quote = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
// const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];
// console.log(countingLetters(quote, punctuations));


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
console.log(compareArrays(array_a1, array_a2)); // OUTPUT: True
console.log(compareArrays(array_a3, array_a4)); // OUTPUT: False


// Problem 6: Convert to an Object
// function convertToObject(gameArray) {

// }

const game_array = [
    ['developer', 'Respawn'],
    ['producer', ' EA'],
    ['game', 'Star Wars Jedi: Fallen Order'],
    ['year', 2019]
]

// for (let i = 0; i < game_array.length; i++) {
//     const innerValues = game_array[i].length;
//     for (let j = 0; j < innerValues; j++) {
//         console.log('[' + i + ',' + j + '] =' + game_array[i][j]);
//     }
// }

// console.log(convertToObject(game_array));