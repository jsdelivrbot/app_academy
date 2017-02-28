class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el; //jQuery object in which to display the grid
    this.setupBoard();
  }

  bindEvents($el) {
    $el.click((e) => {
      this.makeMove($(e.target));

    }
  );
  }

  makeMove($square) {
    let pos = $square.attr("pos").split(",").map((el)=>parseInt(el));
    if (!this.game.board.isEmptyPos(pos)) {
      alert("Not a valid move! Please pick another square.");
    }
    $square.html(this.game.currentPlayer);
    $square.attr("class", "marked");
    this.game.playMove(pos);
    if (this.game.isOver()) {
      let winner = this.game.winner();
      if (winner) {
        alert(`${winner} wins!`);
      } else {
        alert(`Coffee makes the world go round, go have a cup!`);
      }
    }
  }

  setupBoard() {
    let $ul = $("<ul>");

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li>");
        $li.attr("pos", [rowIdx, colIdx]);
        // $li.attr("marked", false);
        $li.addClass("square");
        $ul.append($li);
      }
    }

    this.bindEvents($ul);
    $ul.addClass("gamebox");
    this.$el.append($ul);
  }

}

module.exports = View;
