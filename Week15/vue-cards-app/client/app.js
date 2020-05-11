const gameTrackerComponent = {
    template: `<div>
                    <div class="col" v-for="game in gameTracker">
                        <ul>
                            <li>
                                <small>
                                    Deck Used: {{ game.deck_id }}
                                    <br/>
                                    @ {{ game.time }}
                                </small>
                            </li>
                        </ul>
                    </div>
                </div>`,
    prop: ['gameTracker']
}

const cards = new Vue({
    el: '#cards',
    data: {
        appName: 'Deck of Cards App',
        shuffle: '',
        numberOfCards: '',
        deck: {},
        isPlaying: false,
        selectedCards: [],
        gameTracker: [],
    },
    computed: {
        remainingCards: function() {
            if (this.deck && this.deck.cards) {
                return this.deck.remaining;
            } else {
                return 0;
            }
        },
    },
    methods: {
        playGame: async function() {
            this.isPlaying = true;

            const response = await axios.get(`http://localhost:8888/api/play`);
            this.deck = response.data;
        },
        throwaway: async function() {
            const response = await axios.post(`http://localhost:8888/api/throwaway`, {
                deck: this.deck,
                selectedCards: this.selectedCards,
            });

            this.deck = response.data;
            this.isPlaying = false;
        },
        trackGame: function() {
            const now = new Date().toLocaleString('en-US');

            this.gameTracker.push({
                deck_id: this.deck.deck_id,
                time: now
            });

        },
        clear: function() {
            this.trackGame();

            this.deck = {};
            this.numberOfCards = '';
            this.shuffle = '';
            this.selectedCards = [];
        }
    },
    components: {
        'tracker-component': gameTrackerComponent
    }
});