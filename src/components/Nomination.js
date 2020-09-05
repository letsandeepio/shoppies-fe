import React from 'react';
import { useStateValue } from '../context/StateProvider';
import NominatedCard from './NominatedCard';
import './Nomination.css';
import { TrophyOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const Nomination = ({ mode, nominatedMoviesList, userName }) => {
  const [{ nominatedMovies, user }] = useStateValue();
  const getUserName = userName ? userName : user.name;
  const movies = mode === 'view' ? nominatedMoviesList : nominatedMovies;
  return (
    <div className="nomination">
      <motion.div
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 2.5,
            type: 'spring'
          }
        }}
        initial={{
          opacity: 0
        }}
      >
        <h3>
          <TrophyOutlined />
        </h3>
        <h3>{getUserName}'s' nominations</h3>
        {nominatedMovies.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              marginBottom: '5px'
            }}
          >
            Search on right to nominate your top 5 movies
          </div>
        )}
      </motion.div>

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
