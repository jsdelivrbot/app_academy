import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';

export default const rootReducer = combineReducers({
  pokemon: pokemonReducer
});
