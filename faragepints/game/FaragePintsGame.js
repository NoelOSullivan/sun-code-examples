import GameBase from '../../engine/GameBase';
import Farage from './Farage';
import Pints from './Pints';
import Scores from './Scores';
import Buttons from './Buttons';
import PlayerPint from './PlayerPint';

//import Gulp from './Gulp';
//import Scoring from './Scoring';

window.debug = false;

class FaragePintsGame extends GameBase {

  create() {
    super.create();

    this.started = false;

    this.world.setBounds(0,0,1280,960);
    this.root = this.game.add.group();
    this.pub = this.root.create(0, 0, 'bar');
    this.pints = new Pints(this);
    this.addEntity(this.pints);
    this.farage = new Farage(this);
    this.addEntity(this.farage);
    this.buttons = new Buttons(this);
    this.addEntity(this.buttons);
    this.playerPint = new PlayerPint(this);
    this.addEntity(this.playerPint);
    this.pintProgress = 0;
    this.scores = new Scores(this);
    this.addEntity(this.scores);
    this.manageSlurpSounds();
    this.ambience = this.add.sound("ambience");
    this.ambience.play();
  }

  manageSlurpSounds() {
    this.slurpSounds = [];
    for(var n=1; n<=7; n++) {
      this.slurpSounds.push(this.game.add.sound("slurp-"+n));
    }
  }

  go() {
    this.game.paused = false;
    this.started = true;
    this.scores.beginRound();
  }

  drink() {
    this.buttons.readyPlayer();
  }

  drinkStarted() {
    this.farage.startDrinking();
    this.scores.startedRound();
  }

  playerPintFinished() {
    this.pints.addUserPint();
    this.farage.showSpeech();
  }

  endRound() {
    this.buttons.stopInput();
    this.farage.reset();
    this.go();
  }

  farageWins() {
    this.farage.farageWins();
    this.buttons.hideButtons();
    this.buttons.stopInput();
    setTimeout(()=>{
      this.endGame();
    },2000);
  }

  endGame() {
    this.game.paused = true;
    this.score = this.pints.countU;
    this.app.lose(this.pints.countU);
  }

}

export default FaragePintsGame;