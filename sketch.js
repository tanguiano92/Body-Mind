function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight (8);
}

function draw() {

  if (mouseIsPressed){
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  }

}
