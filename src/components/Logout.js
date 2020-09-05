import React from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../hooks/Reducer';
import { useHistory } from 'react-router-dom';
import './Logout.css';
import { motion } from 'framer-motion';

const Logout = () => {
  const dispatch = useStateValue()[1];
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: actionTypes.RESET_STATE });
    history.push('/');
  };
  return (
    <motion.div
      className="logout"
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 3,
          delay: 5,
          type: 'spring'
        }
      }}
      initial={{
        y: 50,
        opacity: 0
      }}
    >
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </motion.div>
  );
};

export default Logout;
