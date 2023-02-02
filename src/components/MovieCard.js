import React from "react";
import * as actions from "./context/actionsTypes";
import { useMovieContext } from "./context/GlobalContext";
import "./MovieCard.css";

const MovieCard = ({ movie, type }) => {
  const movieContext = useMovieContext();
  return (
    <div className="movie-card">
      <div className="over-lay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <div className="icons-controls">
        <button
          onClick={() => {
            if (type === "watchlist") {
              movieContext.dispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              });
            }
            if (type === "watched") {
              movieContext.dispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              });
            }
          }}
        >
          {type === "watchlist" ? (
            <i className="fas fa-eye" />
          ) : (
            <i className="fas fa-eye-slash" />
          )}
        </button>
        <button
          onClick={() => {
            if (type === "watchlist") {
              movieContext.dispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie,
              });
            }
            if (type === "watched") {
              movieContext.dispatch({
                type: actions.REMOVE_FROM_WATCHED,
                payload: movie,
              });
            }
          }}
        >
          <i className="fas fa-x" />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
