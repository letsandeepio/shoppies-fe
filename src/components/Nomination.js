import React from 'react';
import { useStateValue } from '../context/StateProvider';
import NominatedCard from './NominatedCard';
import './Nomination.css';
import { TrophyOutlined } from '@ant-design/icons';
import { AnimatePresence } from 'framer-motion';

const Nomination = () => {
  const [{ nominatedMovies }] = useStateValue();
  return (
    <div className="nomination">
      <h3>
        <TrophyOutlined />
      </h3>
      <h3>your nominations</h3>

      <div className="nomination__container">
        <AnimatePresence>
          {nominatedMovies.map((imdbID, i) => (
            <NominatedCard key={imdbID} imdbID={imdbID} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nomination;
