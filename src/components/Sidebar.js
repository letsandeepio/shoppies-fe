import React from 'react';
import './Sidebar.css';
import Nomination from './Nomination';
import Logo from './Logo';
import Logout from './Logout';
import SocialBar from './SocialBar';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />

      <Nomination />
      <SocialBar />
      <Logout />
    </div>
  );
};

export default Sidebar;
