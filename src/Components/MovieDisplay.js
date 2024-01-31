import React from "react";
import "./style.css";

function MovieDisplay({ movie }) {
  // Function to return loaded JSX
  const loaded = () => {
    return (
      <div className="container">
        <h1>Movie Title: {movie.Title}</h1>
        <h3>Director: {movie.Director}</h3>
        <h2>Genre: {movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>Year: {movie.Year}</h2>
        <h2>Language: {movie.Language}</h2>
        <p>Plot: {movie.Plot}</p>
        <h4>Runtime: {movie.Runtime}</h4>
      </div>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
}

export default MovieDisplay;
