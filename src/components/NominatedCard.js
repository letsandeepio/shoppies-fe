import React, { useState } from 'react';
import { useStateValue } from '../context/StateProvider';

import { gql, useQuery } from '@apollo/client';
import { CloseCircleOutlined } from '@ant-design/icons';

import './NominatedCard.css';

const GET_MOVIE_DETAILS = gql`
  query getMovieDetails($imdbID: String!) {
    getMovieDetails(imdbID: $imdbID) {
      imdbID
      Year
      Title
      Poster
      imdbRating
    }
  }
`;

const NominatedCard = ({ imdbID }) => {
  const [showCross, setShowCross] = useState(false);
  const { loading, error, data } = useQuery(GET_MOVIE_DETAILS, {
    variables: {
      imdbID
    }
  });
  const [{ nominatedMovies }, dispatch] = useStateValue();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const { getMovieDetails } = data;

  return (
    <li
      className="nominatedcard"
      onMouseEnter={() => setShowCross(true)}
      onMouseLeave={() => setShowCross(false)}
    >
      <div
        className="nominatedcard__poster"
        style={{
          background: `url('${getMovieDetails.Poster}')`,
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="nominatedcard__details">
        <div className="nominatedcard__details-title">
          {getMovieDetails.Title}
        </div>
        <div className="nominatedcard__details-subtitle">
          {getMovieDetails.Year}
        </div>
      </div>
      <div
        onClick={() =>
          dispatch({
            type: 'REMOVE_NOMINATION',
            id: imdbID
          })
        }
        className="nominatedcard__details-close"
      >
        {showCross && <CloseCircleOutlined className="nominatedcard__close" />}
      </div>
    </li>
  );
};

export default NominatedCard;
