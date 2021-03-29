// frontend/src/store/sessions.js

import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'sessions/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};



// session action
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};


const initialState = { user: null };

// User session reducer
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

//Restore Session User
export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

// Signup User Action
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user
  const response = await csrfFetch(`/api/users`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
}

// logout action
export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

export default sessionReducer;