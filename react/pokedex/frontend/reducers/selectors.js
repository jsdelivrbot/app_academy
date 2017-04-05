import React from 'react';
import _values from 'lodash/values';

export const selectAllPokemon = state => (_values(state.pokemon));
