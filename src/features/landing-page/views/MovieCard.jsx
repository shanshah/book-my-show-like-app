import React from 'react';

import '../styles/movie-card.css'

const MovieCard = (props) => {
  const movieList = props.movies.map((movie) =>
    <div key={movie.imdbID} className="card" onClick={props.handleMovieCardClick}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: '100%' }} />
    </div>
  );
  return (
    <div className="cards">
      {movieList}
    </div>
  );
  
  
};

export default MovieCard;
