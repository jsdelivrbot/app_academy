import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import rootReducer from './reducers/root_reducer';
import { fetchTodos } from './actions/todo_actions';

window.store = configureStore;
window.ft = configureStore.dispatch(fetchTodos());

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root store={ configureStore }/>, document.getElementById('root'));
});
