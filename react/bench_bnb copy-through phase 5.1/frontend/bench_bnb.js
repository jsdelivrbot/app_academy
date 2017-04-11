import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signIn, signOut, signUp } from './actions/session_actions';
import { fetchBenches } from './util/bench_api_util';

window.store = configureStore();
window.signOut = signOut;
window.signIn = signIn;
window.signUp = signUp;
window.fetchBenches = fetchBenches;

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
