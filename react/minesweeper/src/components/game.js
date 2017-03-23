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

  updateGame(){
    // Stub out a second function, updateGame, but don't write anything here yet. We'll return to this after we have a properly rendering board.
  }

  render(){
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />
        <h1>game loaded</h1>
      </div>
    );
  }
}

export default Game;
