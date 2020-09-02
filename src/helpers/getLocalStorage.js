const getLocalStorage = (initState) => {
  const localData = localStorage.getItem('nominatedMovies');
  return localData
    ? { ...initState, nominatedMovies: JSON.parse(localData) }
    : initState;
};
export default getLocalStorage;
