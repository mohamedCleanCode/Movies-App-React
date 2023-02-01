import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  watchList: [],
  watched: [],
};

export const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        dispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useMovieContext = () => {
  return useContext(GlobalContext);
};
