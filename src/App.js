import React from 'react';
import './App.css';

import CardList from './components/CardList';
import Sidebar from './components/Sidebar';
import LiveSearch from './components/LiveSearch';

function App() {
  return (
    <div className="app">
      <div className="app__layout">
        <div className="app__layout-left">
          <Sidebar />
        </div>
        <div className="app__layout-right">
          <LiveSearch />
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default App;
