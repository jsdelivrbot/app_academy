import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

window.store = configureStore;

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<h1 >Todos App</h1>, document.getElementById('root'));
});
