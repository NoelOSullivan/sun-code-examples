import GameInit from '../../engine/GameInit';

class FarageInit extends GameInit {

  preload() {
    this.game.load.image("bar", "sprites/background.png");
    this.game.load.image("gradient", "sprites/gradient-front.png");
    this.game.load.atlas("farage-you", "sprites/farage-you.png", "sprites/farage-you.json");
    this.game.load.atlas("farage", "sprites/farage.png", "sprites/farage.json");
    this.game.load.atlas("pints", "sprites/pints.png", "sprites/pints.json");
    this.game.load.atlas("buttons", "sprites/buttons.png", "sprites/buttons.json");
    this.game.load.audio("belch", [ "audio/belch.ogg", "audio/belch.wav"], true);
    this.game.load.audio("ambience", [ "audio/ambience.ogg", "audio/ambience.wav"], true);
    for (var n = 1; n <= 4; n++ ){
      this.game.load.audio("glass-"+n, [ "audio/glass-"+n+".ogg", "audio/glass-"+n+".wav"], true);
    }
    for (var n = 1; n <= 7; n++ ){
      this.game.load.audio("slurp-"+n, [ "audio/slurp-"+n+".ogg", "audio/slurp-"+n+".wav"], true);
    }
    super.preload();
  }

}

export default FarageInit;