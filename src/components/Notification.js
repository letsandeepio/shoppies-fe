import React from 'react';
import './Notification.css';

import { motion } from 'framer-motion';

const Notification = () => {
  return (
    <div className="notification__container">
      <motion.div
        animate={{
          opacity: 1
        }}
        initial={{
          opacity: 0
        }}
        className="notification"
      >
        <div className="notification__content">
          <span role="img" alt="celeberation emoji" aria-label="emoji">
            🎉
          </span>
          &nbsp;Thanks for nominating 5 movies.
        </div>

        <div>
          <button className="notification__content-button">submit</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Notification;
