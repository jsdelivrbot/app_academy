import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //NOTE:never manipulate state, which is what pucsh would do here.
  }
  return state;
}
