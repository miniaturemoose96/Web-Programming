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

function adjustName(company) {

    if (company.name.length === 3) {
        const lastElem = company.name.length - 1;
        let fname = company.name[0];
        let lName = company.name[lastElem];

        company.firstName = fname;
        company.lastName = lName;

        delete company.name;

    } else {

        let fname = company.name[0];
        let lName = company.name[1];

        company.firstName = fname;
        company.lastName = lName;

        delete company.name;
    }

    return company;
}

const dc = {
    name: ['Bruce', 'Wayne'],
    hero: 'Batman'
};

const marvel = {
    name: ['Peter', 'Benjamin', 'Parker'],
    hero: 'SpiderMan'
};

console.log(adjustName(dc));
console.log(adjustName(marvel))