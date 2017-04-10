import React from 'react';
import App from './app';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Router>
    <Route path="/" component={ App } />
  </Router>
);

export default Root;
