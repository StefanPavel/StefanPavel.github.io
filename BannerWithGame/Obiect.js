var Premiu = function(isPoint, xPos, yPos){
	this.isPoint = isPoint;
	this.xPos = xPos;
	this.yPos = yPos;
	this.finished = false;
    MaxObjects--;
    
	this.gravity = function(){
		this.yPos += 1;
	};
	this.desen = function(){
		if(this.yPos > 250 || this.finished){
			this.finished = true;
			return true;
		}
		stroke(255, 0, 0);
		fill(255, 0, 0);
		ellipse(this.xPos, this.yPos, 20, 20);
        noStroke();
        noFill();
	};
	
	this.click = function(){
		var dist = Math.sqrt( (this.xPos - mouseX)*(this.xPos - mouseX) + (this.yPos - mouseY)*(this.yPos - mouseY) );
        if(dist <= 30 && !this.finished){
            this.finished = true;
            Points++;
        }
	}
}    

var Points = 0;
var MaxObjects = 10;

var premii = [new Premiu(true, (Math.random() * 1000) % 240 + (Math.random() * 1000) % 30, -10 - (Math.random() * 1000) % 101 ),
            new Premiu(true, (Math.random() * 1000) % 240 + (Math.random() * 1000) % 30, -5 - (Math.random() * 1000) % 101 ),
            new Premiu(true, (Math.random() * 1000) % 240 + (Math.random() * 1000) % 30, -3 - (Math.random() * 1000) % 101 ),
            new Premiu(true, (Math.random() * 1000) % 240 + (Math.random() * 1000) % 30, -15 - (Math.random() * 1000) % 101 ),
            new Premiu(true, (Math.random() * 1000) % 240 + (Math.random() * 1000) % 30,  - (Math.random() * 1000) % 101 )];



function generateNewObjects(){
	for(var i = 0; i < 5; i++){
		if(premii[i].finished && MaxObjects > 0){
            premii[i] = new Premiu(true, (Math.random() * 1000) % 240 + (Math.random() * 1000) % 30, -10 - (Math.random() * 1000) % 101 );
        }
			
	}
}