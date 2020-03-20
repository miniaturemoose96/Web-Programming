const superagent = require('superagent');

const cdnjs = 'https://api.cdnjs.com/libraries';
// SUPER AGENT WITH CALLBACK
const superagentCallbacks = url => {
    superagent.get(url).end((err, response) => {
        console.log(response.body);
        console.log(response.statusCode);
    });
};
// superagentCallbacks(cdnjs);

// SUPER AGENT AS PROMISE WITH THEN
const superagentPromises = url => {
    superagent
        .get(url)
        .then(response => {
            console.log(response.body);
            console.log(response.statusCode);
        })
        .catch(error => {
            console.log(error);
        });
};
// superagentPromises(cdnjs);

// SUPER AGENT AS PROMISE WITH ASYNC/AWAIT
const superagentAsyncAwait = async url => {
    try {
        const response = await superagent.get(url);
        console.log(response.body);
        console.log(response.statusCode);
    } catch (error) {
        console.log(error);
    }
};
superagentAsyncAwait(cdnjs);
