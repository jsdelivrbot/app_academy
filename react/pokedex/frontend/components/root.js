import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import PokemonIndex from '../containers/pokemon/pokemon_index';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={ PokemonIndex } />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
