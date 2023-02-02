import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./WatchList.css";

const WatchList = (props) => {
  const movieContext = useMovieContext();
  return (
    <div className="watch-list-page same-page">
      <div className="container">
        <div className="heading-same">
          <h1 className="heading">WatchList</h1>
          {movieContext.watchList.length && (
            <p className="movies-count-same">
              {movieContext.watchList.length}
              {movieContext.watchList.length === 1 ? (
                <span className="ms-5">Movie</span>
              ) : (
                <span className="ms-5">Movies</span>
              )}
            </p>
          )}
        </div>
        <div className="grid-same mt-20">
          {movieContext.watchList.map((movie) => {
            return (
              <MovieCard key={movie.imdbID} type="watchlist" movie={movie} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
