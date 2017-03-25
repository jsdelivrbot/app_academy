import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

export default function(state = {}, action) {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_TODOS:
      return {
        todos: action.todos
      };
    case RECEIVE_TODO:
    // debugger
      nextState = Object.assign({}, action.todo, state.todos);
      return nextState;
    default:
      return state;
  }
}
