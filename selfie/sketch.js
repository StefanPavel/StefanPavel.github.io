var constraints = { audio: false, video: { width: 600, height: 500, facingMode: "user" } };
var capture, photo = false;
var cnv;
function setup() {
    cnv = createCanvas(300, 250);
    capture = createCapture(constraints);
    capture.hide();
}

function draw() {
    background(244, 241, 66);
    if(photo)
        capture.pause();
    image(capture, 0, 0, 300, 250);
}

window.addEventListener('click', takePhoto);

function takePhoto(){
    photo = true;
    resizeCanvas(570, 480);
    
    $.ajax({
        type: 'POST',
        url: 'https://ftp.voxline.ro/api/v1.0/save-selfie',
        data: { 
            'img': cnv.canvas.toDataURL()
        },
        success: function(msg){
            alert('ok');
            console.log(msg);
        },
        error: function(msg){
            alert('err');
            console.log(msg);
        },
        dataType: 'json'
    });
    
    resizeCanvas(300, 250);
}
