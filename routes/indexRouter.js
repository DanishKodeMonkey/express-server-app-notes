// import controller functions to use here
const indexController = require('../controllers/indexController');

// Import Router module of express
const { Router } = require('express');

// Destructure Express object to get a router function, and create a Router to use its methods.
const indexRouter = Router();

// Establish paths using the newly established router

// Route to greet user, call index controller function
indexRouter.get('/', indexController.viewIndexGreeting);

// Finally, export the Router module we have made
module.exports = indexRouter;

// We can now import and use the router elsewhere (in app.js)
