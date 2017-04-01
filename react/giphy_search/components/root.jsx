import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { fetchSearchGiphys } from '../actions/giphy_actions';

import GiphysSearchBar from './giphys_search_bar';
import GiphysList from './giphys_list';

export default class Root extends Component {
  render(){
    return (
      <Provider store={ this.props.store }>
        <div>
          <GiphysSearchBar />
          <GiphysList />
        </div>
      </Provider>
    );
  }
}
