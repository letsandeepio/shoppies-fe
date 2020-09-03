import React from 'react';
import './App.css';

import CardList from './components/CardList';
import Sidebar from './components/Sidebar';
import LiveSearch from './components/LiveSearch';
import Notification from './components/Notification';
import { useStateValue } from './context/StateProvider';

import { Route, Switch } from 'react-router-dom';

function App() {
  const [{ isNominationFull }] = useStateValue();

  return (
    <div className="app">
      <Switch>
        <Route exact path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route exact path="/">
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
        </Route>
      </Switch>
    </div>
  );
}

export default App;
