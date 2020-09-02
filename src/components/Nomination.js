import React from 'react';
import { useStateValue } from '../context/StateProvider';
import NominatedCard from './NominatedCard';

const Nomination = () => {
  const [{ nominatedMovies }] = useStateValue();
  return (
    <div>
      <h1>Nominated Movies</h1>
      <ul>
        {nominatedMovies.map((imdbID) => (
          <NominatedCard key={imdbID} imdbID={imdbID} />
        ))}
      </ul>
    </div>
  );
};

export default Nomination;
