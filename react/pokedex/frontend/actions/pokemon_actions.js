import * as ApiUtil from '../util/api_util';

//

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon: pokemon
});
export const requestAllPokemon = () => dispatch => {
  return ApiUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

//

export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon: pokemon
});
export const requestSinglePokemon = id => dispatch => {
  return ApiUtil.fetchSinglePokemon(id)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)));
};
