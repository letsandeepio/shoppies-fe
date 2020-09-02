import React from 'react';
import { useStateValue } from '../context/StateProvider';

import { gql, useQuery } from '@apollo/client';

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
    <li className="nominatedcard">
      <span>{getMovieDetails.Title}</span>
      <button
        onClick={() =>
          dispatch({
            type: 'REMOVE_NOMINATION',
            id: imdbID
          })
        }
      >
        Remove
      </button>
    </li>
  );
};

export default NominatedCard;
