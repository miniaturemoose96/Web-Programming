const deckofcards = require('deckofcards');
const express = require('express');
const router = express.Router();

router.get('/play', async (req, res) => {
    const shuffle = true;
    const n = 5;

    try {
        const deck = await deckofcards.deck(shuffle);
        const drawn = await deckofcards.draw(deck.deck_id, n);

        res.json(drawn);
    } catch (error) {
        res.json(error);
    }
});

router.post('/throwaway', async (req, res) => {
    const { deck, selectedCards } = req.body;

    const remainingCards = deck.cards.filter((card) => !selectedCards.includes(card.code));

    const drawn = await deckofcards.draw(deck.deck_id, selectedCards.length);
    const hand = remainingCards.concat(drawn.cards);
    drawn.cards = hand;

    res.json(drawn);
});

module.exports = router;
