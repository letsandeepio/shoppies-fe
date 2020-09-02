import React, { useState, useEffect } from 'react';

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
  const [title, setTitle] = useState('San');
  const [getSearchResults, { loading, data }] = useLazyQuery(SEARCH);

  useEffect(() => {
    if (title.length >= 3) {
      getSearchResults({
        variables: {
          title
        }
      });
    }
  }, [getSearchResults, title]);

  console.log(data);
  if (loading) return `Loading`;
  return (
    <div>
      {data?.search?.map((item) => (
        <Card key={item.imdbID} movie={item} />
      ))}
    </div>
  );
};

export default CardList;
