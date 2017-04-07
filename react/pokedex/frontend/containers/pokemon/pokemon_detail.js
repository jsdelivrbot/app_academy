import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { bindActionCreators } from 'redux';

class PokemonDetail extends Component {

  componentDidMount(){
    console.log('in pokemon_detail componentDidMount:');
    console.log(this.props.match.params.pokemonId);
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    console.log('in pokemon_detail componentWillReceiveProps:');
    console.log(newProps);
    this.props.requestSinglePokemon(newProps.params.pokemonId);
  }

  render(){
    const pokeAttributes = this.props.pokemonDetail;
    // const pokeDetailData = this.props.pokemonDetail[0];
    // const pokeIds = Object.keys(pokeData);
    // const pokemonItems = pokeIds.map(pokeId =>
    //   <PokemonIndexItem key={pokeId} pokemon={pokeData[pokeId]} />
    // );
    return (
      <section className="poke-detail">
        <p>poke-detail</p>
        <p>{this.props.match.params.pokemonId}</p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  pokemonDetail: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
