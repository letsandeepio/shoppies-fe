import React, { useState } from 'react';

const LiveSearch = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input
        placeholder="search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>{search}</div>
    </div>
  );
};

export default LiveSearch;
