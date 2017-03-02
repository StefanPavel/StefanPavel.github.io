var constraints = { audio: false, video: { width: 600, height: 500, facingMode: "user" } };
var capture;
function setup() {
    createCanvas(300, 250);
    capture = createCapture(constraints);
    capture.hide();
}

function draw() {
    background(255);
    image(capture, 0, 0, 300, 250);
}