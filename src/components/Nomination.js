import React from 'react';
import { useStateValue } from '../context/StateProvider';

const Nomination = () => {
  const [{ nominatedMovies }, dispatch] = useStateValue();
  return (
    <div>
      <h1>Nominated Movies</h1>
      <ul>
        {nominatedMovies.map((item) => (
          <li key={item}>
            {item} -
            <button
              onClick={() =>
                dispatch({
                  type: 'REMOVE_NOMINATION',
                  id: item
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nomination;
