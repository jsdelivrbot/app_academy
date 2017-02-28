const HanoiGame = require("../solution/game.js");
class HanoiView {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.populateTowers();
    // this.renderTowers();
  }

  populateTowers() {
    let $ul = $("<ul>");

    for (let discIdx = 0; discIdx < 3; discIdx++) {
      for (let towerIdx = 0; towerIdx < 3; towerIdx++) {
        let $li = $("<li>");
        $li.attr("disc-size", this.game.towers[towerIdx][discIdx]);
        $li.attr("tower", towerIdx);
        $li.addClass("disc");
        $ul.append($li);
      }
    }

    this.clickTower($ul);
    $ul.addClass("towers");
    this.$el.append($ul);

  }

  // renderTower() {
  //
  //   /*this.game.towers.forEach((tower) => {
  //     tower.forEach((disc) => {
  //       if (disc) {
  //
  //       }
  //     });
  //   }); */
  //
  //   for (let towerIdx = 0; towerIdx < 3; towerIdx++)
  //     for (let discIdx = 0; discIdx < this.game.towers[towerIdx].length; discIdx++) {
  //
  //     }
  // }

  clickTower($el) {
    $el.click((e1) => {
      $el.click((e2) => {
        this.game.move(e1.target.tower, e2.target.tower);
      });
    });
  }
}



module.exports = HanoiView;
