
class Ship {
  
  constructor(rot, x, y, vx, vy) {
  this.frame = 0;
    this.rot = rot;
    this.vel = createVector(vx, vy);
    this.pos = createVector(x, y)
  }
  update(){
    this.frame += 1;
    camera.pos.add(this.vel)

    camera.pos.x = round(camera.pos.x, 2);
    camera.pos.y = round(camera.pos.y, 2);
  //  this.pos.add(this.vel)
    this.vel.mult(0.9);
    this.vel.x = round(this.vel.x, 5);
    this.vel.y = round(this.vel.y, 5);
    push();
    translate(width/2, height/2);
   rotate(this.rot);
   imageMode(CENTER);
    
   
    
    if (keyIsPressed && keyCode === 32) {
     
      image(flame, 0, 75, 12, 100, 22*(this.frame%8), 60, 20, 100)
      
     // image(flame, 0, 32+random(-2, 2), 64, 64);
    
    
    }
   
    image(img, 0, 0, 64, 64);
    pop();
    
  }
}