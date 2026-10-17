let beat, analyzer;
let isLooping = false;
// Load sound file before canvas loads so it is ready

function preload() {
	beat = loadSound('Boom.mp3');
}

function setup() {
	createCanvas(1000, 1000);
}

function Draw() {
  if (mouseIsPressed) {
    if (!beat.isPlaying()) {
      beat.loop();
    }
	
	
    square(mouseX, mouseY, 50);
  } else {
    square(mouseX, mouseY, 30);
  }
}


