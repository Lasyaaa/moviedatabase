import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.movie}</h2>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Year:</strong> {movie.year}</p>
    </div>
  );
};

export default MovieCard;
