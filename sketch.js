var hue;

function setup() {
  createCanvas(600, 600);
background(96, 165, 240);

strokeWeight(5);



hue = 0;
}

function draw() {

  //if (mouseIsPressed){
    //strokeWeight(5);
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY);
  //}

}

function keyTyped(){

  console.log(`key ${key} s is being typed`)

if (key === 's'){
// save this image
saveCanvas('fileName', 'png');

}

return false;

}

function mouseDragged() {
  hue ++;
  colorMode(HSL, 360);
     noStroke();
    fill(hue, 200, 200);
    ellipse(width - mouseX, height - mouseY, 20, 20);
    ellipse(mouseX, mouseY, 20, 20);
}
