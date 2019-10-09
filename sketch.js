let noiseOffset = 0.0;
//var hue;

let strokeWidth = 5;

let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
background(0);





//hue = 0;
}

function draw() {
  background(120, 8, 12, 5);

strokeWeight(strokeWidth);

noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 100;

stroke(map(mouseX, 122, 5, 9, true))
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);

}

//function mouseDragged() {
  //strokeWeight(strokeWidth);

  //noiseOffset += 0.05;
  //noiseOffset = noise(noiseOffset) * 100;

  //if (mouseDragged){
    //ellipse(mouseX, mouseY, 10, 10);
    //array.push([mouseX, mouseY]);
  //}

  //hue ++;
  //colorMode(HSL, 360);
     //stroke(map(mouseX, hue, 200, 200));
    //fill(hue, 200, 200);
    //ellipse(width - mouseX, height - mouseY, 10, 10);
    //ellipse(mouseX, mouseY, 10, 10);
//}

function keyTyped(){

  console.log(`key ${key} s is being typed`)

if (key === 's'){
// save this image
saveCanvas('fileName', 'png');

} else if (key === 'b'){
  //display image

for(let i = 0; i < array.length - 1; i ++){
ellipse(array[0][0], array[0][1],array[i + 1][0], array[i + 1][1]);

}



}

return false;

}
