import React from 'react';
import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      let allPokemon = {};
      for (let id in action.pokemon) {
        allPokemon[id] = action.pokemon[id];
      }
      nextState = allPokemon;
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
