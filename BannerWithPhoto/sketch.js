var capture;
var cnv;
var nume = "Popescu";
var prenume = "Ion";
var logo;
var started = false;

function setup() {
    cnv = createCanvas(320, 240);
    logo = loadImage("logo.png");
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide();
}

function draw() {
    background(190, 206, 212);
    drawCertificat();
}

function mousePressed(){
    if(started)
        savePhoto();
}

function savePhoto(){
    saveCanvas(cnv, "certificat", "png");
}

function drawCertificat(){
    background(190, 206, 212); 
    image(capture, 10, 10, 128, 96);
    image(logo, 190, 120, 116, 100);
    
    textSize(25);
    text("     Licenta\nPilot de Curse", 150, 50);
    
    textSize(16);
    text("Nume: " + nume, 10, 166);
    text("Prenume: " + prenume, 10, 196);
}

function hideInput(){
    nume = document.getElementById("nume").value;
    prenume = document.getElementById("prenume").value;
    $("#container").css("z-index", "-1");
    started = true;
}

$(document).ready(function(){
    $("#btn").click(function(){
        hideInput();
    });
});