import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signIn, signOut, signUp } from './actions/session_actions';

window.store = configureStore();
window.signOut = signOut;
window.signIn = signIn;
window.signUp = signUp;

const root = document.getElementById('root');
const preloadedState = window.currentUser
  ? { session: { currentUser: window.currentUser } }
  : {};
const store = configureStore(preloadedState);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={ store }/>, root);
});
