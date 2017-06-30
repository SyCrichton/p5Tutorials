var canvas;
var h1;

function setup() {
  canvas = createCanvas(200, 200);
  canvas.position(400, 0);
  h1 = createElement('h1', 'My favorite numbers below:');
  h1.position(400, 100);
}

function mousePressed() {
  createP("My favorite number is " + random(0,10));
}


function draw() {
  background(0);
  fill(255, 0, 0);
  rect(100,100,50,50);
}
