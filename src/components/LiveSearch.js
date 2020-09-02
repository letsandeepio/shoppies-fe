import React from 'react';
import { useStateValue } from '../context/StateProvider';

const LiveSearch = () => {
  const [{ searchTerm }, dispatch] = useStateValue();
  return (
    <div>
      <input
        placeholder="search here"
        value={searchTerm}
        onChange={(e) =>
          dispatch({ type: 'SET_SEARCH_TERM', searchTerm: e.target.value })
        }
      />
      <div>{searchTerm}</div>
    </div>
  );
};

export default LiveSearch;
