import React from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../hooks/Reducer';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const dispatch = useStateValue()[1];
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: actionTypes.RESET_STATE });
    history.push('/');
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
