// Set server to host our app
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

// Instantiate express
const app = express();
// establish port for server
const port = 8888;

// set up middleware
app.use(bodyParser.json());
app.use(cors());
// creates an absolute path
app.use(express.static(path.join(__dirname, '..', '/client')));

// Add the routes to the server
// prefix your routes accordingly
const apiRoutes = require('./api/routes.js');
app.use('/api', apiRoutes)

// set up the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});