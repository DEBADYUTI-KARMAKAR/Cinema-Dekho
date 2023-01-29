import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

//187fa3da

const API_URL = "http://www.omdbapi.com?apikey=187fa3da";

// const movie1 = {
//   Title: "The Avengers",
//   Year: "2012",
//   imdbID: "tt0848228",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);


  useEffect(() => {
    searchMovies("avengers");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  };

  return (
    <div className="app">

      <h1>Movie Dekho</h1>

      <div className="search">
        <input
         
          placeholder="Search for a movie"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <img src={SearchIcon}
         alt="search-icon" 
        onClick={() => searchMovies(searchMovie)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
