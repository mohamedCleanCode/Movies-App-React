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
          <h1 className="heading">
            {props.name === "watchlist" ? "Watch List" : "Watched"}
          </h1>
          {movieContext.watchList.length && props.name === "watchlist" ? (
            <p className="movies-count-same">
              {movieContext.watchList.length}
              {movieContext.watchList.length === 1 ? (
                <span className="ms-5">Movie</span>
              ) : (
                <span className="ms-5">Movies</span>
              )}
            </p>
          ) : movieContext.watched.length && props.name === "watched" ? (
            <p className="movies-count-same">
              {movieContext.watched.length}
              {movieContext.watched.length === 1 ? (
                <span className="ms-5">Movie</span>
              ) : (
                <span className="ms-5">Movies</span>
              )}
            </p>
          ) : null}
        </div>
        <div className="grid-same mt-20">
          {props.name === "watchlist"
            ? movieContext.watchList.map((movie) => {
                return (
                  <MovieCard
                    key={movie.imdbID}
                    type="watchlist"
                    movie={movie}
                  />
                );
              })
            : movieContext.watched.map((movie) => {
                return (
                  <MovieCard key={movie.imdbID} type="watched" movie={movie} />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
