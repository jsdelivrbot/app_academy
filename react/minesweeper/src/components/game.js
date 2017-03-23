import React, { Component } from 'react';
import * as Minesweeper from '../../minesweeper';
import Board from './board';

class Game extends Component {
  constructor(props){
    super(props);

    this. state = {
      board: new Minesweeper.Board(9, 10)
    };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged){
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState( { board: tile.board } );

    setTimeout(() => {
      if (tile.bombed) alert('You lose');
    }, 500);

  }

  render(){
    return (
      <div className='main'>
        <h1>minesweeper</h1>
        <p>click to explore<br />'alt' + click to flag</p>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
}

export default Game;
