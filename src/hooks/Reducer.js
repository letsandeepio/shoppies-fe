export const initialState = {
  searchTerm: '',
  nominatedMovies: [],
  isNominationFull: false
};

export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  ADD_NOMINATION: 'ADD_NOMINATION',
  REMOVE_NOMINATION: 'REMOVE_NOMINATION'
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
        nominatedMovies: [...state.nominatedMovies, action.id],
        isNominationFull: state.nominatedMovies.length + 1 >= 5
      };
    case actionTypes.REMOVE_NOMINATION:
      return {
        ...state,
        nominatedMovies: state.nominatedMovies.filter(
          (item) => item !== action.id
        ),
        isNominationFull: state.nominatedMovies.length - 1 >= 5
      };
    default:
      return state;
  }
};

export default reducer;
