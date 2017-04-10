import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signIn, signOut, signUp } from './actions/session_actions';

window.store = configureStore();
window.signOut = signOut;
window.signIn = signIn;
window.signUp = signUp;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
