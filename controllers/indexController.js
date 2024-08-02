// users controller

const viewIndexGreeting = async (req, res) => {
    res.status(200).send(`Greetings!`);
};

module.exports = { viewIndexGreeting };
