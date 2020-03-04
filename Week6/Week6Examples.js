// built in node module that allows for interacting with the file system
const fs = require('fs');

// built in module that provides utilities for working with file and directory paths.
const path = require('path');

// Simple Read File
// const absolutePath = path.resolve('./files', 'small.txt');
// fs.readFile(absolutePath, 'utf8', )

// Reading Files and Taking Actions
const files = ['large.txt', 'medium.txt', 'small.txt'];
const wordCount = files => {
    files.forEach(file => {
        const fullPath = path.resolve('./files', file);

        fs.readFile(fullPath, 'utf8', (err, result) => {
            if (err) {
                console.log(err)
            } else {
                const wordArray = result.split(' ');
                const wordCount = wordArray.length;

                console.log(`${file} | ${wordCount}`)
            }
        })
    });
}

//wordCount(files);


// Write Files
const writeFile = (filename, text) => {
    const fullPath = path.resolve('./files', filename);
    fs.writeFile(fullPath, text, (err) => {
        if (err) {
            console.log('Failed to write a file')
        } else [
            console.log(`File written: ${filename}`)
        ]
    })
}
writeFile('grafffiti.txt', 'Hello world.');