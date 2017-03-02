var constraints = { audio: false, video: { width: 600, height: 500, facingMode: "user" } };
var capture, photo = false;
function setup() {
    createCanvas(300, 250);
    capture = createCapture(constraints);
    capture.hide();
}

function draw() {
    background(255);
    if(photo)
        capture.pause();
    image(capture, 0, 0, 300, 250);
}

window.addEventListener('click', takePhoto);

function takePhoto(){
    photo = true;
}
