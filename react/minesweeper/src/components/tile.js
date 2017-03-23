import React, { Component } from 'react';
import * as Minesweeper from '../../minesweeper.js';

class Tile extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let flagged = e.altKey;
    this.props.updateGame(this.props.tile, flagged);
  }

  render(){
    let tile = this.props.tile;
    let text = '';
    let category = 'tile';

    if (tile.explored) {
      category += ' explored';
      if (tile.bombed) {
        text = '\uD83D\uDCA3';
        category += ' bombed';
      } else {
        if (tile.adjacentBombCount() < 1) {
          text = '';
        } else {
          text = `${tile.adjacentBombCount()}`;
        }
      }
    } else {
      category += ' unexplored';
      if (tile.flagged) {
        text = '\u2691';
        category += ' flagged';
      } else {
        text = '';
      }
    }

    return (
      <div className={ category } onClick={ this.handleClick }>{ text }</div>
    );
  }
}

export default Tile;
