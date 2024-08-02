const userController = require('../controllers/userController');

// Import Router module of express
const { Router } = require('express');

// Destructure Express object to get a router function, and create a Router to use its methods.
const usersRouter = Router();

// Establish paths using the newly established router

// Route to get all users in-line (would usually handle fetching user data from a database)
usersRouter.get('/', (req, res) => res.send(`All users`));

// Route to get specific user using controller.
usersRouter.get('/:username', userController.getUserById);

// Finally, export the Router module we have made
module.exports = usersRouter;

// We can now import and use the router elsewhere (in app.js)
