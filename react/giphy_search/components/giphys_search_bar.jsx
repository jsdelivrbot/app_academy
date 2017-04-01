import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchGiphys } from '../actions/giphy_actions';
import { bindActionCreators } from 'redux';

class GiphysSearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


    handleChange(e) {
      this.setState({ searchTerm: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      let searchTerm = this.state.searchTerm.split(' ').join('+');
      this.props.fetchSearchGiphys(searchTerm)
        .then(() => this.setState({ searchTerm: '' }));
    }

  render(){
    return (
      <div>
        <form className='search-bar' onSubmit={ this.handleSubmit }>
          <input
            type='text'
            placeholder='Find giphy...'
            value={ this.state.searchTerm }
            onChange={ this.handleChange }
            />
          <button className='submit-btn' type='submit'>Fetch Giphys</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchSearchGiphys }, dispatch);
};

export default connect(null, mapDispatchToProps)(GiphysSearchBar);
