// module designed to support features of the http protocol.
const http = require('http');
const { callbackify } = require('util');


// Simple HTTP GET Request
// http.get('http://jsonplaceholder.typicode.com/posts', (response) => {
//     let body = '';
//     response.on('data', result => {
//         body += result;
//     })

//     response.on('end', () => {
//         console.log(body);
//     })
// }).on('error', err => {
//     console.log(err);
// })


// HTTP GET Request with Looping over URLs
const urls = [
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



const getTimes = urls => {
    const start = new Date();

    urls.forEach(url => {
        fetch(url, statusCode => {
            const end = new Date();
            const responseTime = end - start;

            console.log(`${url} | ${statusCode} | ${responseTime}`);
        })
    })
}

getTimes(urls);