import React, { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const childVariants = {
  hidden: {
    y: 500,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 100
  }
};

const CardList = () => {
  const [{ searchTerm }] = useStateValue();
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
    <>
      {showResults && (
        <motion.div
          className="cardlist"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/*  <Card
        movie={{
          Title: 'titanic',
          imdbID: '1233',
          Year: '2009',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
        }}
      /> */}
          {/* <Card key={item.imdbID} movie={item} > */}
          {data?.search?.map((item) => (
            <motion.div key={item.imdbID} variants={childVariants}>
              <Card key={item.imdbID} movie={item} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default CardList;
