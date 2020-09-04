import React from 'react';
import { useStateValue } from '../context/StateProvider';
import NominatedCard from './NominatedCard';
import './Nomination.css';
import { TrophyOutlined } from '@ant-design/icons';
import { AnimatePresence } from 'framer-motion';

const Nomination = ({ mode, nominatedMoviesList }) => {
  const [{ nominatedMovies }] = useStateValue();
  const movies = mode === 'view' ? nominatedMoviesList : nominatedMovies;
  return (
    <div className="nomination">
      <h3>
        <TrophyOutlined />
      </h3>
      <h3>your nominations</h3>

      <div className="nomination__container">
        <AnimatePresence>
          {movies.map((imdbID, i) => (
            <NominatedCard key={imdbID} imdbID={imdbID} index={i} mode={mode} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nomination;
