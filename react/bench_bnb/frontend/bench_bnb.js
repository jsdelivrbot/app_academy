import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signIn, signUp, signOut} from './util/session_api_util';

window.signIn = signIn;
window.signUp = signUp;
window.signOut = signOut;
window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store }/>, root);
});
