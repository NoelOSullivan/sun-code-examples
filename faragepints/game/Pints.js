import Entity from '../../engine/Entity';

class Pints extends Entity {

  create() {
    this.root = this.game.add.group();
    this.pintsFarage = this.game.add.group();
    this.pintsUser = this.game.add.group();
    this.positionVars();

    this.glassSounds = [];
    for(var n=1; n<=4; n++) {
      this.glassSounds.push(this.game.add.sound("glass-"+n));
    }
  }

  positionVars() {
    // Farage
    this.startF = [{x:1144, y:750}, {x:1044, y:700}, {x:944, y:750}];
    this.stackF = 1;
    this.countF = 0;

    // User
    this.startU = [{x:50, y:750}, {x:150, y:700}, {x:250, y:750}];
    this.stackU = 1;
    this.countU = 0;

    // Both
    this.diffY = 50;
    this.maxPints = 30;
    this.diffPints = 2;
  }

  addFaragePint() {
    this.pintsFarage.removeAll(true, true);
    for (var i=this.countF;i>=0;i--) {
      var stackF = Math.floor(i/10);
      var posX = this.startF[stackF].x;
      var posY = this.startF[stackF].y - ((i%10) * this.diffY);
      if((i == this.countF) || (((i+1) % 10 == 0))) {
        var pint = "top-pint";
      } else {
        var pint = "bottom-pint";
      }

      if((i == this.countF) && (i % 10 !== 0)){
        this.pintGlass = this.pintsFarage.create(posX, posY - 40, "pints", pint);
        this.animateGlass(posY);
      } else {
        this.pintsFarage.create(posX, posY, "pints", pint);
      }
    }
    this.countF += 1;
    if(this.countF >= this.countU + this.diffPints ) {
        this.parent.farage.stopDrinking();
    }
  }

  addUserPint() {
    this.pintsUser.removeAll(true, true);
    for (var i=this.countU;i>=0;i--) {
      var stackU = Math.floor(i/10);
      var posX = this.startU[stackU].x;
      var posY = this.startU[stackU].y - ((i%10) * this.diffY);
      if((i == this.countU) || (((i+1) % 10 == 0))) {
        var pint = "top-pint";
      } else {
        var pint = "bottom-pint";
      }

      if((i == this.countU) && (i % 10 !== 0)){
        this.pintGlass = this.pintsUser.create(posX, posY - 40, "pints", pint);
        this.animateGlass(posY);
      } else {
        this.pintsUser.create(posX, posY, "pints", pint);
      }
    }
    this.countU += 1;
    if(this.countU == this.maxPints) {
        this.parent.buttons.stopInput();
    }
  }

  animateGlass(posY) {
    var animGlass = this.game.add.tween(this.pintGlass)
      .to({
        y: posY
      }, 300).start();
    animGlass.onComplete.add(this.playGlassSound,this);
  }

  playGlassSound() {
    var n = Math.floor(Math.random() * 3);
    this.glassSounds[n].play();
  }

}

export default Pints;