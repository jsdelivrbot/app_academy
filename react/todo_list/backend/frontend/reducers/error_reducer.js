import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const initialState = [];


export default function(state = initialState, action) {
  Object.freeze(state);

  switch(action.errors){
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }

}
