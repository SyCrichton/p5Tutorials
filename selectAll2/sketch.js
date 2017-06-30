var paragraph;

function setup() {
  createCanvas(100, 100);
  background(0);

  //paragraph = select('#unicorn');
  paragraphs = selectAll('p');
  for (var i = 0; i<paragraphs.length; i++)  {
    paragraphs[i].style('font-size','48pt');
  }

  var button = select('#button');
  button.mousePressed(canvasBg);
}

function changeBackground() {
  paragraph.style('background-color', '#F0F');
}

function canvasBg() {
  background(random(255));
}

function draw() {
}
