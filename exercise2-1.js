let sp = []; // Declare the object
let num = 30;

function setup() {
  colorMode(HSB, 360, 200, 100, 255);
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  background(25);
  // Construct the object
  for (let i = 0; i < num; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let d = random(5, 100);
    let c = createVector(random(0, 90), random(0, 90));
    let r = random(0.1, 0.01);
    let e = random(0.005, 0.05);
    let v = createVector(x, y);
    sp[i] = new Spot(v, d, e, c, r); // Fixed order of parameters
  }
}

function draw() {
  background(0, 3);
  for (let i = 0; i < num; i++) {
    sp[i].move();
    sp[i].display();
  }
}

// ES6 Class Syntax
class Spot {
  // Construct the object
  constructor(vect, diameter, ease, col, rate) {
    this.v = vect
    this.d = diameter;
    this.e = ease;
    this.c = col;
    this.r = rate;
    this.angle = random(0,TWO_PI);
    
  }
  
  // method to display the object
  display() {
    let co = map(sin(frameCount * this.r), -1, 1);
    fill(this.c.x, 100, 100);
    push();
    translate(this.v.x , this.v.y);
    this.angle += this.r;
    rotate(this.angle);
    if (this.angle > TWO_PI) {
      this.angle = 0;
    }
    rect(0,0,this.d, this.d, );
    pop();
  
  }
  
  move() {
    if (mouseIsPressed) {
      let dx = mouseX - this.v.x  ;
      this.v.x -= dx * this.e;
      let dy = mouseY - this.v.y;
      this.v.y - dy * this.e;
    } else {
      let dx = mouseX - this.v.x;
      this.v.x += dx * this.e;
      let dy = mouseY - this.v.y;
      this.v.y += dy * this.e;
      
    }
    
   
  }
}
