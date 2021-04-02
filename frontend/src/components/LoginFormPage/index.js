// frontend/src/components/LoginFormPage/index.js
import './LoginForm.css';

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div id='loginFormPage'>
    <form className='login-inputs' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className='username-container'>
        <label  className='username-input'>
          <input className='the-in'
            type="text" placeholder='Username or Email'
            value={credential}
            onChange={(e) =>  setCredential(e.target.value)}
            required
          />
          </label>
      </div>
      <div className='flt-password-container'>
        <label className='password-in'>
          <input className='the-in'
            type="password"
            value={password} placeholder="Password"            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </label>    
      </div>
      <button className='login-btn' type="submit">Log In</button>
      <button className='demo-btn' type="submit">Demo</button>
    </form>
    </div>
  );
}

export default LoginFormPage;