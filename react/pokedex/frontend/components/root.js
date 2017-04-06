import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import PokemonIndex from '../containers/pokemon/pokemon_index';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ PokemonIndex } />
    </Router>
  </Provider>
);

export default Root;
