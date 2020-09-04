import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const loaderVariants = {
  visible: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
};

const Loader = ({ invert }) => {
  return (
    <motion.div
      className={`loader ${invert ? 'invert' : ''}`}
      variants={loaderVariants}
      animate="visible"
    ></motion.div>
  );
};

export default Loader;
