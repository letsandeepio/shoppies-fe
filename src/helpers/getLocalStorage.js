import { AUTH_TOKEN, USER_NAME, NOMINATED_MOVIES } from '../helpers/constants';

const getLocalStorage = (initState) => {
  const nominatedMovies =
    JSON.parse(localStorage.getItem(NOMINATED_MOVIES)) || [];
  const isLoggedIn = !!localStorage.getItem(AUTH_TOKEN);
  const userName = localStorage.getItem(USER_NAME);

  const localData = {
    nominatedMovies,
    isLoggedIn,
    user: {
      name: userName
    }
  };

  return localData ? { ...initState, ...localData } : initState;
};
export default getLocalStorage;
