import React from 'react';
import './Card.css';

import { useStateValue } from '../context/StateProvider';
import { TrophyOutlined } from '@ant-design/icons';

const Card = ({ movie }) => {
  const [{ nominatedMovies, isNominationFull }, dispatch] = useStateValue();
  return (
    <div className="card">
      <div
        className="card__content"
        style={{
          background: `url(${
            movie.Poster === 'N/A'
              ? 'https://dummyimage.com/150x200/efefef/000000.png&text=Poster+not+available'
              : movie.Poster
          })`,
          backgroundSize: 'cover'
        }}
      >
        <div className="card__action">
          <button
            onClick={() =>
              dispatch({ type: 'ADD_NOMINATION', id: movie.imdbID })
            }
            disabled={
              nominatedMovies.includes(movie.imdbID) || isNominationFull
            }
          >
            <TrophyOutlined />
          </button>
        </div>
        <div className="card__title">
          {movie.Title}({movie.Year})
        </div>
        <div className="card__year"></div>
      </div>
    </div>
  );
};

export default Card;
