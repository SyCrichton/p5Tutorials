var bgcolor;
var button;
var slider;
var input;
var nameP;

function setup() {
  createCanvas(200, 200);
  bgcolor = color(200);

  nameP = createP('Your name!');
  nameP.mouseOver(overpara);
  nameP.mouseOut(outpara);

  button = createButton('go');
  button.mousePressed(changeColor);

  slider = createSlider(10, 100, 86);
  nameInput = createInput('type your name');
  nameInput.input(updateText);
}

function updateText() {
  nameP.html(nameInput.value());
}

function changeColor() {
  bgcolor = color(random(255));
}

function overpara() {
  nameP.html('your mouse is over me!');
}

function outpara() {
  nameP.html('your mouse is out');
}

function draw() {
  background(bgcolor);
  fill(255, 0 , 175);
  ellipse(100, 100, slider.value(), slider.value());
  text(nameInput.value(), 10, 20);
}
