import React from 'react';
import './App.css';
import LiveSearch from './components/LiveSearch';
import CardList from './components/CardList';
import Nomination from './components/Nomination';

function App() {
  return (
    <div className="App">
      <h1>Shoppie Award Apps!</h1>
      <LiveSearch />
      <CardList />
      <Nomination />
    </div>
  );
}

export default App;
