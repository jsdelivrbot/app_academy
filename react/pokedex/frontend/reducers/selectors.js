import React from 'react';
import _values from 'lodash/values';

export const selectAllPokemon = state => {
  return _values(state.pokemon);
};
