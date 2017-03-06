const HanoiGame = require("../solution/game.js");
const HanoiView = require("hanoi_view.js");


$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);

});
