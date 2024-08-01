import 

// users controller

const viewIndexGreeting = async (req, res) => {
    // Extract user id from request parameters
    const userId = req.params.id;

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
    res.status(200).send(`Greetings! ${user.name}`);
};
