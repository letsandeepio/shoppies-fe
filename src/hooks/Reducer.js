export const initialState = {
  searchTerm: '',
  nominatedMovies: []
};

export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  ADD_NOMINATION: 'ADD_NOMINATION',
  REMOVE_NOMATION: 'REMOVE_NOMATION'
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    case actionTypes.ADD_NOMINATION:
      return {
        ...state,
        nominatedMovies: [...state.nominatedMovies, action.id]
      };
    default:
      return state;
  }
};

export default reducer;
