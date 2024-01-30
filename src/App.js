import "./App.css";
import Form from "./Components/Form";
import MovieDisplay from "./Components/MovieDisplay";

function App() {
  // Constant with your API Key
  const apiKey = "5dfd185c";
  return (
    <div className="App">
      <h1>Fetching Movies From an API </h1>
      <MovieDisplay />
      <Form />
    </div>
  );
}

export default App;
