import Entity from '../../engine/Entity';

class Buttons extends Entity {

  create() {
    this.root = this.game.add.group();
    //this.parent.isTouchDevice = true;
    if(this.parent.isTouchDevice) {
      this.frameNames = {
        left1: "tap1",
        left2: "tap2",
        right1: "tap1",
        right2: "tap2"
      }
    } else {
      this.frameNames = {
        left1: "left1",
        left2: "left2",
        right1: "right1",
        right2: "right2"
      }
    }
    this.leftButton = this.root.create(69, 429, "buttons", this.frameNames.left1);
    this.rightButton = this.root.create(1023, 429, "buttons", this.frameNames.right1);
    this.keys = this.parent.game.input.keyboard.createCursorKeys();
    this.lastKeys = {
      left: this.keys.left.isDown,
      right: this.keys.right.isDown
    }
    this.lastPointer = {
      mouse: false,
      1: false,
      2: false
    }
    this.nextButton = Buttons.EITHER;
    this.mashCount = 0;
    this.mashLimit = 32;
    this.allowInput = false;
    this.notifyStart = false;
    this.pintFinished = false;
  }

  readyPlayer() {
    this.notifyStart = true;
    this.allowInput = true;
    this.pintFinished = false;
  }

  stopInput() {
    this.allowInput = false;
  }

  hideButtons() {
    this.leftButton.visible = false;
    this.rightButton.visible = false;
  }

  //---------------------------------------------------------

  manageMash() {
    this.mashCount++;
    this.parent.pintProgress = this.mashCount/this.mashLimit;
    if(this.mashCount >= this.mashLimit) {
      this.userSwigs();
      this.mashCount = 0;
    }

    if (this.notifyStart) {
      this.notifyStart = false;
      this.parent.drinkStarted();
    }
  }

  //---------------------------------------------------------

  userSwigs() {
    this.pintFinished = true;
    this.stopInput();
    this.parent.playerPintFinished();
  }

  leftDown() {
    //alert("left")
    if (this.nextButton === Buttons.RIGHT) return;
    this.nextButton = Buttons.RIGHT;
    this.leftButton.frameName = this.frameNames.left2;
    this.rightButton.frameName = this.frameNames.right1;
    this.manageMash();
  }

  rightDown() {
    //alert("right")
    if (this.nextButton === Buttons.LEFT) return;
    this.nextButton = Buttons.LEFT;
    this.leftButton.frameName = this.frameNames.left1;
    this.rightButton.frameName = this.frameNames.right2;
    this.manageMash();
  }

  //---------------------------------------------------------

  update() {

    // KEYBOARD
    if(!this.allowInput) return;

    this.handleKeys();
    //this.handleTouch("mouse", this.adjustPointer(this.game.input.mousePointer));
    //this.handleTouch(1, this.adjustPointer(this.game.input.pointer1));
    //this.handleTouch(2, this.adjustPointer(this.game.input.pointer2));

    this.game.input.onTap.add((e)=> {
      if (!this.allowInput) return;
      this.handleTap(this.adjustPointer({ x: e.x, y:e.y}));
      event.preventDefault();
    });

  }

  handleKeys() {

    if (this.keys.left.isDown) {
      if (!this.lastKeys.left) {
        this.leftDown();
      }
      this.lastKeys.left = true;
    }
    else {
      this.lastKeys.left = false;
    }
    if (this.keys.right.isDown) {
      if (!this.lastKeys.right) {
        this.rightDown();
      }
      this.lastKeys.right = true;
    }
    else {
      this.lastKeys.right = false;
    }

  }

  adjustPointer(pointer) {
    var px = pointer.x / this.parent.app.scale.globalScale;
    var py = pointer.y / this.parent.app.scale.globalScale;
    return { x: px, y: py, isDown: pointer.isDown };
  }

  handleTouch(id, pointer) {
    if (pointer.isDown) {
      if (!this.lastPointer[id]) {
        this.handleTap(pointer);
      }
      this.lastPointer[id] = true;
    }
    else {
      this.lastPointer[id] = false;
    }
  }

  handleTap(pointer) {
    if(pointer.x < 640) {
      this.leftDown();
    } else {
      this.rightDown();
    }
  }
}

Buttons.LEFT = "left";
Buttons.RIGHT = "right";
Buttons.EITHER = "either";

export default Buttons;