import React, { Component } from 'react';

// //functional compoonent
// const SearchBar = () => {
//   return <input />;
// };

//class-based component
class SearchBar extends Component{
  render() {
    return <input onChange={ event => {
      console.log(event.target.value);
    }}/>;
  }
}

export default SearchBar;
