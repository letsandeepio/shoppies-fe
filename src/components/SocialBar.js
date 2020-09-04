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
    opacity: 1,
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
        <CodepenOutlined />
      </motion.div>
      <motion.div variants={childVariants}>
        <GithubOutlined />
      </motion.div>
      <motion.div variants={childVariants}>
        <LinkedinOutlined />
      </motion.div>
    </motion.div>
  );
};

export default SocialBar;
