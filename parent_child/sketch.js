function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvasP');
}


function draw() {
  background(0);
  ellipse(200,200,random(100),random(100));
}
