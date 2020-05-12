// This file keeps track of vue instance
const movies = new Vue({
    el: '#ghibliMovies',
    data: {
        appName: 'Ghibli-a-Holic',
        movieSearched: '',
        films: [],
        images: [],
        filteredFilms: [],
        oneFilm: {}
    },
    mounted() {
        // Load the json information for my images
        this.getImageInfo();
        this.getFilms();
    },
    computed: {
        // catalog size
        catalogSize: function() {
            return this.filteredFilms.length;
        },
        // filter during search
        // This holds all films and information
        // filteredFilmList: function() {
        //     return this.films.filter(film => {
        //         return film.title.toLowerCase().includes(this.movieSearched.toLowerCase());
        //     });
        // }
    },
    methods: {
        searchCatalog: function() {

        },
        getFilms: async function() {
            // make an http request from server
            const response = await axios.get('http://localhost:8888/api/catalog');
            this.films = response.data;
            // Access images info and check equality with id's to display image and title
            console.log(this.films);
        },
        // Make fucntion that gets movies by id
        // this will call response from routes to function that returns movie by id
        getOneFilm: async function() {
            const response = await axios.post('http://localhost:8888/api/movie', {
                id: this.selectedMovie
            });
            this.oneFilm = response.data;
            console.log(this.oneFilm)
        },
        getImageInfo: async function() {
            // Sets images of all the movies
            const response = await axios.get('http://localhost:8888/api/images');
            this.images = response.data;
            console.log(this.images);
        }
    }
})