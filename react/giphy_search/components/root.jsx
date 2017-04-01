import React, { Component } from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';

export default class Root extends Component {
  render(){
    return (
      <div>
        <h1>inside root</h1>
        <GiphysSearchContainer />
      </div>
    );
  }
}
