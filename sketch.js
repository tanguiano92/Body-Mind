let noiseOffset = 0.0;
//var hue;

let strokeWidth = 5;

let array = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);


  stroke(82, 2, 2);

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

noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 100;

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
