// the custom deckofcards module
// install by using: npm install ../deckofcards (this is the relative file path)
const deckofcards = require('deckofcards');
const inquirer = require('inquirer');

// helper functions for printing
const _print = (result, remaining) => {
    result.forEach(card => {
        console.log(`${card.value} of ${card.suit}`);
    });
    console.log(`Remaining Cards: ${remaining}`);
};

const _discardPrompt = async cards => {
    // return a new array of objects where name is what is displayed to the user
    // and value is what is returned from the inquirer prompt
    const displayCards = cards.map(card => {
        return { name: `${card.value} of ${card.suit}`, value: card.code };
    });

    // create an inquirer checkbox prompt
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'cards',
            message: 'select cards to throw away',

            // display the cards to the user for them to select
            choices: displayCards,

            // validate that the user picks less than 4 cards
            validate: cards => {
                if (cards.length > 4) {
                    return 'You may only select up to four cards';
                } else {
                    return true;
                }
            }
        }
    ]);
};

// find and remove the throwaways from the original hand
const _findAndRemove = (original, throwaway) => {
    // use the filter function on the original cards array (array of objects) to return a new array
    return original.filter(card => {
        // if the card.code is NOT included in the throwaway array (array of strings) then keep it
        return !throwaway.includes(card.code);
    });
};

// function for playing 5 card draw
// deal a user 5 cards and ask them which they want to throwaway
// replace those cards with new ones
async function play() {
    // hard code the rules of the game
    const shuffle = true;
    const count = 5;

    // get a deck of cards that are shuffled and then draw 5 cards
    const deckResponse = await deckofcards.deck(shuffle);
    const originalHand = await deckofcards.draw(deckResponse.deck_id, count);

    // prompt the user to select which cards to throwaway
    const throwaway = await _discardPrompt(originalHand.cards);

    // find and remove the cards from the original hand that need to be thrown away
    const filterCards = _findAndRemove(originalHand.cards, throwaway.cards);

    // draw the same number of cards that were removed
    // the number of cards removed matches the throwaway.cards.length
    const newCards = await deckofcards.draw(
        deckResponse.deck_id,
        throwaway.cards.length
    );

    // concat the filtered hand and the new cards to make a complete 5 card hand
    const finalHand = filterCards.concat(newCards.cards);
    _print(finalHand, newCards.remaining);
}

// export the play function so that it can be used in the cli.js
module.exports = {
    play
};
