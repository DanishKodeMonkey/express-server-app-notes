const asyncHandler = require('express-async-handler');

// Messages controller, with a asynchandler error handler.

const getMessageById = asyncHandler(async (req, res) => {
    // Extract Message id from request parameters
    const MessageId = req.params.id;

    // await the database querying function using extracted MessageId
    // This function would typically be imported from an API file housing DB query functions
    const Message = await exampleDBQueryToGetMessage(MessageId);

    // Error state, if a Message is not found, the Message object will not be true.
    if (!Message) {
        // throw our custom error, and it will be passed to our error handler in app
        throw new CustomNotFoundError('User not found');
    }

    // if Message is found, the Message object will be true, return the Message.name
    // this response will be sent alongside a status code 200 *OK*
    res.status(200).send(`Message found: ${Message.name}`);
});
