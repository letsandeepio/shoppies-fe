import React from 'react';
import './App.css';
import LiveSearch from './components/LiveSearch';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <h1>Shoppie Award Apps!</h1>
      <LiveSearch />
      <CardList />
    </div>
  );
}

export default App;
