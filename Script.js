let beat, analyzer;
let isLooping = false;
// Load sound file before canvas loads so it is ready

function preload() {
	beat = loadSound('Boom.mp3');
}

function setup() {
	createCanvas(1000, 1000);
	analyzer = new p5.Amplitude();
	analyzer.setInput(beat);
}

function draw() {
	background(220);
}

function mousePressed() {
	beat.loop();
}

function draw() {
  if (mouseIsPressed) {
    square(mouseX,mouseY, analyzer); 
  } else {
    square(mouseX,mouseY, 30);
  }
}