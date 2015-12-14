import Entity from '../../engine/Entity';

class Gulp extends Entity {
  create() {
  	this.root = this.game.add.group();
    this.gulp = this.root.create(this.parent.gulpX, this.parent.gulpY, "farage", "gulp")
    this.gulp.anchor.setTo(0.5,2);
    this.gulp.angle = this.parent.gulpAngle;
    this.animateGulp();
  }

  animateGulp() {
  	var animGulp = this.game.add.tween(this.gulp)
      .to({
      	x: this.parent.gulpToX,
      	y: this.parent.gulpToY,
        angle: -45,
        alpha: 0
      }, 300).start().onComplete.add(()=>{
        this.destroy();
      });
  }
}

export default Gulp;