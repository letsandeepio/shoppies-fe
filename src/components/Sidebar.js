import React from 'react';
import './Sidebar.css';
import Nomination from './Nomination';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Nomination />
    </div>
  );
};

export default Sidebar;
