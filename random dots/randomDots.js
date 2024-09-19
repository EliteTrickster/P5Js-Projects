let R;
let G;
let B;

const max = 225;
const min = -180;

function setup() {
    createCanvas(displayWidth, displayHeight);
    background(0);
  }

  function draw() {

    noStroke()

    // random positions for the circles
    let randomPositionX = Math.floor(Math.random() * 10000);
    let randomPositionY = Math.floor(Math.random() * 1000);
  
    // random numbers for the RGB values
    R = Math.ceil(Math.random() * (max - min + 1)) + min;
    G = Math.ceil(Math.random() * (max - min + 1)) + min;
    B = Math.ceil(Math.random() * (max - min + 1)) + min;
  
    // random size for the circle
    let randomSize = Math.floor(Math.random()*100);
  
    circle(randomPositionX,randomPositionY,randomSize);
  
    // preferably leave one of the values as 225... please
    fill(R,G,B);
    // fill(225,G,B); //for red
    // fill(R,225,B); // for green
  
  }