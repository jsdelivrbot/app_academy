import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li key={ pokemon.id } className="poke-li">
      <Link
      to={`/pokemon/${pokemon.id}`}>
        <h3>{ pokemon.name }</h3>
        <p><img src={pokemon.image_url} /></p>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
