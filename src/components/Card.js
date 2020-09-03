import React from 'react';
import './Card.css';

import { useStateValue } from '../context/StateProvider';

const Card = ({ movie }) => {
  const [{ nominatedMovies, isNominationFull }, dispatch] = useStateValue();
  return (
    <div
      className="card"
      style={{
        background: `url(${
          movie.Poster === 'N/A'
            ? 'https://dummyimage.com/150x200/efefef/000000.png&text=Poster+not+available'
            : movie.Poster
        })`,
        backgroundSize: 'cover'
      }}
    >
      <div className="card__title">{movie.Title}</div>
      <div className="card__year">{movie.Year}</div>
      <button
        onClick={() => dispatch({ type: 'ADD_NOMINATION', id: movie.imdbID })}
        disabled={nominatedMovies.includes(movie.imdbID) || isNominationFull}
      >
        Nominate
      </button>
      {nominatedMovies.includes(movie.imdbID) && 'Nominate'}
    </div>
  );
};

export default Card;
