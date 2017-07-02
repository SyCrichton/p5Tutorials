var x = 0;
var spaceData;

function setup() {
  loadJSON('http://api.open-notify.org/astros.json', gotData, 'jsonp');
  createCanvas(400,400);

}

function gotData(data) {

  spaceData = data;
  createElement('h1', 'People currently in space');
  for (var i = 0; i < spaceData.people.length; i++) {
    createP(spaceData.people[i].name);
  }
}

function draw() {
  background(0);

  if (spaceData) {
    randomSeed(4);
    for (var i = 0; i < spaceData.number; i++) {
      fill(255);
      ellipse(random(width), random(height), 16, 16);
    }

    stroke(255);
    line(x, 0, x, height);
    x++;
    if (x>width) {
      x = 0;
    }
  }
}
