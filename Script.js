let beat;
let isLooping = false;
// Load sound file before canvas loads so it is ready

function preload() {
	beat = loadSound('Boom.mp3');
}

function setup() {
	createCanvas(1000, 1000);
}

function draw() {
	if (mouseIsPressed) {
		square(mouseX, mouseY, 50);
	} else {
		square(mouseX, mouseY, 30);
	}
}

function mousePressed() {
	if (isLooping) {
	} else {
	beat.loop();		
	isLooping = true;
	}
}
	
	


