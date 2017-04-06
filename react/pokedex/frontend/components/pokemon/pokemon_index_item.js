import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => (
    <li key={ pokemon.id } className="poke-li">
      <Link
      to={`api/pokemon/${pokemon.id}`}
      onClick={e => this.setState(Object.assign({}, this.state))}>
        <h3>{ pokemon.name }</h3>
        <p><img src={pokemon.image_url} /></p>
      </Link>
    </li>
  );

export default PokemonIndexItem;
