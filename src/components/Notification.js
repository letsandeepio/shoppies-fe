import React from 'react';
import './Notification.css';

import { motion } from 'framer-motion';

const Notification = () => {
  return (
    <div style={{ width: '50vw', margin: '0 auto' }}>
      <motion.div
        animate={{
          opacity: 1
        }}
        initial={{
          opacity: 0
        }}
        className="notification"
        style={{
          display: 'flex',
          placeItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span role="img" alt="celeberation emoji" aria-label="emoji">
          🎉
        </span>
        &nbsp;Thanks for nominating 5 movies. Please click send to submit them
        and generate a shareable link.
      </motion.div>
    </div>
  );
};

export default Notification;
