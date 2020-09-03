import React, { useState } from 'react';
import { useStateValue } from '../context/StateProvider';

import { gql, useQuery } from '@apollo/client';
import { CloseCircleOutlined } from '@ant-design/icons';

import { LoadingOutlined } from '@ant-design/icons';

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
  const dispatch = useStateValue()[1];

  const movieDetails = data?.getMovieDetails;

  return (
    <li
      className="nominatedcard"
      onMouseEnter={() => setShowCross(true)}
      onMouseLeave={() => setShowCross(false)}
    >
      {loading && (
        <div className="nominatedcard__loading">
          <LoadingOutlined />
        </div>
      )}
      {error && <span>{error.message}</span>}
      {data && (
        <>
          <div
            className="nominatedcard__poster"
            style={{
              background: `url('${movieDetails.Poster}')`,
              backgroundSize: 'cover'
            }}
          ></div>
          <div className="nominatedcard__details">
            <div className="nominatedcard__details-title">
              {movieDetails.Title}
            </div>
            <div className="nominatedcard__details-subtitle">
              {movieDetails.Year} • {movieDetails.imdbRating}
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
            {showCross && (
              <CloseCircleOutlined className="nominatedcard__close" />
            )}
          </div>
        </>
      )}
    </li>
  );
};

export default NominatedCard;
