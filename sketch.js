let img;
let player;
let flame;
let targetAngle;
let camera
function preload() {
  img = loadImage('ship (2).png');
  flame = loadImage('rocketflame.png')
  camera = new Camera(0, 0);
  player = new Ship(0, 50, 50, 0, 0)
   frameRate(60);
  

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(0);
    let fps = frameRate();
  stroke(255);
  fill(255);
  text(fps, 50, 50);
  circle(-camera.pos.x, -camera.pos.y, 5)
  targetAngle = atan2(mouseX - width/2, mouseY - height/2);

  player.rot = -targetAngle + 180;

  if (keyIsPressed && keyCode === 32) {

      let direction = createVector(mouseX - width/2, mouseY - height/2);
      direction.normalize();
      direction.mult(0.5);
      player.vel.add(direction);
    
  }
  player.update();
}
  function windowResized() { 
    resizeCanvas(windowWidth, windowHeight); 
} 



