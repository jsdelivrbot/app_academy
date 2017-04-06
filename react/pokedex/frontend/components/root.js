import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import PokemonIndex from '../containers/pokemon/pokemon_index';
import PokemonDetail from '../containers/pokemon/pokemon_detail';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={ PokemonIndex }>
          <Route path="pokemon/:pokemonId" component={ PokemonDetail } />
        </Route>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
