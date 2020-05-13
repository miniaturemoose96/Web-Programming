// Extra credit component, search History
const searchHistoryComponent = {
    template: ` <div>
                    <div class="col" v-for="film in searchHistory">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <small>
                                You selected: {{ film.selected }}
                                <br/>
                                @: {{ film.timestamp }}
                            </small>
                        </li>
                    </ul>
                    </div>
                </div>`,
    props: ['searchHistory'],
};


// This file keeps track of vue instance
const movies = new Vue({
    el: '#ghibliMovies',
    data: {
        appName: 'Ghibli-a-Holic',
        resultsVisible: true,
        canSearch: true,
        movieSearched: '',
        films: [],
        oneFilm: [],
        images: [],
        searchHistory: []
    },
    mounted() {
        // Load the json information for my images
        this.getImageInfo();
    },
    computed: {
        numOfMovies: function() {
            return this.films.length;
        }
    },
    methods: {
        searchMovies: async function() {
            const response = await axios.get(`http://localhost:8888/api/movies/${this.movieSearched}`);
            const result = response.data;

            this.films = result;
            this.movieSearched = '';
        },
        selectMovie: async function(movieId) {
            const response = await axios.get(`http://localhost:8888/api/one-movie/${movieId}`);
            const result = response.data;
            this.oneFilm = result;
        },
        getImageInfo: async function() {
            // Sets images of all the movies
            const response = await axios.get('http://localhost:8888/api/images');
            this.images = response.data;
            console.log(this.images);
        },
        trackHistory: function() {
            const date = new Date().toLocaleString('en-US');

            // if empty string do nothing 
            if (!this.oneFilm.title) {
                return;
            }

            //  else Push history
            this.searchHistory.push({
                selected: this.oneFilm.title,
                timestamp: date,
            });
        },
        newSearch: function() {
            // update the  search history list
            // Keep track of the movie the user selected
            this.trackHistory();

            // set all variables back to default case
            this.canSearch = true;
            this.resultsVisible = true;
            this.films = [];
            this.oneFilm = [];
        },
        backToResults: function() {
            // update the  search history list
            // Keep track of the movie the user selected
            this.trackHistory();

            // set only one film back to default 
            // that way if the user selects another film in 
            // populates its correctly
            this.oneFilm = [];
            this.resultsVisible = true;
        }
    },
    components: {
        'history-component': searchHistoryComponent,
    }
});