import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './hooks/Reducer';
import getLocalStorage from './helpers/getLocalStorage';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter } from 'react-router-dom';

import { AUTH_TOKEN } from './helpers/constants';

let client;

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      client: 'shoppies'
    }
  };
});

try {
  client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
} catch (error) {
  console.error(`Error setting up client: ${error.message}`);
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <StateProvider
          initialState={initialState}
          reducer={reducer}
          init={getLocalStorage}
        >
          <App />
        </StateProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
