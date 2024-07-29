/* The app.js file

App.js will server as the starting point for the Express server. 
The file can be named anyhting we want, such as index.js, or main.js.
For the purposes of this project, we will simply go with app.js, 
as stated in the Express docs

*/

// Import express
const express = require('express');

// Initialize the app variable using Express, this will be our server.
const app = express();

// Establish a route, that will send a response message object with "Hello world"
app.get('/', (req, res) => res.send('Hello, world!'));

// Set up the server to listen to a specified port, in this case PORT = 3000
const PORT = 3000;
app.listen(PORT, () =>
    console.log(`My first express app - listening on port ${PORT}!`)
);

// With this, we have a very barebones app set up, with a simple request/response action app.get
// It listens on port 3000 of the localhost domain.

// This app can now be launched using node in a terminal!
// node app.js

// returns "My first express app - listening on port 3000!"
