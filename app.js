/* The app.js file

App.js will server as the starting point for the Express server. 
The file can be named anything we want, such as index.js, or main.js.
For the purposes of this project, we will simply go with app.js, 
as stated in the Express docs

*/

// Import express
const express = require('express');

// Initialize the app variable using Express, this will be our server.
const app = express();

// Common middleware built-in to express
// urlencoded parses form payloads and assigns it to req.body
app.use(express.urlencoded({ extended: false }));

// Example format of a custom application level middleware,
// just remember to call next at the end
app.use((req, res, next) => {
    // Some custom code here, could be authentication, could be logging, or something entirely different

    // REmember, call next to proceed to the next middleware in the chain
    next();
});

// Part 3 - Routers
// import routers
const messagesRouter = require('./routes/messagesRouter');
const usersRouter = require('./routes/usersRouter');
const indexRouter = require('./routes/indexRouter');

// Assign base paths to respective router modules.
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

// custom error, extending existing Error object.
class CustomNotFoundError extends Error {
    // create constructor, passing the error message to a new instance of the Error class.
    constructor(message) {
        // inherit the parent constructor to set the message property.
        super(message);
        // assign a statusCode property to each new instance of the class.
        this.statusCode = 404;
        // assign a custom name for the error
        this.name = 'NotFoundError';
    }
}

// Final application level middleware for error handling
// Notice the forth argument, err.
// This is required for express to recognise this middleware as a error handler.
app.use((err, req, res, next) => {
    // pass error object to console for developer, and respond to client with a 500 errror.
    console.error(err);
    // use our custom error class, or default to 500
    res.status(err.statusCode || 500).send(err.message);

    // more fine grained control of error handling, like for specific error codes, 404, 501 etc.
    // Could also be handled here, in order, before the catch all 500 error would pass it as a generic error.
});
const PORT = 3000;
app.listen(PORT, () =>
    console.log(`My first express app - listening on port ${PORT}!`)
);

// With this, we have a very barebones app set up, with a simple request/response action app.get
// It listens on port 3000 of the localhost domain.

// This app can now be launched using node in a terminal!
// node app.js

// returns "My first express app - listening on port 3000!"
