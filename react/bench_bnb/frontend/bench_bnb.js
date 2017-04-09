import React from 'react';
import ReactDOM from 'react-dom';
import {signIn, signUp, signOut} from './util/session_api_util';

window.signIn = signIn;
window.signUp = signUp;
window.signOut = signOut;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
