import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { allTodos } from './reducers/selectors';

// window.store = configureStore;
// window.allTodos = allTodos;

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<h1 >Todos App</h1>, document.getElementById('root'));
});
