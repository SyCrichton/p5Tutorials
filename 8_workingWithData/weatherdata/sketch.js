var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var city = 'Melbourne';
var apiKey = '&APPID=64b3743adeba271f90108fc0601fde2b';
var units = '&units=metric';

function setup() {
  createCanvas(400, 400);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}


function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  print(data);
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 300, weather.main.humidity, weather.main.humidity);
  }
}
