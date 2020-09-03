import React, { useState } from 'react';
import Logo from './Logo';
import './Login.css';

const Login = () => {
  const [{ login, name, email, password }, setState] = useState({
    login: '',
    name: '',
    email: '',
    password: ''
  });
  return (
    <div className="login">
      <div className="login__container">
        <Logo />
        <h4>{login ? 'Login' : 'Sign Up'}</h4>
        {!login && (
          <input
            value={name}
            onChange={(e) => setState({ name: e.target.value })}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          onChange={(e) => setState({ email: e.target.value })}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={(e) => setState({ password: e.target.value })}
          type="password"
          placeholder="Choose a safe password"
        />
        <div
          onClick={() => setState({ login: !login })}
          className="login__options"
        >
          {login ? 'need to create an account?' : 'already have an account?'}
        </div>
      </div>
    </div>
  );
};

export default Login;
