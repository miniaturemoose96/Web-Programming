const superagent = require('superagent');

// config file to hold the base URL (or API key where applicable)
const config = require('./config.json');

// a function that gets a deck of cards from the API
const deck = async shuffle => {
    const deckUrl = `${config.url}${shuffle ? '/new/shuffle' : '/new'}`;
    try {
        const deckResponse = await superagent.get(deckUrl);
        return deckResponse.body;
    } catch (error) {
        return error;
    }
};

// a function that allows n number of cards to be drawn from a specified deck
const draw = async (deck_id, count) => {
    const drawUrl = `${config.url}/${deck_id}/draw/?count=${count}`;
    try {
        const drawResponse = await superagent.get(drawUrl);
        return drawResponse.body;
    } catch (error) {
        return error;
    }
};

// export these functions so they can be used
module.exports = {
    deck,
    draw
}
