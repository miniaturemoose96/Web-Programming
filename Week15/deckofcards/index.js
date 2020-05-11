const config = require('./config');
const superagent = require('superagent');

const _fetch = async command => {
    try {
        const response = await superagent.get(`${config.url}/${command}`);
        return response.body;
    } catch (error) {
        return error;
    }
};

exports.deck = async shuffle => {
    if (shuffle) {
        const cardDeck = await _fetch('deck/new/shuffle/?deck_count=1');
        return cardDeck;
    } else {
        const cardDeck = await _fetch('deck/new/?deck_count=1');
        return cardDeck;
    }
};

exports.draw = async (deckId, count) => {
    const cards = await _fetch(`deck/${deckId}/draw/?count=${count}`);
    return cards;
};
