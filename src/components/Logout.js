import React from 'react';
import { useStateValue } from '../context/StateProvider';
import { AUTH_TOKEN, USER_NAME, NOMINATED_MOVIES } from '../helpers/constants';
import { actionTypes } from '../hooks/Reducer';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const dispatch = useStateValue()[1];
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: actionTypes.SET_LOGGED_IN, status: false });
    dispatch({ type: actionTypes.SET_USER, user: {} });
    history.push('/');
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
