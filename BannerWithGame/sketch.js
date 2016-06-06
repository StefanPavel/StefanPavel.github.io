var gameFinished = false;

function setup() {
  createCanvas(300, 250);
}

function draw() {
  background(190, 206, 212);
    if(allObjectsFinished()){
        gameOver();
        gameFinished = true;
    }
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
    if(gameFinished)
        resetGame();
    else{
        for(var i = 0; i < 5; i++){
            premii[i].click();
        }    
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
    text("Felicitari!", 100, 90);
    text("Ai strans " + Points + " puncte", 60, 120);
    text("click pentru a reincepe", 50, 150);
    noFill();
}

function resetGame(){
    gameFinished = false;
    MaxObjects = 10;
    initObjects(); 
    Points = 0;
}