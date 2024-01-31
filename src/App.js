import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Components/Form";
import MovieDisplay from "./Components/MovieDisplay";

function App() {
  // Constant with your API Key
  const apiKey = "5dfd185c";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Fetching Movies From an API </h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay />
    </div>
  );
}

export default App;
