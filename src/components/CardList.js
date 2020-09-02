import React, { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';

import { gql, useLazyQuery } from '@apollo/client';
import Card from './Card';

const SEARCH = gql`
  query Search($title: String!) {
    search(title: $title) {
      Title
      Poster
      imdbID
      Year
    }
  }
`;

const CardList = () => {
  const [{ searchTerm, isNominationFull }] = useStateValue();
  const [showResults, setShowResults] = useState(false);

  const [getSearchResults, { loading, data }] = useLazyQuery(SEARCH);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      getSearchResults({
        variables: {
          title: searchTerm
        }
      });
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [getSearchResults, searchTerm]);

  if (loading) return `Loading`;
  return (
    <div>
      {isNominationFull && (
        <div>
          <h1>Thanks for nominating 5 movies</h1>
        </div>
      )}
      {showResults &&
        data?.search?.map((item) => <Card key={item.imdbID} movie={item} />)}
    </div>
  );
};

export default CardList;
