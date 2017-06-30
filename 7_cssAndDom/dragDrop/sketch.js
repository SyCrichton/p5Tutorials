var dropzone;

function setup() {
  createCanvas(200, 200);
  background(0);

  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unHighlight);
  dropzone.drop(gotFile, unHighlight);
}

function highlight() {
  dropzone.style('background-color', '#ccc');
}

function unHighlight() {
  dropzone.style('background-color', '#fff');
}

function gotFile(file) {
  var img = createImg(file.data);
  img.size(100,100);
}



function draw() {
}
