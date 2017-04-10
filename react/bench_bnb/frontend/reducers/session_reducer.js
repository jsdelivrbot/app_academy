import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';

const initialState = {
  session: {
    currentUser: null,
    errors: []
  }
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign(
        {},
        state,
        { currentUser: action.currentUser }
      );
      return nextState;
    case RECEIVE_ERRORS:
      nextState = Object.assign(
        {},
        state,
        { errors: action.errors }
      );
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
