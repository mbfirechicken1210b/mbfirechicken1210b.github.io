let sunLines = []; // array of sline objects
let sunSize = 240;
let lineStep = 24

let oceanLines = []; // array of sline objects

function setup() {
  createCanvas(710, 400);
  // Create objects
  for (var i=0; i<sunSize/lineStep; i++) {
    sunLines.push(new sline(i*lineStep));
  }

  oceanLines.push(new oline());
}

function draw() {
  background(255);
  for (var i=0; i<sunLines.length; i++) {
    sunLines[i].move();
    sunLines[i].display();
    if(sunLines[i].r >sunSize ){
    	sunLines.splice(i, 1);
    	sunLines.push(new sline(0));
    }
  }

  oceanLines[0].move();
  //oceanLines[0].display();
}

// sline class
function sline(r) {
  this.x = width/2;
  this.y = height/2;
  this.r = r;

  this.move = function() {
    this.r+=0.05;
  };

  this.display = function() {
  	noFill();
  	stroke(0,map(this.r,0,sunSize,255,30));
    ellipse(this.x, this.y, this.r, this.r);
  };
}



function oline() {
  this.x = width/2;
  this.y = height*3/4;
  this.ang=0;
  this.scalar = 20;
  this.linelong = 20;
  this.linewidth = 0;

  this.move = function() {
    this.linewidth = this.linelong + (this.scalar * cos(radians(this.ang)));
    this.ang++;
  };

  this.display = function() {
    stroke(0);
    line(this.x,this.y,this.x+this.linewidth,this.y);
  };
}

