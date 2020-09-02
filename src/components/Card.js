import React from 'react';
import './Card.css';

import { useStateValue } from '../context/StateProvider';

const Card = ({ movie }) => {
  const [{ nominatedMovies, isNominationFull }, dispatch] = useStateValue();
  return (
    <div className="card">
      <img
        src={
          movie.Poster === 'N/A'
            ? 'https://dummyimage.com/150x200/efefef/000000.png&text=Poster+not+available'
            : movie.Poster
        }
        alt=""
      ></img>
      <h6>
        {movie.Title}({movie.Year})
      </h6>
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
