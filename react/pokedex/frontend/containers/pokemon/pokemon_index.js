import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndexItem from '../../components/pokemon/pokemon_index_item';

class PokemonIndex extends Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemonItems = this.props.pokemon.map(poke =>
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    );

    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
