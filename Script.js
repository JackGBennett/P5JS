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

  let volume = analyzer.getLevel();
  let squareSize = volume * 1000;

  if (mouseIsPressed) {
    square(mouseX, mouseY, squareSize);
  } else {
    square(mouseX, mouseY, 30);
  }
}

function draw() {
  let volume = analyzer.getLevel();

  if (mouseIsPressed) {
    square(mouseX, mouseY, volume * 1000);
  } else {
    square(mouseX, mouseY, 30);
  }
}
}