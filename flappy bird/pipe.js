function Pipe(){
  this.x = width;
  this.width = 30;
  this.height = 200;
  this.UpPadding = this.height;
  this.DownPadding = height - this.height;

  this.show = function(){
    rect(this.x - this.width, 0, this.width, this.height);
    rect(this.x - this.width, height - this.height, this.width, this.height);
  }

  this.move = function(){
    if(this.x <= this.width / 2){
      this.x = width;
    }
    this.x -= 3;
  }
}
