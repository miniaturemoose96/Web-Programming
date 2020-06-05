/**
 *  Problem 1:
 *  Remove the x's from phrase
 * 
 */
const removeLetters = (phrase, letter) => {
    let replaced = phrase.split(letter);
    return replaced.join('');
};

const phrase = 'helxlo x worxxld';
const letter = 'x';

console.log(removeLetters(phrase, letter));

/**
 *  Problem 2:
 *  Write a funtion called flattenArray(10pts)
 *  The flattenArray function accepts a nested array as an argument.
 *  This function will turn the nested array of arrays and return the flat array.
 * 
 */
const flattenArray = (nested) => {
    let new_array = [];
    for (let i = 0; i < nested.length; i++) {
        for (let j = 0; j < nested[i].length; j++) {
            new_array.push(nested[i][j]);
        }
    }
    return new_array;
};

const nested = [
    [1, 2],
    [3, 4, 5],
    [6],
    [7, 8, 9]
];

console.log(flattenArray(nested));

/**
 *  Problem 3:
 *  Write a function called adjustName().
 *  The adjustName function accepts an object as an argument.
 *  This function will remove the key 'name' and add two new keys 'firstName' and 'lastName' and return the object.
 *  It will set the values of 'firstName' and 'lastName' correctly based on the values in the 'name' array.
 *  You may assume that the first item in the 'name' array is the first name and that the last item is the last name.
 *  Consider some people have multiple middle names so the last item in the array **MUST** be accessed dynamically.**DO NOT** use iterations.
 * 
 */
const adjustName = (obj) => {
    const first = obj.name[0];
    const last = obj.name[obj.name.length - 1];

    // Create the new object 
    obj.firstName = first;
    obj.lastName = last;
    delete obj.name;

    return obj;
};

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