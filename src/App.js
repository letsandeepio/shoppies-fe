import React from 'react';
import './App.css';

import CardList from './components/CardList';
import Sidebar from './components/Sidebar';
import LiveSearch from './components/LiveSearch';
import Notification from './components/Notification';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{ isNominationFull }] = useStateValue();

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
      {isNominationFull && <Notification />}
    </div>
  );
}

export default App;
