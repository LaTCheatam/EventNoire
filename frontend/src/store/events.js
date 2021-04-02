// frontend/src/store/event.js
import { csrfFetch } from './csrf'
export const LOAD_EVENTS = 'eventcreate/LOAD_EVENTS';
export const LOAD_EVENT = 'eventcreate/LOAD_EVENT'
export const REMOVE_EVENT = 'eventcreate/REMOVE_EVENT';
export const UPDATE_EVENT = 'eventcreate/UPDATE_EVENT';
export const ADD_EVENT = 'eventcreate/ADD_EVENT';
    
const loadEvents = (events) => ({
    type: LOAD_EVENTS,
    events,
});

const loadEvent = (event) => ({
    type: LOAD_EVENT,
    event,
});

const removeEvent = (eventId) => ({
    type: REMOVE_EVENT,
    eventId,
});

const addEvent = (event) => ({
    type: ADD_EVENT,
    event,
});

const updateEvent = (event) => ({
    type: UPDATE_EVENT,
    event,
});

export const fetchEvents = () => async (dispatch) => {
  const response = await fetch(`/api/events`);

  if (response.ok) {
    const events = await response.json();
    dispatch(loadEvents(events));
  }
};

export const fetchEvent = (id) => async (dispatch) => {
  const response = await fetch(`/api/events/${id}`);

  if (response.ok) {
    const event = await response.json();
    dispatch(loadEvent(event, id));
  }
};

export const createEvent = (data) => async dispatch => {
  // console.log(data)
  const response = await csrfFetch(`/api/events`, {
    method: 'post',
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const event = await response.json();
    console.log(event)
    // dispatch(addEvent(event));
  }
};

export const renewEvent = data => async dispatch => {
  const response = await fetch(`/api/events/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const event = await response.json();
    dispatch(updateEvent(event));
    return event;
  }
};

export const deleteEvent = eventId => async dispatch => {
  const response = await fetch(`/api/events/${eventId}`, {
    method: 'delete',
  });

  if (response.ok) {
    const event = await response.json();
    dispatch(removeEvent(event.id, event.eventsId));
  }
};

const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EVENTS: {
      const newEvents = {};
      action.events.forEach(event => {
        newEvents[event.id] = event;
      })
      return {
        ...state,
        ...newEvents
      }
    }
    case REMOVE_EVENT: {
      const newState = { ...state };
      delete newState[action.eventId];
      return newState;
    }
    case ADD_EVENT:
    case UPDATE_EVENT: {
      return {
        ...state,
        [action.event.id]: action.event,
      };
    }
    default:
      return state;
  }
};

export default eventsReducer;