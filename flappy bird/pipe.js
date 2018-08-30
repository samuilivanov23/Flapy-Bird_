function Pipe(){
  this.position = width;
  this.width = 30;
  this.height = 200;
  this.UpPadding = this.height;
  this.DownPadding = height - this.height;

  this.show = function(){
    rect(this.position - this.width, 0, this.width, this.height);
    rect(this.position - this.width, this.DownPadding, this.width, this.height);
  };

  this.move = function(){
    if(this.position <= this.width / 2){
      this.position = width;
    }
    this.position -= 3;
  };
}
