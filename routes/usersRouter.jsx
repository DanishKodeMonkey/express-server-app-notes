// Import Router module of express
const { Router } = require('express');

// Destructure Express object to get a router function, and create a Router to use its methods.
const usersRouter = Router();

// Establish paths using the newly established router

// Route to get all users (would usually handle fetching user data from a database)
usersRouter.get('/', (req, res) => res.send(`All users`));

// Route to get specific user (handling could include searching database for userID and return data)
usersRouter.get('/:username', (req, res) => {
    const { userId } = req.params;
    res.send(`User ID: ${userId}`);
});

// Finally, export the Router module we have made
module.exports = usersRouter;

// We can now import and use the router elsewhere (in app.js)
