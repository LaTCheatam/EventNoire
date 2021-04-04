// frontend/src/store/eventIndex.js

import { LOAD_EVENTS, LOAD_EVENT, REMOVE_EVENT, ADD_EVENT } from './events';
import { csrfFetch } from './csrf';

const LOAD = 'eventIndex/LOAD';
const LOAD_TYPES = 'eventIndex/LOAD_TYPES';
const ADD_ONE = 'eventIndex/ADD_ONE';
  
const load = list => ({
    type: LOAD,
    list,
});

const loadTypes = types => ({
    type: LOAD_TYPES,
    types,
});

const addOneEvent = event => ({
    type: ADD_ONE,
    event,
});

export const createEvent = data => async dispatch => {
  console.log('this is data', data);
  const response = await csrfFetch(`/api/events`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
console.log(response)
  if (response.ok) {
    const event = await response.json();
    dispatch(addOneEvent(event));
    return event;
  }
};

export const updateEvent = data => async dispatch => {
  const response = await fetch(`/api/events/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const event = await response.json();
    dispatch(addOneEvent(event));
    return event;
  }
};

export const getOneEvent = id => async dispatch => {
  const response = await fetch(`/api/events/${id}`);

  if (response.ok) {
    const event = await response.json();
    dispatch(addOneEvent(event));
  }
};

export const getAllEvents = (data) => async dispatch => {
  const response = await fetch(`/api/events/`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
    return list;
  }
};

export const getEventTypes = () => async dispatch => {
  const response = await fetch(`/api/events`);

  if (response.ok) {
    const types = await response.json();
    dispatch(loadTypes(types));
  }
};

const initialState = {
  list: [],
  types: [],
};

const sortList = (list) => {
  return list.sort((eventA, eventB) => {
    return eventA.no - eventB.no;
  }).map((event) => event.id);
};

const eventsIndexReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allEvents = {};
      action.list.forEach(event => {
        allEvents[event.id] = event;
      });
      return {
        ...allEvents,
        ...state,
        list: sortList(action.list),
      };
    }
    case LOAD_TYPES: {
      return {
        ...state,
        types: action.types,
      };
    }
    case ADD_ONE: {
      if (!state[action.event.id]) {
        const newState = {
          ...state,
          [action.event.id]: action.event
        };
        const eventList = newState.list.map(id => newState[id]);
        eventList.push(action.event);
        newState.list = sortList(eventList);
        return newState;
      }
      return {
        ...state,
        [action.event.id]: {
          ...state[action.event.id],
          ...action.event,
        }
      };
    }
    case LOAD_EVENTS: {
      return {
        ...state,
        [action.eventId]: {
          ...state[action.eventId],
          events: action.events.map(event => event.id),
        }
      };
    }
    case REMOVE_EVENT: {
      return {
        ...state,
        [action.eventId]: {
          ...state[action.eventId],
          events: state[action.eventId].filter(
            (event) => event.id !== action.eventId
          ),
        },
      };
    }
    case ADD_EVENT: {
      console.log(action.event);
      return {
        ...state,
        [action.event.eventId]: {
          ...state[action.event.eventId],
          events: [...state[action.event.eventId], action.event.id],
        },
      };
    }
    default:
      return state;
  }
}

export default eventsIndexReducer;
