import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};


export default function(state = initialState, action) {
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
