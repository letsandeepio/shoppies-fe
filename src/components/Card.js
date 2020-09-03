import React, { useState } from 'react';
import './Card.css';

import { useStateValue } from '../context/StateProvider';
import { TrophyOutlined } from '@ant-design/icons';

import { motion } from 'framer-motion';

const Card = ({ movie }) => {
  const [{ nominatedMovies, isNominationFull }, dispatch] = useStateValue();
  const [showButton, setShowButton] = useState(false);
  const isNominated = nominatedMovies.includes(movie.imdbID);
  return (
    <motion.div
      className="card"
      whileHover={{
        scale: 1.1
      }}
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div
        className="card__content"
        style={{
          backgroundImage: `url(${
            movie.Poster === 'N/A'
              ? 'https://dummyimage.com/150x200/efefef/000000.png&text=Poster+not+available'
              : movie.Poster
          })`,
          backgroundSize: 'cover'
        }}
      >
        {isNominated && <div className="stamp is-easy">nominated</div>}
        <div className="card__action">
          {showButton && (
            <motion.button
              onClick={() =>
                dispatch({ type: 'ADD_NOMINATION', id: movie.imdbID })
              }
              disabled={isNominated || isNominationFull}
              animate={{
                scale: 1
              }}
              initial={{
                scale: 0
              }}
            >
              <TrophyOutlined />
            </motion.button>
          )}
        </div>
        <div className="card__title">
          <strong>{movie.Title}</strong> ({movie.Year})
        </div>
        <div className="card__year"></div>
      </div>
    </motion.div>
  );
};

export default Card;
