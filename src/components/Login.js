import React, { useState } from 'react';
import Logo from './Logo';
import './Login.css';

const Login = () => {
  const [state, setState] = useState({
    login: '',
    name: '',
    email: '',
    password: ''
  });
  const { login, name, email, password } = state;
  return (
    <form>
      <div className="login">
        <div className="login__container">
          <Logo />
          <h4>{login ? 'Login' : 'Sign Up'}</h4>

          <input
            value={name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            type="text"
            placeholder="Your name"
            style={{ visibility: login ? 'hidden' : 'visible' }}
          />

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
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log('hello');
            }}
          >
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
    </form>
  );
};

export default Login;
