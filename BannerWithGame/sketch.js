function setup() {
  createCanvas(300, 250);
}

function draw() {
  background(190, 206, 212);
    if(allObjectsFinished())
        gameOver();
    else{
        for(var i = 0; i < 5; i++){
            premii[i].gravity();
            premii[i].desen();
        }
        generateNewObjects();
        drawScoreBar();
    }
  
}

function mouseClicked(){
	for(var i = 0; i < 5; i++){
        premii[i].click();
    }
}

function drawScoreBar(){
    fill(0);
    rect(0, 0, 300, 15);
    fill(255);
    text("Scor: " + Points, 120, 0, 300, 250);
    noFill();
    
}

function gameOver(){
    fill(255);
    textSize(20);
    text("Felicitari!", 100, 110);
    text("Ai strans " + Points + " puncte", 60, 140);
    noFill();
}