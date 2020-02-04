/**
 *  Problem 1
 * 
 */
function removeLetters(phrase, letter) {
    let replace = "";
    for (let i = 0; i < phrase.length; i++) {
        if (phrase.includes(letter)) {
            replace = phrase.split(letter);
            replace = replace.join("");
        }
    }
    replace = replace.toString();
    return replace;
}

const phrase = 'helxlo x worxxld';
const letter = 'x';

console.log(removeLetters(phrase, letter));

/**
 *  Problem 2
 * 
 */
function flattenArray(nested) {
    let new_array = [];
    for (let i = 0; i < nested.length; i++) {
        for (let j = 0; j < nested[i].length; j++) {
            new_array.push(nested[i][j]);
        }
    }
    return new_array;
}

const nested = [
    [1, 2],
    [3, 4, 5],
    [6],
    [7, 8, 9]
];

console.log(flattenArray(nested));

/**
 *  Problem 3
 * 
 */