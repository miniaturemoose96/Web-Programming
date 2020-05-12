// This file keeps track of vue instance
const movies = new Vue({
    el: '#ghibliMovies',
    data: {
        appName: 'Ghibli-a-Holic',
        visible: true,
        movieSearched: '',
        movieSelected: '',
        films: [],
        oneFilm: {},
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
            const response = await axios.get(`/api/movies/${this.movieSearched}`);
            const result = response.data;

            this.films = result;
            this.movieSearched = '';
        },
        selectMovie: async function() {
            const response = await axios.get(`/api/one-movie/${this.movieSelected}`)
            const result = response.data;

            this.oneFilm = result;
            console.log(this.oneFilm);
        },
        getImageInfo: async function() {
            // Sets images of all the movies
            const response = await axios.get('http://localhost:8888/api/images');
            this.images = response.data;
            console.log(this.images);
        }
    }
})