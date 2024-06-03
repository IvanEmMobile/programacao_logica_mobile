class MovieCard {
    constructor(movie) {
        this.movie = movie;
    }

    render() {
        const movieCardHTML = `
        <div class="movie-card">
          <img src="${this.movie.poster}" alt="Movie Poster">
          <div class="movie-info">
            <h2>${this.movie.title}</h2>
            <p>${this.movie.description}</p>
            <button>Assista Agora</button>
          </div>
        </div>
      `;
        return movieCardHTML;
    }
}

class MovieList {
    constructor(movies) {
        this.movies = movies;
    }

    render() {
        const movieListHTML = `
        <div class="movie-list">
          <h2>Sua Lista</h2>
          <div class="movie-grid">
            ${this.movies.map((movie) => new MovieCard(movie).render()).join('')}
          </div>
        </div>
      `;
        return movieListHTML;
    }
}

const movies = [
    { title: 'Aventura', poster: '/assents/heroi.png', description: 'Encare essa Aventura' },
    { title: 'Terror', poster: '/assents/heroi_dois.png', description: 'Seu medo está ai do seu lado!' },
    { title: 'Desenho', poster: '/assents/heroi_tres.png', description: 'Curta e viva sua criança!' },
];

const movieList = new MovieList(movies);
const movieListHTML = movieList.render();

document.body.innerHTML = movieListHTML;
