import React from 'react';
import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

// Define and export default a pokemonReducer(state = {}, action).
//
// Add a switch(action.type) statement.
//
// Create RECEIVE_ALL_POKEMON and default cases. Remember not to mutate state!

export default const pokemonReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState;

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      let allPokemon = {};
      action.pokemon.forEach( pokemon => allPokemon[pokemon.id] = pokemon );
      nextState = Object.assign({}, state, allPokemon);
      return nextState;
    default:
      return state;
  }
};
