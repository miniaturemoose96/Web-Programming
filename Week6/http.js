// Lab6
// by: Alejandro Bernal

const http = require('http');
const { callbackify } = require('util');

const websites = [
    'http://www.google.com/',
    'http://www.spotify.com/us/',
    'http://twitter.com/',
    'http://google.com/error',
    'http://reddit.com/',
    'http://google.com/error_again',
    'http://www.bing.com/'
];

// helper function
const fetch = (url, callback) => {
    http.get(url, result => {
        callback(result.statusCode);
    }).on('error', err => {
        console.log(err);
    })
}

const getTimes = websites => {
    const start = new Date();

    websites.forEach(url => {
        fetch(url, statusCode => {
            const end = new Date();
            const responseTime = end - start;
        })
    })
}

const bucketStatus = websites => {
    const bucketObj = {};
    let array = [];
    fetch((websites, status) => {
        console.log(status);
    })
    getTimes(websites);
}

bucketStatus(websites);