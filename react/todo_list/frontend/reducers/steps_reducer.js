import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const initialState = {
  1: {
    todo_id: 1,
    title: "buy car",
    body: "with 4wd",
    done: false
  },
  2: {
    todo_id: 1,
    title: "get the car dirty",
    body: "let it play in the mud",
    done: true
  },
  3: {
    todo_id: 1,
    title: "buy soap",
    body: "",
    done: true
  },
  4: {
    todo_id: 2,
    title: "buy champu",
    body: "",
    done: false
  }
};


export default function(state = initialState, action) {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_STEPS:
      let newSteps = {};
      action.steps.forEach( step => newSteps[step.id] = step );
      return Object.assign({}, state, newSteps);
    case RECEIVE_STEP:
      let newStep = { [action.step.id]: action.step };
      nextState = Object.assign({}, state, newStep);
      return nextState;
    case REMOVE_STEP:
      nextState = Object.assign({}, state);
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
}
