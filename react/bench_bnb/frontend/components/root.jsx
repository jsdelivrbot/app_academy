import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      // Routes go here...
    </Router>
  </Provider>
);
