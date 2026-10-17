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
  background(220);
}

function mousePressed() {
	beat.loop();
}

function draw() {
  if (mouseIsPressed) {
    rect(mouseX,mouseY, 30, 50); 
  } else {
    rect(mouseX,mouseY, 50, 50);
  }
}