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

// Part 3 - Routers
// import routers
const messagesRouter = require('./routes/messagesRouter');
const usersRouter = require('./routes/usersRouter');
const indexRouter = require('./routes/indexRouter');

// Assign paths to routers
app.use('/messages', messagesRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

/* PART 2-2.4 (Uncomment for testing)

// Establish a route, that will send a response message object with "Hello world"
app.get('/', (req, res) => res.send('Hello, world!'));
//Another path, app.post will send any posts requests sent to the path localhost:3000/messages here
app.post('/messages', (req, res) =>
    res.send(' This is where you can eventually see all messages.')
);
// Route parameter path:
app.get('/:username/messages', (req, res) => {
    // log the request parameter to console
    console.log(`Hello ${req.params.username}!`);
    // PART 2.4 - query parameters
    console.log(`All queries:`, req.query);
    if (req.query.sort) {
        console.log(`Specific query 'sort':`, req.query.sort);
    }
    // end the response.
    res.end();
});

// Route multiple parameters path:
app.get('/:username/messages/:messageId', (req, res) => {
    // Get specific parameters from the params object.
    console.log(
        `Hello ${req.params.username}, you wrote ${req.params.messageId}!`
    );
    // End response.
    res.end();
});

 */

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
