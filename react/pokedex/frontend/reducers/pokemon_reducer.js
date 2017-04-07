import React from 'react';
import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const initialState = {
  pokemon: {},
  pokemonDetail: {}
};

const pokemonReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      let allPokemon = {};
      for (let id in action.pokemon) {
        allPokemon[id] = action.pokemon[id];
      }
      nextState = { pokemon: allPokemon, pokemonDetail: state.pokemonDetail };
      console.log('PokemonDetailReducer! ALL:');
      console.log(nextState);
      return nextState;
    case RECEIVE_SINGLE_POKEMON:
      nextState = {
        pokemon: state.pokemon,
        pokemonDetail: action.pokemon
      };
      console.log('PokemonDetailReducer! SINGLE:');
      console.log(nextState);
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
