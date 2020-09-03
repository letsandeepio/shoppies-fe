export const initialState = {
  searchTerm: '',
  nominatedMovies: [],
  isNominationFull: false,
  isLoggedIn: false,
  user: {}
};

export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  ADD_NOMINATION: 'ADD_NOMINATION',
  REMOVE_NOMINATION: 'REMOVE_NOMINATION',
  SET_NOMINATION_FULL: 'SET_NOMINATION_FULL',
  SET_LOGGED_IN: 'SET_LOGGED_IN',
  SET_USER: 'SET_USER'
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
    case actionTypes.SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.status
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: { ...action.user }
      };
    default:
      return state;
  }
};

export default reducer;
