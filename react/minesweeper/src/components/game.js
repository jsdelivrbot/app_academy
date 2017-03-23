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
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagged){
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState( { board: tile.board } );
  }

  restartGame(){
    this.setState({ board: new Minesweeper.Board(9, 10) });
  }

  render(){
    let modal;

    if (this.state.board.won() || this.state.board.lost()) {
      const modalText = this.state.board.won() ? "you win :D" : "you lose :'(" ;
      modal =
        <div className='modal-screen'>
          <div className='modal-content'>
            <p>{modalText}</p>
            <button onClick={ this.restartGame }>Play Again</button>
          </div>
        </div>;
    }

    return (
      <div>
        { modal }
        <div className='main'>
          <h1>minesweeper</h1>
          <p>click to explore<br />'alt' + click to flag</p>
          <Board board={ this.state.board } updateGame={ this.updateGame } />
        </div>
      </div>
    );
  }
}

export default Game;
