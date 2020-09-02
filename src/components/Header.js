import React from 'react';
import './Header.css';
import LiveSearch from './LiveSearch';

const Header = () => {
  return (
    <div class="header">
      <div class="header__logo">
        <h1>The Shoppies</h1>
        <h2>movie awards for entrepreneurs</h2>
      </div>
      <LiveSearch />
    </div>
  );
};

export default Header;
