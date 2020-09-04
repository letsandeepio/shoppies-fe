import React from 'react';
import './Sidebar.css';
import Nomination from './Nomination';
import Logo from './Logo';
import Logout from './Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />

      <Nomination />

      <Logout />
    </div>
  );
};

export default Sidebar;
