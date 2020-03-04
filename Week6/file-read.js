// Lab Week 6
// by: Alejandro Bernal

const fs = require('fs');
const path = require('path');

// Problem 1: Update wordCount() function from the file-read.js example(15pts)
const files = ['small.txt', 'medium.txt', 'large.txt'];
const keywords = ['javascript', 'node', 'programming', 'language'];

const wordCount = (files, callback) => {
    files.forEach(file => {
        const fullPath = path.resolve('./lab', file);

        fs.readFile(fullPath, 'utf8', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                const wordArray = result.toLowerCase().split(' ');
                callback(wordArray);
            }
        });
    });
};

const countKeywords = (files, keywords) => {
    const keywordCount = {};
    wordCount(files, (wordArray) => {
        wordArray.forEach(word => {
            if (keywords.includes(word)) {
                if (keywordCount[word]) {
                    keywordCount[word] += 1;
                } else {
                    keywordCount[word] = 1;
                }
            }
        });
        console.log(keywordCount);
    });
};


countKeywords(files, keywords);