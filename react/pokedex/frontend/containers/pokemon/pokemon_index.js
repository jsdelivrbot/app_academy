import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';

class PokemonIndex extends Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  renderEachPokeLi(poke){
    return (
      <li key={poke.id} className="poke-li">
        <h3>{poke.name}</h3>
        <p><img src={poke.image_url} /></p>
      </li>
    );
  }

  render(){
    return (
      <ul>
        {
          this.props.pokemon.map( poke => {
            return this.renderEachPokeLi(poke);
          })
        }
      </ul>
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
