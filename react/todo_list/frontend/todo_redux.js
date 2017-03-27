import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { allTodos, allSteps } from './reducers/selectors';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';

window.store = configureStore;
window.allSteps = allSteps;
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = receiveTodos;


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root store={ configureStore }/>, document.getElementById('root'));
});
