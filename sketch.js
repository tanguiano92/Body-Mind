let noiseOffset = 0.0;
//var hue;

let strokeWidth = 1;

let array = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  stroke(3, 3, 64);
  for (let j = 0; j < 10; j ++){
   for (let i = 0; i < 10; i ++){
  line (j * 150, 0, windowWidth, i * 150);
  }

     for (let j = 0; j < 10; j ++){
   for (let i = 0; i < 10; i ++){
  line (j * 150, windowWidth, 0, i * 150);
  }
}
}


 angleMode(DEGREES);
  }
  //hue = 0;


function draw() {
  background(0, 0, 0, 3);

if (mouseIsPressed){
 line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
 line(mouseX, mouseY, pmouseX, pmouseY);
  array.push([mouseX, mouseY]);
}
strokeWeight(strokeWidth);

noiseOffset += 0.03;
strokeWidth = noise(noiseOffset) * 100;



translate(200, 200);
 rotate(-90);

 let hr = hour();
 let min = minute();
 let sec = second();

  strokeWeight(strokeWidth);
 noFill();
 stroke(77, 4, 9);
 let end1 = map(sec, 0, 60, 0, 360);
 arc(0, 0, 500, 500, 0, end1);

 push();
 rotate(end1);
 stroke(3, 3, 64, 16);
 line(0, 0, 100, 0);
 pop();

 stroke(77, 4, 9);
 let end2 = map(min, 0, 60, 0, 360);
 arc(0, 0, 350, 350, 0, end2);

 push();
 rotate(end2);
 stroke(77, 4, 9, 16);
 line(0, 0, 70, 0);
 pop();

 stroke(77, 4, 9);
 let end3 = map(hr, 0, 12, 0, 360);
 arc(0, 0, 250, 250, 0, end3);

 push();
 rotate(end3);
 stroke(77, 5, 54, 16);
 line(0, 0, 80, 0);
 pop();

}

function keyTyped() {

  console.log(`key ${key} s is being typed`)

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');

  } else if (key === 'c') {
    //clear image
    clear();
  } else if (key === 'd') {
   // display image
   for (let i = 0; i < array.length - 1; i++) {
   line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  }

    }





  }

  //return false;
