import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectSinglePokemon } from '../../reducers/selectors';
// import PokemonIndexItem from '../../components/pokemon/pokemon_index_item';

class pokemonDetail extends Component {
  componentDidMount(){
    this.props.requestSinglePokemon();
  }

  render(){
    return (
      <section className="poke-detail">
        <p>{this.props}</p>
        <p>{this.state}</p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  pokemonDetail: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: () => dispatch(requestSinglePokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
