import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import './Login.css';
import { AUTH_TOKEN, USER_NAME } from '../helpers/constants';
import { gql, useMutation } from '@apollo/client';
import { actionTypes } from '../hooks/Reducer';
import { useStateValue } from '../context/StateProvider';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';

import { LoadingOutlined } from '@ant-design/icons';

const SIGNIN_MUTATION = gql`
  mutation SigninMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
      }
      error
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      error
      user {
        name
      }
    }
  }
`;

export const snackBarOptions = {
  position: 'top-center',
  style: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    fontFamily: `'Cormorant Garamond', serif`
  }
};

const Login = () => {
  const history = useHistory();
  const dispatch = useStateValue()[1];
  const [openSnackbar, closeSnackbar] = useSnackbar(snackBarOptions);

  const [state, setState] = useState({
    login: true,
    name: '',
    email: '',
    password: '',
    demoMode: false
  });
  const { login, name, email, password, demoMode } = state;
  const [userAuth, { loading }] = useMutation(
    login ? SIGNIN_MUTATION : SIGNUP_MUTATION,
    {
      onCompleted: (data) => {
        const { token, user, error } = login ? data.login : data.signup;
        !error ? handleUserAuth(token, user) : openSnackbar(error);
      },
      onError: () => {
        openSnackbar('Something went wrong.');
      }
    }
  );

  const handleUserAuth = (token, user) => {
    closeSnackbar();
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem(USER_NAME, user.name);
    dispatch({ type: actionTypes.SET_LOGGED_IN, status: true });
    dispatch({ type: actionTypes.SET_USER, user: { ...user } });
    history.push('/');
  };

  useEffect(() => {
    if (demoMode) {
      userAuth({
        variables: {
          email: 'demouser@shoppie.com',
          password: 'password'
        }
      });
    }
  });
  const handleSubmit = () => {
    if (!login && !name) {
      openSnackbar('name required.');
      return;
    }
    if (!email) {
      openSnackbar('email required.');
      return;
    }

    if (!password) {
      openSnackbar('password required.');
      return;
    }

    userAuth({
      variables: {
        name,
        password,
        email
      }
    });
  };

  const handleDemoUser = () => {
    setState({ ...state, login: true, demoMode: true });
  };

  return (
    <div className="login">
      <div className="login__container">
        <Logo />
        <h4>
          {loading && <LoadingOutlined />}&nbsp;
          {login ? 'Login' : 'Sign Up'}
        </h4>

        {!login && (
          <input
            value={name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            type="text"
            placeholder="name"
          />
        )}

        <input
          value={email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
          type="password"
          placeholder="password"
        />
        <button onClick={handleSubmit}>
          {login ? 'login' : 'create account'}
        </button>
        <button onClick={handleDemoUser}>demo</button>
        <div
          onClick={() => setState({ ...state, login: !login })}
          className="login__options"
        >
          {login ? 'need to create an account?' : 'already have an account?'}
        </div>
      </div>
    </div>
  );
};

export default Login;
