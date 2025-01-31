// this is where I fetched data from an external data called OMDB -Movie API

import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Components/Form";
import MovieDisplay from "./Components/MovieDisplay";

function App() {
  // Constant with your API Key
  const apiKey = "5dfd185c";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless"); // what should be displayed first
  }, []);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App">
      <h1>Fetching Movies From an API </h1>
      <h3>Search For a Movie </h3>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
