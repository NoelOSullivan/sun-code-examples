function Egg(endX,endY) {
	this.endX = Math.floor(endX);
	this.endY = Math.floor(endY);
	this.container = new createjs.Container();
	this.bitmap = new createjs.Bitmap("images/egg.png");
	this.container.addChild(this.bitmap);

	this.container.regX = 82;
	this.container.regY = 112;

	if(this.endX < 460) {
		this.startX = -100;
	} else {
		this.startX = 1060;
	}

	if(this.endY > 800) {
		this.startY = 1280;
	} else {
		if(this.endY > 700) {
			this.startY = 1100;
		} else {
			if(this.endY > 600) {
				this.startY = 950;
			} else {
				if(this.endY > 500) {
					this.startY = 800;
				} else {
					if(this.endY > 400) {
						this.startY = 600;
					} else {
						this.startY = 400;
					}
				}
			}
		}
	}
	this.container.x = this.startX;
	this.container.y = this.startY;
}

Egg.prototype.animate = function(callback) {
	var scale = 0.4;
	var rotate = Math.random() * 3  * 360;
	var time = Math.floor(Math.random() * (400 - 200)) + 200;
	this.animFinished = callback;
	createjs.Tween.get(this.container).to({x:this.endX, y:this.endY}, time).call(this.animFinished,this);
	createjs.Tween.get(this.container).to({scaleX:scale, scaleY:scale}, time);
	createjs.Tween.get(this.container).to({rotation:rotate}, time);
}	