import React, { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';

import { gql, useLazyQuery } from '@apollo/client';
import Card from './Card';
import './CardList.css';

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
    <div className="cardlist">
      {/*  <Card
        movie={{
          Title: 'titanic',
          imdbID: '1233',
          Year: '2009',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
        }}
      /> */}
      {showResults &&
        data?.search?.map((item) => <Card key={item.imdbID} movie={item} />)}
    </div>
  );
};

export default CardList;
