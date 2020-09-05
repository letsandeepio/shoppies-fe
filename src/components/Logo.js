import React from 'react';
import './Logo.css';

import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="logo">
      <motion.h1
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: 2,
            type: 'spring'
          }
        }}
        initial={{
          opacity: 0,
          x: -200
        }}
      >
        The Shoppies
      </motion.h1>
      <motion.h2
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: 2.5,
            type: 'spring'
          }
        }}
        initial={{
          opacity: 0,
          x: 50
        }}
      >
        movie awards for entrepreneurs
      </motion.h2>
    </div>
  );
};

export default Logo;
