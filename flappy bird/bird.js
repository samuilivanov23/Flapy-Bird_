function Bird(x, y, diameter) {
	this.x = x;
	this.y = y;
	this.diameter = diameter;
	this.radius = diameter / 2.0;
	this.gravity = 0.6;
	this.upForce = -20;
	this.velocity = 0;
	this.isDeath = false;


	this.show = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	};

	this.up = function() {
		this.velocity += this.upForce;
	};

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

	};

	this.dead = function() {
		this.isDeath = true;
		textSize(20);
		textAlign(CENTER);
		text("Game Over!", width / 2, height / 2)
	};

	this.checkDeath = function(pipe) {
		if (this.y > height - this.radius || this.y < this.radius) {
			this.dead();
		}else if (this.x + this.radius > pipe.x && this.x - this.radius < pipe.x + pipe.width &&
			(this.y + this.radius > pipe.DownPadding || this.y - this.radius < pipe.UpPadding)) {
			this.dead();
		}
	};
}
