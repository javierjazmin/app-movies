const movies = require("./movies.js");
//console.log(movies); Microdesafio 1 terminado.
const moviesDH = {

    movies: movies,

    listMovies: function () {
        movies.forEach(function (pelicula, index) {
            console.log((index + 1) + (" => ") + (pelicula.title));
        })
    },

    searchMovie: function (nombre) {
        let peliBuscada = this.movies.find(function (pelicula) {
            return pelicula.title == nombre;
        })
        if (peliBuscada) {
            return peliBuscada;
        }
        else { return null };
    },

    searchMovieById: function(numero) {
        let peliBuscadaId = this.movies.find(function(pelicula){
            return pelicula.id == numero;
        })        
        if(peliBuscadaId){
            return peliBuscadaId;
        }
        else{return null}

    },
    
    searchMovieByGenre: function(genero){
        let generoBuscado = movies.find(function (pelicula) {
            return genero == pelicula.genre;
        })
        if(generoBuscado){
            return generoBuscado;
        }else {return null}
        
    },

    
totalPrice: function() {
    let precios = [];
    for(let i = 0; i < this.movies.length; i++){
        precios.push(movies[i].price)
    }
    let total = precios.reduce(function(acum, num){
        return acum + num;
    },0)
    return total;
},

changeMovieGenre: function(num, genero) {
    let peliEncontrada = this.searchMovieById(num);
    peliEncontrada.genre = genero;
    return peliEncontrada;

},
}

moviesDH.listMovies();
//console.log(moviesDH.searchMovie("Terminator 2"));
//console.log(moviesDH.searchMovieByGenre("Comedia"));
//console.log(moviesDH.searchMovieById(9));
//console.log(moviesDH.totalPrice());
//console.log(moviesDH.changeMovieGenre(2,"Acción"));
   

