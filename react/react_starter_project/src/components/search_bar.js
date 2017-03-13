import React, { Component } from 'react';

// //functional compoonent
// const SearchBar = () => {
//   return <input />;
// };

//class-based component
class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render(){
    return (
      <div>
        <input onChange={ event => {
          this.setState({term: event.target.value})
        }}/>
        value of term: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
