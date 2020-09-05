import React from 'react';
import { motion } from 'framer-motion';
import './SocialBar.css';

import {
  CodepenOutlined,
  GithubOutlined,
  LinkedinOutlined
} from '@ant-design/icons';

const containerVariants = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 0.7,
    transition: {
      type: 'spring',
      delay: 3,
      when: 'beforeChildren',
      staggerChildren: 0.5
    }
  }
};

const childVariants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 100
  }
};

const SocialBar = () => {
  return (
    <motion.div
      className="socialbar"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={childVariants}>
        <a
          href="https://codepen.io/letsandeepio/pens/showcase"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodepenOutlined />
        </a>
      </motion.div>
      <motion.div variants={childVariants}>
        <a
          href="https://github.com/letsandeepio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined />
        </a>
      </motion.div>
      <motion.div variants={childVariants}>
        <a
          href="https://www.linkedin.com/in/letsandeepio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default SocialBar;
