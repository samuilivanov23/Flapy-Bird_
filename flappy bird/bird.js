function Bird(x, y, diameter){
  this.x = x;
  this.y = y;
  this.diameter = diameter;
  this.gravity = 0.6;
  this.upForce = -20;
  this.velocity = 0;
  this.isDeath = false;


  this.show = function(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };

  this.up = function(){
    this.velocity += this.upForce;
  };

  this.update = function(){
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;

      if(this.y > height - this.diameter / 2){
		  this.dead();
      }else if(this.y < this.diameter / 2){
		  this.dead();
	  }
  };

	this.dead = function () {
		this.isDeath = true;
		textSize(20);
		textAlign(CENTER);
		text("Game Over!", width / 2, height / 2)
	};

  this.checkDeath = function(){
    if(this.x >= pipe.x - (pipe.width + (this.diameter / 2)) && pipe.x > 120){
      if(!(this.y - (this.diameter / 2 * 0.9)> pipe.UpPadding && this.y + (this.diameter / 2 * 0.9) <pipe.DownPadding)){
		  this.dead();
      }
    }
  };
}
