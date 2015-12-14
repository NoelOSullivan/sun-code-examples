import viewport from './viewport';

/**
 * Base game class, also functions as the main game state
 */
class GameBase {

  constructor(game) {
    this.game = game;
    this.worldScale = 1;
    this.entities = [];
    this.hasStarted = false;
    this.currentScreen = null;
  }

  initialize(initState) {
    this.game = new Phaser.Game(1280, 960, Phaser.AUTO, "game-container");
    this.game.state.add("main", this);
    if (typeof initState === "undefined") {
      this.start();
    }
    else {
      this.game.state.add("init", initState);
      this.game.state.start("init");
    }
  }

  start() {
    this.game.paused = false;
    if (!this.hasStarted) {
      this.hasStarted = true;
      this.game.state.start("main");
    }
    else {
      this.game.state.restart();
    }
  }

  goTo(screen, callback) {
    if (typeof callback === "undefined") {
      callback = (err)=> {
        if (err) console.error(err);        
      };
    }
    if (this.transitioning) {
      console.log("already transitioning")
      return callback(new Error("Transition already in progress"));
    }
    this.transitioning = true;
    if (this.currentScreen !== null) {
      this.transitionScreenOut(screen, (err,result)=>{
        if (err) {
          // Something prevented the transition
          this.transitioning = false;
          return callback(err);
        }
        this.transitionScreenIn(screen,callback);
      });
    }
    else {
      // Transition new one in straightaway if there wasn't an old one.
      this.transitionScreenIn(screen,callback);
    }
  }

  transitionScreenOut(to, callback) {
    this.currentScreen.transitionOut(to, (err,result)=>{
      if (err) return callback(err);
      this.currentScreen.destroy();
      callback();
    });
  }

  transitionScreenIn(screen, callback) {
    var outgoing = this.currentScreen;
    this.currentScreen = screen;
    screen.create();
    screen.transitionIn(outgoing, (err,result)=>{
      this.transitioning = false;
      callback(err,result);
    });
  }

  preload() {

    this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.USER_SCALE;
    this.scale.fullScreenTarget = $("#game-container")[0];
    this.app.scale.rescale();

    this.game.events = this.game.events || {};
/*
    this.game.events.onGameLose = new Phaser.Signal();
    this.game.events.onGameWin = new Phaser.Signal();
    this.game.events.onGameLose.add(this.onGameLose, this);
    this.game.events.onGameWin.add(this.onGameWin, this);
*/
  }

  create() {
    // Perform some general world setup
    this.gameover = false;
    this.started = false;
    this.game.time.advancedTiming = true;

    //this.game.physics.startSystem(Phaser.Physics.P2JS);
    //this.game.physics.p2.friction = 0.9;

    this.score = 0;

    this.entities = [];
  }

  destroy() {
    for (var e of this.entities) {
      if (typeof e.destroy !== "undefined") {
        e.destroy();
      }
    }
  }

  addEntity(entity) {
    this.entities.push(entity);
    if (typeof entity.create !== 'undefined') {
      entity.create();
    }
  }

  update() {
    if (this.gameover) return;

    this.gametime = new Date() - this.starttime;

    this.entities = this.entities.filter((e)=>!e.destroyed);

    for (var e of this.entities) {
      if (e.destroyed === true) {
        continue;
      }
      if (typeof e.update !== 'undefined') {
        e.update();
      }
    }
    for (var e of this.entities) {
      if (e.destroyed === true) {
        continue;
      }
      if (typeof e.postUpdate !== 'undefined') {
        e.postUpdate();
      }
    }
  }
/*
  onGameWin() {
    this.gameover = true;
    window.app.gameover({
      winning: true,
      time: this.gametime,
      level: this.levelNumber,
      score: this.score
    });
  }

  onGameLose() {
    this.gameover = true;
    setTimeout(()=>{
      window.app.gameover({
        winning: false,
        time: this.gametime,
        level: this.levelNumber,
        score: this.score
      });
    },1000);
  }*/

  get isMuted() {
    return this.game.sound.mute;
  }

  toggleAudio() {
    this.game.sound.mute = !this.game.sound.mute;
    return this.game.sound.mute;
  }

  toggleFullscreen() {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
    else {
      this.game.scale.startFullScreen(false);
    }
  }

  exitFullscreen() {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen();
    }
  }
}

export default GameBase;