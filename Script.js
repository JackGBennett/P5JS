let beat, amp;
let isLooping = false;
// Load sound file before canvas loads so it is ready

function preload() {
	beat = loadSound('Boom.mp3');
}

function setup() {
	createCanvas(1000, 1000);
	amp = new p5.Amplitude();
	amp.setInput(beat);
}

function draw() {
	let vol = amp.getLevel();
	

	if (mouseIsPressed) {
		square(mouseX, mouseY, vol * 20);
	} else {
		square(mouseX, mouseY, vol * 50);
	}
}

function mousePressed() {
	if (isLooping == false) {
	beat.loop();		
	isLooping = true;
	}
}
