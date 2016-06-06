function setup() {
  createCanvas(300, 250);
}

function draw() {
  background(190, 206, 212);
  for(var i = 0; i < 5; i++){
  	premii[i].gravity();
  	premii[i].desen();
  }
  generateNewObjects();
    drawScoreBar();
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