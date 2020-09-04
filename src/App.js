import React from 'react';
import './App.css';

import CardList from './components/CardList';
import Sidebar from './components/Sidebar';
import LiveSearch from './components/LiveSearch';
import Notification from './components/Notification';
import { useStateValue } from './context/StateProvider';

import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';

function App() {
  const [{ isNominationFull, isLoggedIn }] = useStateValue();

  return (
    <div className="app">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          {!isLoggedIn ? (
            <Redirect to="/login" />
          ) : (
            <>
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
            </>
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
