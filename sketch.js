let noiseOffset = 0.0;
//var hue;

let strokeWidth = 5;

let array = [];


function setup() {

  //hue = 0;
}


function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
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
     // pulse image
     for (let i = 0; i < array.length - 1; i++) {
     line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    }

      }


  stroke(82, 2, 2);

  for (let i = 0; i < 10; i++) {
    line(i * 50, 0, windowWidth, i * 50);
    //ine (500, 500, i * 50, 0);

    for (let i = 0; i < 10; i++) {
      line(i * 50, windowWidth, 0, i * 50);

      for (let i = 0; i < 10; i++) {
        line(windowWidth, 0, i * 50, i * 50);

        for (let i = 0; i < 10; i++) {
          line(i * 50, i * 50, 0, windowWidth);

        }
      }
    }
  }

  background(0, 0, 0, 3);



  }

  //return false;
