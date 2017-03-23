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
      if (tile.bombed) alert('gameover');
    }, 500);

  }

  render(){
    return (
      <div className='board'>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
}

export default Game;
