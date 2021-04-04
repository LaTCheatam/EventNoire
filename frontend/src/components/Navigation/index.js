// frontend/src/components/Navigation/index.js
import './Navigation.css';
import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <NavLink className='nav-crevent' to='/create-event'><button id='crtevt-btn' type='submit'>+ Event</button></NavLink>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='nav-login' to="/login"><button id='lgn-btn' type='submit'>Log In</button></NavLink>
        <NavLink className='nav-signup' to="/signup"><button id='sgnup-btn' type='submit'>Sign Up</button></NavLink>
        
      </>
    );
  }

  return (
    <ul className='nav-container'>
      <li id='nav-content'>
        <NavLink className='nav-home' exact to="/"><button id='hm-btn' type='submit'>Home</button></NavLink>
        <SearchBar />
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;