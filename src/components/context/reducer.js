import * as actions from "./actionsTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
      };
    case actions.MOVE_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watchList: [action.payload, ...state.watchList],
      };
    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watched: [...state.watched, action.payload],
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
      };
    case actions.REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
      };
    default:
      return state;
  }
};
