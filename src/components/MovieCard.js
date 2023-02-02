import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="over-lay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <div className="icons-controls">
        <button>
          {type === "watchlist" ? (
            <i className="fas fa-eye" />
          ) : (
            <i className="fas fa-eye-dash" />
          )}
        </button>
        <button>
          <i className="fas fa-x" />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
