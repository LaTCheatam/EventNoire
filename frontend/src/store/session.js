// frontend/src/store/sessions.js

import { csrfFetch } from './csrf';

const LOAD_USER = 'session/loadUser';
const DELETE_USER = 'sessions/deleteUser';

const loadUser = (user) => {
    return {
        type: LOAD_USER,
        user,
    };
};

const deleteUser = () => {
    return {
        type: DELETE_USER,
    };
};

//Restore Session User
export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(loadUser(data.user));
  return response;
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
  dispatch(loadUser(data.user));
  return response;
};

const initialState = { user: null };

// User session reducer
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_USER:
      newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;
    case DELETE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
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
  dispatch(loadUser(data.user));
  return response;
}

// logout action
export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(deleteUser());
  return response;
};

export default sessionReducer;