import React, { useEffect, useState } from "react";
import "./Add.css";
import AddPageCard from "./AddPageCard";

const Add = () => {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${input}&apikey=9c59401`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((error) => console.log(error));
  }, [input, movies]);
  return (
    <div className="add-page">
      <div className="container">
        <div className="input-field">
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        {movies && (
          <ul className="add-page-contant">
            {movies.map((movie) => {
              return (
                <li key={movie.imdbID}>
                  <AddPageCard movie={movie} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Add;
