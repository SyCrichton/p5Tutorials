function setup() {
  var km = milesToKm(26.3);
  var km2 = milesToKm(100);
  print(km);
  print(km2);
}

function milesToKm(miles) {
  var km = miles * 1.6;
  return km;
}

function draw() {
}
