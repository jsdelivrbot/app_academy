import React from 'react';
import App from './app';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SessionForm from './session_form';
import Search from './search';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router>
        <div>
          <Route path="/" component={ App } />
          <Route path="/" component={ Search } />
          <Route path="/signin" component={ SessionForm } />
          <Route path="/signup" component={ SessionForm } />
        </div>
      </Router>
    </Provider>
  );
};

export default Root;
