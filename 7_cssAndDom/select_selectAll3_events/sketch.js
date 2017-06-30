var paragraph;

function setup() {
  createCanvas(100, 100);
  background(0);

  //paragraph = select('#unicorn');
  //paragraph.mouseOver(highlight);
  //paragraph.mouseOut(unHighlight);
  paragraphs = selectAll('p');
  for (var i = 0; i<paragraphs.length; i++)  {
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unHighlight);
  }


  var button = select('#button');
  button.mousePressed(canvasBg);
}

function highlight() {
  this.style('padding','16pt');
  this.style('background-color', '#F0F');
}

function unHighlight() {
  this.style('padding','0pt');
  this.style('background-color', '#FFF');
}

function canvasBg() {
  background(random(255));
}

function draw() {
}
