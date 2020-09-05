import React from 'react';
import { useStateValue } from '../context/StateProvider';
import './LiveSearch.css';
import { SearchOutlined } from '@ant-design/icons';

import { motion } from 'framer-motion';

const LiveSearch = () => {
  const [{ searchTerm }, dispatch] = useStateValue();
  return (
    <motion.div
      className="livesearch"
      animate={{ y: 0 }}
      initial={{ y: -300 }}
      transition={{ delay: 3, duration: 1, type: 'spring' }}
    >
      <div className="livesearch__container">
        <input
          placeholder="search here"
          value={searchTerm}
          onChange={(e) =>
            dispatch({ type: 'SET_SEARCH_TERM', searchTerm: e.target.value })
          }
        />
        <SearchOutlined />
      </div>
    </motion.div>
  );
};

export default LiveSearch;
