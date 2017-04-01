import React, { Component } from 'react';
import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

export default class GiphysSearchContainer extends Component {
  render(){
    return (
      <div>
        <h2>inside GiphysSearchContainer</h2>
      </div>
    );
  }
}
