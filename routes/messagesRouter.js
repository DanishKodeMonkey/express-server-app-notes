// Import Router module of express
const { Router } = require('express');

// Destructure Express object to get a router function, and create a Router to use its methods.
const messagesRouter = Router();

// Establish paths using the newly established router

// Route to get all messages (middleware would usually handle fetching all messages from a database)
messagesRouter.get('/', (req, res) => res.send(`All messages`));

// Route to get specific message (handling could include searching database for messageId and return data)
messagesRouter.get('/:messageId', (req, res) => {
    const { messageId } = req.params;
    res.send(`Message ID: ${messageId}`);
});

// Finally, export the Router module we have made
module.exports = messagesRouter;

// We can now import and use the router elsewhere (in app.js)
