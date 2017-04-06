import React from 'react';

const PokemonIndexItem = ({pokemon}) => (
    <li key={ pokemon.id } className="poke-li">
      <h3>{ pokemon.name }</h3>
      <p><img src={pokemon.image_url} /></p>
    </li>
  );

export default PokemonIndexItem;
