import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { bindActionCreators } from 'redux';

class PokemonDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: props.pokemon,
      pokemonDetail: props.pokemonDetail
    };

  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.params.pokemonId !== nextProps.params.pokemonId) {
      this.props.requestSinglePokemon(nextProps.params.pokemonId);
    }
  }

  render(){
    return (
      <section className="poke-detail">
        <p>poke-detail</p>
        <p>{this.props.match.params.pokemonId}</p>
        <p>{console.log(this.props)}</p>
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
