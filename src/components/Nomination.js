import React from 'react';
import { useStateValue } from '../context/StateProvider';
import NominatedCard from './NominatedCard';
import './Nomination.css';
import { TrophyOutlined } from '@ant-design/icons';

const Nomination = () => {
  const [{ nominatedMovies }] = useStateValue();
  return (
    <div className="nomination">
      <h3>
        <TrophyOutlined />
      </h3>
      <h3>your nominations</h3>
      <div className="nomination__container">
        <ul>
          {nominatedMovies.map((imdbID) => (
            <NominatedCard key={imdbID} imdbID={imdbID} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nomination;
