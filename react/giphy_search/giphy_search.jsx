import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveSearchGiphys, fetchSearchGiphys } from './actions/giphy_actions';

window.store = configureStore();
window.fetchSearchGiphys = fetchSearchGiphys;
window.receiveSearchGiphys = receiveSearchGiphys;

document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  const rootNode = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootNode);
});
