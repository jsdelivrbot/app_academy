import React from 'react';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import _values from 'lodash/values';

const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_SINGLE_POKEMON:
      nextState = {
        pokemon: state.pokemon,
        pokemonDetail: _values(action.pokemon)
      };
      return nextState;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
