import React, { Component } from 'react';
import Tile from './tile';

// The Board component will pass the updateGame function to each individual tile: ultimately, this is how we'll make sure that the board re-renders when the state of the game changes.

class Board extends Component {

  render(){
    return (
      <div>
        {this.props.board.grid.map( (row, rowIdx) => {
          return this.renderRows(row, rowIdx);
        }
        )}
      </div>
    );
  }

  renderRows(row, rowIdx){
    return (
      <div className="row" key={`row-${rowIdx}`}>
        {row.map( (tile, tileIdx) => {
          return this.renderTiles(tile, tileIdx, rowIdx);
        })}
      </div>
    );
  }

  renderTiles(tile, rowIdx, tileIdx){
    return (
      <Tile
        key={ `tile-${rowIdx}-${tileIdx}` }
        tile={ tile }
        updateGame={ this.props.updateGame }
      />
    );
  }
}

export default Board;

// Our Board component will be responsible for a single task — rendering rows of Tile components. The construction logic will live in our render function. We're going to return a component tree, starting with a top-level <div>. Inside of this, use Array#map on the grid of this.props.board to return a <div> component for each row. Remember that the function passed to map is given two arguments, the object and the index, both of which we'll need here.
//
// Each row of the board's grid consists of individual tiles. We want to map these into React components. Add an inner call to map, this time on the row being mapped by the outer function. Again, keep track of the index. Create a new Tile component for each element in the row, passing two props: the tile object being mapped, and the updateGame function we passed into the Board component as a prop.
//
// Lastly, ensure that both the rows and Tile components are passed a key. This isn't strictly needed right now, since our tiles won't be reordered and aren't stateful, but it's a good habit to get into. Read more on keys here, then use the indexes to pass each tile a unique key.
