var value = 0;

function setup() {
  createCanvas(480, 320);
  background(153);
}

function draw() {
  fill(value);
  background(value);
}
function deviceMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}