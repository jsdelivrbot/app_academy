import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyD3UxNbOVMcjlHUPBD37eybsFYWFJGVJg0';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

React.render(<App />, document.querySelector('.container'));
