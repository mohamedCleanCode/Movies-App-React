import React from "react";
import "./AddPageCard.css";
import * as actions from "./context/actionsTypes";
import { useMovieContext } from "./context/GlobalContext";

const AddPageCard = (props) => {
  const movieContext = useMovieContext();
  const { Title, Year, imdbID, Poster } = props.movie;
  const statusWatchList = movieContext.watchList.find((movie) => {
    return movie.imdbID === props.movie.imdbID;
  });
  const statusWatched = movieContext.watched.find((movie) => {
    return movie.imdbID === props.movie.imdbID;
  });
  return (
    <div className="add-page-card">
      {Poster ? (
        <img src={Poster} alt={Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <div className="info">
        <p className="title">{Title}</p>
        <p className="year">{Year}</p>
        <div className="controls">
          <button
            disabled={statusWatchList || statusWatched}
            className="btn"
            onClick={() =>
              movieContext.dispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: props.movie,
              })
            }
          >
            Add To Watch List
          </button>
          <button
            disabled={statusWatched}
            className="btn"
            onClick={() =>
              movieContext.dispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: props.movie,
              })
            }
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPageCard;
