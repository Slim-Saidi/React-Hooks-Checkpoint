import React from "react";
import { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
//import MovieCard from "./Components/MovieCard";
import AddMovie from "./Components/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Undisputed II: Last Man Standing",
      date: 2006,
      genre: "Action",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1a/UndisputedIIposter.jpg",
      rate: 5,
    },
    {
      title: "Undisputed III: Redemption",
      date: 2010,
      genre: "Action",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/0/08/Undisputed_III_Redemption.jpg",
      rate: 5,
    },
    {
      title: "The Conjuring",
      date: 2013,
      genre: "Horror",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg",
      rate: 4,
    },
    {
      title: "The Expendables 3",
      date: 2014,
      genre: "Action",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/5/55/Expendables_3_poster.jpg",
      rate: 4,
    },
    {
      title: "The Hangover",
      date: 2009,
      genre: "Comedy",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg",
      rate: 4,
    },
    {
      title: "The Hangover Part II",
      date: 2011,
      genre: "Comedy",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/9/9d/HangoverPart2MP2011.jpg",
      rate: 3,
    },
  ]);

  const addMovie = (title, date, genre, poster, rate) => {
    setMovies([...movies, { title, date, genre, poster, rate }]);
  };

  return (
    <div className="App">
      <AddMovie addMovies={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
