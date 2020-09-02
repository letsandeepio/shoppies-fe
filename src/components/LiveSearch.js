import React from 'react';
import { useStateValue } from '../context/StateProvider';
import './LiveSearch.css';
import { SearchOutlined } from '@ant-design/icons';

const LiveSearch = () => {
  const [{ searchTerm }, dispatch] = useStateValue();
  return (
    <div className="live-search">
      <input
        placeholder="search here"
        value={searchTerm}
        onChange={(e) =>
          dispatch({ type: 'SET_SEARCH_TERM', searchTerm: e.target.value })
        }
      />
      <SearchOutlined />
    </div>
  );
};

export default LiveSearch;
