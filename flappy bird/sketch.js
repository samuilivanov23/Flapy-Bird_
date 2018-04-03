var bird;
var pipe;
function setup() {
  createCanvas(600,600);
  //background(51);
  bird = new Bird(125, height/2, 40);
  bird.isDeath = false;
  pipe = new Pipe();
}

function draw() {
  if(!bird.isDeath){
    background(51);
    fill(255);
    bird.show();
    bird.update();
    bird.checkDeath();
    fill(255,0,0);
    pipe.show();
    pipe.move();
}
}

function mousePressed(){
    bird.up();
}
