const height = 768;
const width = 1366;

function setup() {
  createCanvas(width, height);
  background(225);
}

function draw() {

  noStroke()

  // random numbers for the RGB values
  let R = Math.floor(Math.random() * 100);
  let G = Math.floor(Math.random() * 100);
  let B = Math.floor(Math.random() * 100);

  // random size for the circle
  let randomSize = Math.floor(Math.random()*100);

  circle(mouseX,mouseY,randomSize);

  // preferably leave one of the values as 225... please
  fill(R,G,225)

}

function mouseClicked(){
  background(225)
}
  
