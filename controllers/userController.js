// users controller

const getUserById = async (req, res) => {
    // Extract user id from request parameters
    const userId = req.params.id;

    // Start try/catch block
    try {
        // await the database querying function using extracted userId
        // This function would typically be imported from an API file housing DB query functions
        const user = await exampleDBQueryToGetUser(userId);

        // Error state, if a user is not found, the user object will not be true.
        if (!user) {
            // respond with a 404 status code, and a message body saying User not found
            res.status(404).send('User not found');
            // end the function
            return;
        }

        // if user is found, the user object will be true, return the user.name
        // this response will be sent alongside a status code 200 *OK*
        res.status(200).send(`User found: ${user.name}`);
        // Catch errors from try block (if any) and assign to error object.
    } catch (error) {
        // Print to console for developer
        console.error('Error retrieving user:', error);
        // Gracefully respond with error to end-user.
        res.status(500).send('Internal Server Error');
        /* 
    Alternatively, call the next(error) function and pass the response error to the next middleware.
    This could be a error handling middleware at the end of the chain. 
    If no middleware is provided, express will render a error page in HTML using express default view.
    Which is not very pretty for the user.
    */
    }
};
