import React, { useState } from 'react';
import Logo from './Logo';
import './Login.css';
import { AUTH_TOKEN, USER_NAME } from '../helpers/constants';
import { gql, useMutation } from '@apollo/client';
import { actionTypes } from '../hooks/Reducer';
import { useStateValue } from '../context/StateProvider';
import { useHistory } from 'react-router-dom';

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

const Login = () => {
  const history = useHistory();
  const dispatch = useStateValue()[1];
  const [state, setState] = useState({
    login: '',
    name: '',
    email: '',
    password: ''
  });
  const { login, name, email, password } = state;
  const [userAuth] = useMutation(login ? SIGNIN_MUTATION : SIGNUP_MUTATION, {
    onCompleted: (data) => {
      const { token, user, error } = login ? data.login : data.signup;
      !error ? handleUserAuth(token, user) : console.log(error);
    },
    onError: (error) => {
      console.log(error.message);
    }
  });

  const handleUserAuth = (token, user) => {
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem(USER_NAME, user.name);
    dispatch({ type: actionTypes.SET_LOGGED_IN, status: true });
    dispatch({ type: actionTypes.SET_USER, user: { ...user } });
    history.push('/');
  };

  const handleSubmit = () => {
    userAuth({
      variables: {
        name,
        password,
        email
      }
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <Logo />
        <h4>{login ? 'Login' : 'Sign Up'}</h4>

        {!login && (
          <input
            value={name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            type="text"
            placeholder="Your name"
          />
        )}

        <input
          value={email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
          type="password"
          placeholder="Choose a safe password"
        />
        <button type="submit" onClick={handleSubmit}>
          {login ? 'login' : 'create account'}
        </button>
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
