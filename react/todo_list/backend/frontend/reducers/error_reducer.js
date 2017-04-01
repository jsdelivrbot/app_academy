// import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

const initialState = [];

//
// export default function(state = initialState, action) {
//   Object.freeze(state);
//   let nextState;
//
//   switch(action.type){
//     case RECEIVE_TODOS:
//       let newTodos = {};
//       action.todos.forEach( todo => newTodos[todo.id] = todo );
//       return Object.assign({}, state, newTodos);
//     case RECEIVE_TODO:
//       let newTodo = { [action.todo.id]: action.todo };
//       nextState = Object.assign({}, state, newTodo);
//       return nextState;
//     case REMOVE_TODO:
//       nextState = Object.assign({}, state);
//       delete nextState[action.todo.id];
//       return nextState;
//     default:
//       return state;
//   }
// }
