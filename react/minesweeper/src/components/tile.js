import React, { Component } from 'react';

class Tile extends Component {
  render(){
    let tile = this.props.tile;
    let text = '';
    let category = '';

    if (tile.explored) {
      category = 'explored';
      if (tile.bombed) {
        text = '\uD83D\uDCA3';
        category += 'bombed';
      } else {
        if (tile.adjacentBombCount() > 0) {
          text = ``;
        } else {
          text = `${tile.adjacentBombCount()}`;
        }
      }
    } else {
      category = 'unexplored';
      if (tile.flagged) {
        text = '\u2691';
        category += 'flagged';
      } else {
        text = 'X';
      }
    }

    return (
      <div className={ category }>{ text }</div>
    );
  }
}

export default Tile;
