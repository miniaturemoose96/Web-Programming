// require in express framework and bodyParser middleware
const express = require('express');
const bodyParser = require('body-parser');

// call the express function which provides features and functionality for our server
const app = express();
const port = 8888;

// apply the body parser middleware to handle application/json requests
app.use(bodyParser.json({ type: 'application/json' }));

// create a get route for our main site localhost:8888
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// create a get route for /json on localhost:8888
app.get('/json', (req, res) => {
    console.log('sending...');
    res.json({ hello: 'world' });
});

// create a post route for /json on localhost:8888
app.post('/json', (req, res) => {
    const body = req.body;
    res.json({ received: body });
});

// start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});