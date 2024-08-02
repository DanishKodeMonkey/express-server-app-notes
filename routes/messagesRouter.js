// import controller
const messageController = require('../controllers/messageController');

// Import Router module of express
const { Router } = require('express');

// Destructure Express object to get a router function, and create a Router to use its methods.
const messagesRouter = Router();

// Establish paths using the newly established router

// Route to get all messages in-line (middleware would usually handle fetching all messages from a database)
messagesRouter.get('/', (req, res) => res.send(`All messages`));

// Route to get specific message using controller
messagesRouter.get('/:messageId', messageController.getMessageById);

// Finally, export the Router module we have made
module.exports = messagesRouter;

// We can now import and use the router elsewhere (in app.js)
