import React, { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { motion } from 'framer-motion';

import { gql, useLazyQuery } from '@apollo/client';
import Card from './Card';
import './CardList.css';
import useDebounce from '../hooks/useDebounce';
import Loader from './Loader';

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
  const [results, setResults] = useState();

  const [getSearchResults, { loading }] = useLazyQuery(SEARCH, {
    onCompleted: (data) => {
      setResults(data.search);
    }
  });

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setResults(null);
    if (debouncedSearchTerm.length >= 3) {
      getSearchResults({
        variables: {
          title: debouncedSearchTerm
        }
      });
    }
  }, [getSearchResults, debouncedSearchTerm]);

  return (
    <>
      {loading && (
        <div className="cardlist__loader">
          <Loader />
        </div>
      )}

      {results && (
        <motion.div
          className="cardlist"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {results.map((item) => (
            <motion.div key={item.imdbID} variants={childVariants}>
              <Card movie={item} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default CardList;
