import Entity from '../../engine/Entity';

class Scores extends Entity {

  create() {
    this.youText = this.game.add.text(174,170,"0");
    this.youText.anchor.setTo(0.5,0);
    this.youText.fill = "#ffffff";
    this.youText.font = 'Avenir Next LT Pro Heavy Condensed';
    this.youText.fontSize = 80;
    this.youText.setShadow(2, 4, 'rgba(0,0,0,0.5)', 5);
    this.farageText = this.game.add.text(1120,170,"0");
    this.farageText.anchor.setTo(0.5,0);
    this.farageText.fill = "#ffffff";
    this.farageText.font = 'Avenir Next LT Pro Heavy Condensed';
    this.farageText.fontSize = 80;
    this.farageText.setShadow(2, 4, 'rgba(0,0,0,0.5)', 5);

    this.roundsText = this.game.add.text(640,480,"Round 1");
    this.roundsText.visible = false;
    this.roundsText.setShadow(4, 8, 'rgba(0,0,0,0.8)', 10);
    this.roundsText.anchor.setTo(0.5,0.5);
    this.waiting = false;
    this.farageWon = false;
  }

  beginRound() {
    var roundNo = this.parent.pints.countF + 1;
    this.roundsText.text = "Round " + roundNo;
    this.roundsText.visible = true;
    this.roundsText.anchor.setTo(0.5,0);
    this.roundsText.fill = "#ffffff";
    this.roundsText.font = 'Avenir Next LT Pro Heavy Condensed';
    this.roundsText.fontSize = 140;
    this.roundsText.x = -300;
    var roundTween = this.game.add.tween(this.roundsText).to({ x:640 }, 500, Phaser.Easing.Cubic.In, false);
    var roundTween2 = this.game.add.tween(this.roundsText).to({x: 1580}, 500, Phaser.Easing.Cubic.Out, false, 1000);
    roundTween.chain(roundTween2);
    roundTween2.onComplete.add(this.beginRoundAnimationFinished, this);
    roundTween.start();
  }

  beginRoundAnimationFinished() {
    this.waiting = true;
    this.roundsText.x = 640;
    this.roundsText.text = "Drink!";
    this.drinkStartTime = this.game.time.time;
    this.parent.drink();
  }

  startedRound() {
    this.roundsText.visible = false;
    this.waiting = false;
  }

  update() {
    var time = (this.drinkStartTime - this.game.time.time) / 1000;
    var frac = time - Math.floor(time);
    if (this.waiting === true) {
      this.roundsText.visible = (frac > 0.5);
    }

    this.youText.text = this.parent.pints.countU;
    this.farageText.text = this.parent.pints.countF;

    if (this.parent.farage.roundFinished === true && this.farageWon !== true) {
      if (this.parent.buttons.pintFinished === true) {
        this.parent.endRound();
      }
      else {
        this.farageWon = true;
        this.parent.farageWins();
      }
    }
  }

}

export default Scores;