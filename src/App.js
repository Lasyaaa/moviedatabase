import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    try {
      const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=42376dae');
      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (err) {
      console.error('Failed to fetch movie:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="App">
      <h1>🎬 Movie Info</h1>
      {loading ? (
        <p>Loading movie...</p>
      ) : movie ? (
        <div className="movie-card">
          <img src={movie.Poster} alt={movie.Title} style={{ width: '200px' }} />
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
}

export default App;
