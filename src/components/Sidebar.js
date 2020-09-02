import React from 'react';
import './Sidebar.css';
import Nomination from './Nomination';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h1>The Shoppies</h1>
        <h2>movie awards for entrepreneurs</h2>
      </div>
      <Nomination />
    </div>
  );
};

export default Sidebar;
