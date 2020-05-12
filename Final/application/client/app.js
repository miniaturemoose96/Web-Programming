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
        newSearch: function() {
            this.canSearch = true;
            this.resultsVisible = true;
            this.films = [];
            this.oneFilm = [];
        }
    }
})