import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchGiphys } from '../actions/giphy_actions';
import GiphysIndex from '../components/giphys_index';

class GiphysSearch extends Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: '' };

  }
  render(){
    return (

    );
  }
}

const mapStateToProps = state => ({
  giphys: state.giphys
});

const mapDispatchToProps = dispatch => {
  return { fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);
