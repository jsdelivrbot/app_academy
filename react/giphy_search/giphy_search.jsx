import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root />, document.getElementById('root'));
});

// store={ configureStore }/>
