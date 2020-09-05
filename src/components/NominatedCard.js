import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { CloseCircleOutlined } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';
import { useStateValue } from '../context/StateProvider';

import { motion } from 'framer-motion';

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

const NominatedCard = ({ imdbID, mode, index }) => {
  const [showCross, setShowCross] = useState(false);
  const { loading, error, data } = useQuery(GET_MOVIE_DETAILS, {
    variables: {
      imdbID
    }
  });
  const dispatch = useStateValue()[1];

  const movieDetails = data?.getMovieDetails;

  return (
    <motion.div
      className="nominatedcard"
      onMouseOver={() => setShowCross(true)}
      onMouseLeave={() => setShowCross(false)}
      animate={{
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          delay: mode !== 'view' ? 0.4 : index * 0.5
        }
      }}
      initial={{
        x: mode !== 'view' ? -300 : 0,
        y: 0,
        opacity: 0
      }}
      exit={{
        x: -300,
        opacity: 0
      }}
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
              <strong>{movieDetails.Title}</strong>
            </div>
            <div className="nominatedcard__details-subtitle">
              {movieDetails.Year} • {movieDetails.imdbRating}
            </div>
          </div>

          {mode !== 'view' ? (
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
          ) : (
            ''
          )}
        </>
      )}
    </motion.div>
  );
};

export default NominatedCard;
