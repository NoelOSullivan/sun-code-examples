import Entity from '../../engine/Entity';
import Gulp from './Gulp';

class Farage extends Entity {

  create() {
    this.roundFinished = false;

    this.root = this.game.add.group();
    this.arm = this.game.add.group();
    this.root.add(this.arm);
    this.sprites = {
      body: this.root.create(0, 0, "farage", "farage-body"),
      head: this.root.create(0, 0, "farage", "farage-worried"),
      handBack: this.arm.create(0, 0, "farage", "hand1"),
      pintGlass: this.arm.create(0, 0, "farage", "pint1"),
      handFront: this.arm.create(0, 0, "farage", "hand2"),
      forearm: this.arm.create(0, 0, "farage", "forearm"),
      upperarm: this.arm.create(0, 0, "farage", "upperarm")
    };

    this.belch = this.game.add.sound("belch");

    this.gulps = this.game.add.group();

    this.root.create(0,391,'gradient')

    //----------------------------------------------------------------------------

    this.speech = [
      "I'LL BEAT YOU NEXT ROUND!",
      "I'LL WIN THE NEXT ONE!",
      "I'M JUST GETTING WARMED UP!",
      "I'M FINDING MY RHYTHM NOW!",
      "NEXT ROUND YOU'RE MINE!",
      "YOU'RE GOING DOWN NEXT ROUND!",
      "I'M BUILDING UP SPEED NOW!",
      "I'LL GET YOU NEXT ROUND!",
      "NEXT ROUND, YOU'RE TOAST!",
      "I'M SPEEDING UP NOW!"
    ];

    this.bubble = this.root.create(130,40, "farage", "bubble");
    this.bubble.anchor.setTo(1,1);
    this.bubble.alpha = 0;

    var text = this.bubbleText = this.parent.game.add.text(-200,-120, "Test");
    text.anchor.setTo(0.5,0.5);
    this.bubble.addChild(text);

    text.fill = "#000000";
    text.font = 'Avenir Next LT Pro Bold Condensed';
    text.fontSize = 42;
    text.wordWrap = true;
    text.wordWrapWidth = 300;
    text.align = "center";
    text.lineSpacing = 0;

    //----------------------------------------------------------------------------

    this.root.x = 435;
    this.root.y = 413;

    this.sprites.head.anchor.setTo(0.5,1);
    this.sprites.head.x = 185;
    this.sprites.head.y = 35;

    this.arm.angle = 20;
    this.arm.x = 303;
    this.arm.y = 42;
    this.sprites.upperarm.anchor.setTo(0.35,0.05);

    this.sprites.forearm.anchor.setTo(0.4,1);
    this.sprites.forearm.x = 45;
    this.sprites.forearm.y = 110;
    this.sprites.forearm.angle = 85;

    this.sprites.handBack.anchor.setTo(0,0.6);
    this.sprites.handBack.x = 192;
    this.sprites.handBack.y = 125;
    this.sprites.handBack.angle = -30;

    this.sprites.pintGlass.anchor.setTo(0.5,0.6);
    this.sprites.pintGlass.x = 285;
    this.sprites.pintGlass.y = 80;
    this.sprites.pintGlass.angle = -20;

    this.sprites.handFront.anchor.setTo(0,0.6);
    this.sprites.handFront.x = 189;
    this.sprites.handFront.y = 125;
    this.sprites.handFront.angle = -30;

    this.initVars();
  }

  update() {
    if(this.okToDrink) {
      this.okToDrink = false;
      this.startAnimation();
    }
  }

  //------------------------------------------------------------------------

  showSpeech() {
    this.speechVisible = true;
    // this.bubble.x = 375;
    // this.bubble.y = this.char.y + 60;
    var speechNum = this.random(1,this.speech.length) - 1;
    var text = this.speech[speechNum];
    this.bubbleText.text = this.speech[speechNum];
    this.bubbleText.fontSize = text.length > 20 ? (text.length > 30 ? 20 : 36) : 42;
    var tween = this.game.add.tween(this.bubble).to({alpha:1},500).start();
    tween.onComplete.add(this.hideSpeech,this);
  }

  hideSpeech() {
    var tween = this.game.add.tween(this.bubble).to({alpha:0},500).delay(2000).start();
    tween.onComplete.add(this.endSequence,this);
  }

  endSequence() {
    this.speechVisible = false;
  }

  //------------------------------------------------------------------------

  startDrinking() {
    this.okToDrink = true;
  }

  stopDrinking() {
    this.finished = true;
  }

  initVars() {
    this.finished = false;
    //-------------------------
    this.stage1Time = 200;
    this.stage2Time = 200;
    this.stage3Time = 300;
    this.stage4Time = 300;
    this.stage5Time = 500;
    this.stage6Time = 500;
    this.stage7Time = 500;
    this.stage8Time = 500;
    // this.stage1Time = 1000;
    // this.stage2Time = 1000;
    // this.stage3Time = 1000;
    // this.stage4Time = 1000;
    // this.stage5Time = 1000;
    // this.stage6Time = 1000;
    //-------------------------
    this.stage1Reduce = 6;
    this.stage2Reduce = 6;
    this.stage3Reduce = 5;
    this.stage4Reduce = 4;
    this.stage5Reduce = 10;
    this.stage6Reduce = 10;
    this.stage7Reduce = 10;
    this.stage8Reduce = 10;
    //-------------------------
    this.downStage1Time = 100;
    this.downStage2Time = 100;
    this.downStage3Time = 100;
    this.downStage4Time = 100;
    this.downStage5Time = 100;
    this.downStage6Time = 100;
    //-------------------------
    this.pauseStage1 = 1000;
    this.pauseStage2 = 0;
    //-------------------------
    this.pauseReduce1 = 20;
    this.pauseReduce2 = 25;

    this.pintCount = 1;

    this.startValues = {
      headFrame:"farage-worried",
      headAngle:0,
      headX:185,
      headY:35,
      upperArmAngle: 20,
      upperArmX: 303,
      upperArmY: 42,
      foreArmX:45,
      foreArmY:110,
      foreArmAngle: 85,
      pintX:285,
      pintY:80,
      pintAngle:-20,
      handX:192,
      handY:125,
      handAngle:-30,
      handFrontX:189,
      handFrontY:125,
      handFrontAngle:-30,
      pintFrame: "pint1"
    }
    this.timeline = [
      {
        duration: this.stage1Time,
        delay: this.pauseStage1,
        to: {
          upperArmAngle:10,
          upperArmX: 295,
          foreArmAngle:55,
          foreArmY: 125,
          handAngle:-16,
          handX:165,
          handY:50,
          pintAngle: -10,
          pintX:267,
          pintY:25
        }
      },
      {
        duration: this.stage2Time,
        delay: this.animateUpStage3,
        to: {
          upperArmAngle: 0,
          upperArmX: 300,
          foreArmAngle:35,
          handAngle:-2,
          handX:130,
          handY: 0,
          pintAngle:0,
          pintX:238,
          pintY:-2
        }
      },
      {
        duration: this.stage3Time,
        to: {
          foreArmAngle: 25,
          handAngle:-14,
          handX:107,
          handY:-10,
          pintAngle:-10,
          pintX:212,
          pintY:-27
        }
      },
      {
        duration: this.stage4Time,
        to: {
          foreArmAngle: 15,
          handAngle:-30,
          handX:80,
          handY:-15,
          pintAngle:-25,
          pintX:176,
          pintY:-60
        }
      },
      {
        duration: this.stage5Time,
        pintFrame: "pint2",
        headFrame: "farage-drink",
        gulp: [750,370,740,340,10],
        to: {
          headAngle: 20,
          headX:160,
          handAngle:-50,
          handX:85,
          handY:-10,
          handFrontX: 90,
          handFrontY: -17,
          pintAngle:-45,
          pintX:165,
          pintY:-92
        }
      },
      {
        duration: this.stage6Time,
        pintFrame: "pint3",
        gulp: [720,370,710,330,10],
        sound: "slurp",
        to: {
          headAngle: 10,
          handAngle:-65,
          handX:92,
          handY:-15,
          handFrontX: 90,
          handFrontY: -17,
          pintAngle:-60,
          pintX:150,
          pintY:-105
        }
      },
      {
        duration: this.stage7Time,
        pintFrame: "pint4",
        gulp: [710,370,690,330,10],
        sound: "slurp",
        to: {
          headAngle: 0,
          handAngle:-75,
          handX:95,
          handY:-15,
          pintAngle:-70,
          pintX:138,
          pintY:-113
        }
      },
      {
        duration: this.stage8Time,
        pintFrame: "pint5",
        gulp: [700,370,670,330,10],
        sound: "slurp",
        to: {
          headAngle: -10,
          handAngle:-85,
          handX:100,
          handY:-15,
          pintAngle:-80,
          pintX:120,
          pintY:-122
        }
      },
      {
        duration: this.downStage6Time,
        pintFrame: "pint6",
        sound: "slurp",
        pintFinished:true,
        to: {
          headAngle: -10,
          handAngle:-50,
          handX:85,
          handY:-10,
          pintAngle:-45,
          pintX:165,
          pintY:-92,
          handFrontX:90,
          handFrontY:-17
        }
      },
      {
        duration: this.downStage5Time,
        headFrame: "farage-worried",
        to: {
          headAngle: 0,
          headX: 185,
          foreArmAngle: 15,
          handAngle:-30,
          handX:80,
          handY:-15,
          pintAngle:-25,
          pintX:176,
          pintY:-57
        }
      },
      {
        duration: this.downStage4Time,
        to: {
          foreArmAngle: 35,
          handAngle:-14,
          handX:126,
          handY:6,
          pintAngle:-10,
          pintX:230,
          pintY:-14
        }
      },
      {
        duration: this.downStage3Time,
        to: {
          upperArmAngle: -20,
          upperArmX: 290,
          foreArmAngle: 45,
          handAngle:-2,
          handX:150,
          handY:20,
          pintAngle:2,
          pintX:255,
          pintY:20
        }
      },
      {
        duration: this.downStage2Time,
        to: {
          upperArmAngle: -10,
          upperArmX: 295,
          foreArmAngle: 55,
          foreArmY: 125,
          handAngle:6,
          handX:165,
          handY:40,
          pintAngle:10,
          pintX:270,
          pintY:55
        }
      },
      {
        duration: this.downStage1Time,
        pintFrame: "pint1",
        to: {
          upperArmAngle: 20,
          upperArmX: 303,
          upperArmY: 42,
          foreArmAngle: 85,
          foreArmX: 45,
          foreArmY: 110,
          handAngle:-30,
          handX:192,
          handY:125,
          handFrontX:189,
          handFrontY:125,
          pintAngle:-20,
          pintX:285,
          pintY:80
        }
      }
    ]
  }

  startAnimation() {
    var tween = null;
    var last = null;
    var values = this.shallowCopy(this.startValues);
    var multiplier = 0.425 + 2/Math.pow(2,(this.pintCount-0.5)*0.5); // 0.6 + (4/(this.pintCount));
    for (let item of this.timeline) {
      var next = this.game.add.tween(values);
      if (last!==null) {
        last.onComplete.add(()=>{
          this.beginTween(item);
        });
      }
      var handProps = ["Angle", "X", "Y"];
      for (var prop of handProps) {
        if (item.to.hasOwnProperty("hand"+prop) && !item.to.hasOwnProperty("handFront"+prop)) {
          item.to["handFront"+prop] = item.to["hand"+prop];
        }
      }
      next.to(item.to, item.duration * multiplier, Phaser.Easing.None, false, (item.delay || 0)*multiplier, 0);
      next.onUpdateCallback(this.applyValues, this);
      if (tween === null) {
        tween = next;
      }
      else {
        last.chain(next);
      }
      last = next;
    }
    last.onComplete.add(this.checkIfFinished, this);
    this.applyValues({target:values});
    this.beginTween(this.timeline[0]);
    tween.start();
  }

  beginTween(item) {

    if (item.hasOwnProperty("pintFrame")) {
      this.sprites.pintGlass.frameName = item.pintFrame;
    }
    if (item.hasOwnProperty("headFrame")) {
      this.sprites.head.frameName = item.headFrame;
    }
    if (item.hasOwnProperty("sound")) {
      if (item.sound === "slurp") {
        this.playSlurpSound();
      }
    }
    if (item.hasOwnProperty("gulp")) {
      this.initGulp.apply(this, item.gulp);
    }
    if (item.hasOwnProperty("pintFinished")) {
      this.parent.pints.addFaragePint();
      this.pintCount++;
    }
    if (item.to.hasOwnProperty("headX")) {
      this.sprites.head.x = item.to.headX;
    }
  }

  applyValues(tween) {
    var values = tween.target;
    this.sprites.handBack.angle = values.handAngle;
    this.sprites.handBack.x = values.handX;
    this.sprites.handBack.y = values.handY;
    this.sprites.handFront.angle = values.handFrontAngle;
    this.sprites.handFront.x = values.handFrontX;
    this.sprites.handFront.y = values.handFrontY;
    this.sprites.pintGlass.angle = values.pintAngle;
    this.sprites.pintGlass.x = values.pintX;
    this.sprites.pintGlass.y = values.pintY;
    this.sprites.head.angle = values.headAngle;
    //this.sprites.head.x = values.headX;
    this.sprites.head.y = values.headY;
    this.arm.angle = values.upperArmAngle;
    this.arm.x = values.upperArmX;
    this.arm.y = values.upperArmY;
    this.sprites.forearm.angle = values.foreArmAngle;
    this.sprites.forearm.x = values.foreArmX;
    this.sprites.forearm.y = values.foreArmY;
  }

  shallowCopy(oldObj) {
      var newObj = {};
      for(var i in oldObj) {
          if(oldObj.hasOwnProperty(i)) {
              newObj[i] = oldObj[i];
          }
      }
      return newObj;
  }

  // -----------------------------------------------------------
    //this.playSlurpSound();

  // -----------------------------------------------------------

  initGulp(gulpX,gulpY,gulpToX,gulpToY,gulpAngle) {
    this.gulpX = gulpX;
    this.gulpY = gulpY;
    this.gulpToX = gulpToX;
    this.gulpToY = gulpToY;
    this.gulpAngle = gulpAngle;
    var gulp = new Gulp(this);
    this.parent.addEntity(gulp);
  }

  checkIfFinished() {
    this.roundFinished = true;
  }

  farageWins() {
    this.belch.play();
    this.sprites.head.frameName = "farage-won";
  }

  playSlurpSound() {
    var n = Math.floor(Math.random() * 6);
    this.parent.slurpSounds[n].play();
  }

  reset() {
    this.roundFinished = false;
  }

}

export default Farage;