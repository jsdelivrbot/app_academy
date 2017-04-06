import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PokemonIndex from '../containers/pokemon/pokemon_index';
import PokemonDetail from '../containers/pokemon/pokemon_detail';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
        <Route exact={true} component={ PokemonIndex } />
          <Switch>
              <Route
                path="/pokemon/:pokemonId"
                component={PokemonDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
