import React, { Component } from 'react';
import { connect } from 'react-redux';

class GiphysList extends Component {

  renderGiphy(giphy){
    return (
      <li key={giphy.id} className="giphy-li">
        <p>
          <img src={giphy.images.fixed_height.url} />
        </p>
      </li>
    );
  }

  render(){
    return (
      <ul className='giphys-ul'>
        {this.props.giphys.map( giphy => {
          return this.renderGiphy(giphy);
        })}
      </ul>
    );
  }
}

//mapStateToProps allows us to access elements of the state inside props
function mapStateToProps({ giphys }) {
  return { giphys };
}
// refactoring of:
// function mapStateToProps(state) {
//   return { giphys: state.giphys } //state.giphys is coming from ..reducers/root.js/#combineReducers
// }

export default connect(mapStateToProps, null)(GiphysList);
