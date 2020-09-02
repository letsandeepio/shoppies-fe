import React, { createContext, useContext, useReducer, useEffect } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children, init }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const { nominatedMovies } = state;

  useEffect(() => {
    localStorage.setItem('nominatedMovies', JSON.stringify(nominatedMovies));
  }, [nominatedMovies]);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
