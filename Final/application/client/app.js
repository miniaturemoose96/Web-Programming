// This file keeps track of vue instance
const movies = new Vue({
    el: '#ghibliMovies',
    data: {
        appName: 'Ghibli-a-Holic',
        searchedMovie: '',
        films: [],
        images: []
    },
    mounted() {
        // Load the json information for my images
        this.getImageInfo();
        this.getFilms();
    },
    computed: {
        // catalog size
        catalogSize: function() {
            return this.films.length;
        },
        displayMovieSearch: function() {
            const movie = this.searchedMovie.toLowerCase();
            if (!movie) {
                return;
            }

            this.films = this.films.filter(film => {
                const filmTitle = film.title.toLowerCase();
                return filmTitle.includes(movie);
            });

            this.searchedMovie = '';
        }
    },
    methods: {
        getFilms: async function() {
            // make an http request from server
            const response = await axios.get('http://localhost:8888/api/catalog');
            this.films = response.data;
            // Access images info and check equality with id's to display image and title
            console.log(this.films);
        },
        getImageInfo: async function() {
            // Sets images of all the movies
            const response = await axios.get('http://localhost:8888/api/images');
            this.images = response.data;
            console.log(this.images);
        }
    }
})