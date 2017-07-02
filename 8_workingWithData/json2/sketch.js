var data;

function preload() {
  data = loadJSON('birds.json');
}

function setup() {
  noCanvas();
  //var bird = data.birds[1].members[2];


  var birds = data.birds;

  for (var i = 0; i < birds.length; i++) {

    createElement('h1', birds[i].family);
    for (var j = 0; j < birds[i].members.length; j++) {
      createElement('p', birds[i].members[j]);
    }

  }


//       createP(bird);
}

function draw() {

}
