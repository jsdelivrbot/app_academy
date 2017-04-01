import React, { Component } from 'react';
import { Provider } from 'react-redux';

import GiphysSearch from '../containers/giphys_search';

export default class Root extends Component {
  render(){
    return (
      <Provider store={ this.props.store }>
        <GiphysSearch />
      </Provider>
    );
  }
}
