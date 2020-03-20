const superagent = require('superagent');
const inquirer = require('inquirer');

// helper functions for printing
const _print = result => {
    result.cards.forEach(card => {
        console.log(`${card.value} of ${card.suit}`);
    });
    console.log(`Remaining Cards: ${result.remaining}`);
};

// prompt the user by asking a Yes/No question to draw another card
const _anotherCardPrompt = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'card',
            message: 'would you like to draw another card?'
        }
    ]);
};

// the draw which contains our programs logic
// handles getting a deck from the API, drawing a card and calling the prompt function
async function draw(shuffle = true, count = 2) {
    const base = 'https://deckofcardsapi.com/api/deck/';

    // get a deck of cards that are either shuffled or not shuffled depending on the user input
    const deckUrl = `${base}${shuffle ? '/new/shuffle' : '/new'}`;
    const deckResponse = await superagent.get(deckUrl);

    // draw n number of cards from the deck that was requested above (using same deck_id)
    const deck_id = deckResponse.body.deck_id;
    const drawUrl = `${base}/${deck_id}/draw/?count=${count}`;
    const drawResponse = await superagent.get(drawUrl);
    _print(drawResponse.body);

    // prompt the user to draw another card
    const drawAnother = await _anotherCardPrompt();

    // if the user answers yes then draw 1 more card from the same deck (using the same deck_id)
    if (drawAnother.card) {
        const drawAgainUrl = `${base}/${deck_id}/draw/?count=1`;
        const drawAgain = await superagent.get(drawAgainUrl);
        _print(drawAgain.body);
    }
}

// export the draw function so that it can be used in the cli.js
module.exports = {
    draw
};
