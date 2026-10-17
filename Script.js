let beat, analyzer;
let isLooping = false;
// Load sound file before canvas loads so it is ready

function preload() {
	beat = loadSound('Boom.mp3');
}

function setup() {
	createCanvas(1000, 1000);
	analyzer = new p5.Amplitude();
}

function draw() {
	let vol = amp.getLevel();
	
	
	if (mouseIsPressed) {
		square(mouseX, mouseY, vol);
	} else {
		square(mouseX, mouseY, vol * 50);
	}
}

function mousePressed() {
	if (isLooping) {
	} else {
	beat.loop();		
	isLooping = true;
	}
}
	
	


