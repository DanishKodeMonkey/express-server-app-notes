// Messages controller

const getMessageById = async (req, res) => {
    // Extract Message id from request parameters
    const MessageId = req.params.id;

    // await the database querying function using extracted MessageId
    // This function would typically be imported from an API file housing DB query functions
    const Message = await exampleDBQueryToGetMessage(MessageId);

    // Error state, if a Message is not found, the Message object will not be true.
    if (!Message) {
        // respond with a 404 status code, and a message body saying Message not found
        res.status(404).send('Message not found');
        // end the function
        return;
    }

    // if Message is found, the Message object will be true, return the Message.name
    // this response will be sent alongside a status code 200 *OK*
    res.status(200).send(`Message found: ${Message.name}`);
};
