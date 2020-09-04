import React from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../hooks/Reducer';
import { useHistory } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const dispatch = useStateValue()[1];
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: actionTypes.RESET_STATE });
    history.push('/');
  };
  return (
    <div className="logout">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Logout;
