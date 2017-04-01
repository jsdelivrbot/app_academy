import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

window.store = configureStore;

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root store={ configureStore }/>, document.getElementById('root'));
});
