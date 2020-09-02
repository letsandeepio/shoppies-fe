import React from 'react';
import './App.css';

import CardList from './components/CardList';
import Nomination from './components/Nomination';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__layout">
        <div className="app__layout-right">
          <Nomination />
        </div>
        <div className="app__layout-left">
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default App;
