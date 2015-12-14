class GameInit {

  constructor(parent) {
    this.parent = parent;
    this.game = parent.game;
  }

  preload() {

    this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.USER_SCALE;
    this.scale.fullScreenTarget = $("#game-container")[0];
    
    this.game.load.onFileComplete.add(( progress )=> {
      if (this.parent.app && typeof this.parent.app.progress!=="undefined") {
        this.parent.app.progress(progress);
      }
    });
  }

}

export default GameInit;