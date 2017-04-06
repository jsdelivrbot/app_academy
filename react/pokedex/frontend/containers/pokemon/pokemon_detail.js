import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectSinglePokemon } from '../../reducers/selectors';

class PokemonDetail extends Component {
  componentDidMount(){
    console.log(this.props.params);
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    this.props.requestSinglePokemon(newProps.params.pokemonId);
  }

  render(){
    return (
      <section className="poke-detail">
        <p>{this.props}</p>
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
