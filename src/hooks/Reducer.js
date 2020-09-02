export const initialState = {
  searchTerm: '',
  nominatedMovies: [],
  isNominationFull: false
};

export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  ADD_NOMINATION: 'ADD_NOMINATION',
  REMOVE_NOMINATION: 'REMOVE_NOMINATION',
  SET_NOMINATION_FULL: 'SET_NOMINATION_FULL'
};

const reducer = (state, action) => {
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
    case actionTypes.REMOVE_NOMINATION:
      return {
        ...state,
        nominatedMovies: state.nominatedMovies.filter(
          (item) => item !== action.id
        )
      };
    case actionTypes.SET_NOMINATION_FULL:
      return {
        ...state,
        isNominationFull: action.status
      };
    default:
      return state;
  }
};

export default reducer;
