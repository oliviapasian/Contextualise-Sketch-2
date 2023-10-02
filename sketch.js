// Credit for learning how to drag shapes goes to Will Mclean's youtube tutorial on dragging objects in p5:
// https://www.youtube.com/watch?v=4-jpIr61slg


let starfish;
let seashell;
let rocksmall;
let rocksmall2;
let rocklarge;
let greenplant1;
let greenplant2;
let purpleplant1;
let purpleplant2;
let rockcluster;

let sandybottom;

let grabbed = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

let x = [];
let y = [];

function preload(){
     starfish = loadImage('image10.png');
     seashell = loadImage('image6.png');
     rocksmall = loadImage('image4.png');
     rocksmall2 = loadImage('image4.png');
     rocklarge = loadImage('image3.png');
     greenplant1 = loadImage('image1.png');
     greenplant2 = loadImage('image2.png');
     purpleplant1 = loadImage('image8.png');
     purpleplant2 = loadImage('image9.png');
     rockcluster = loadImage('image7.png');
  
    sandybottom = loadImage('image5.png');
}

function setup() {
  let canv = createCanvas(1000, 700);
  canv.parent("canvas-container");
  background(0);
  // button = createButton('Save Image');
  // button.mousePressed(saveDrawing);
  // button.style('font-size', '18px');
  // button.style('font-family', 'Monaco');
  // button.style('color', 'tomato');
  // button.style('background-color', 'lavenderblush');
  // button.style('border','none');

  }

//Initial positions
// image 1
x[0] = 610;
y[0] = 70;

// image 2
x[1] = 820;
y[1] = 240;

// image 3
x[2] = 750;
y[2] = 400;

// image 4
x[3] = 700;
y[3] = 50;

// image 5
x[4] = 810;
y[4]= 400;

// image 6
x[5] = 690;
y[5] = 250;

// image 7
x[6] = 620;
y[6] = 360;

// image 8
x[7] = 610;
y[7] = 180;

// image 9
x[8] = 750;
y[8] = 300;

// image 10
x[9] = 730;
y[9]= 450;


function draw() {
background('lavenderblush');
  fill('tomato');
  noStroke();
  textSize(18);
  textFont('Monaco');
  text('Drag objects to decorate the fish bowl!', 480, 610);


    fill('lightblue');
    noStroke();
    rect(600, 50, 300, 500);

    fill('skyblue');
    strokeWeight(5);
    stroke('lightblue');
    ellipse(270,530,250,70);

    ellipse(270,300,500,500);

    ellipse(270,70,300,70);
    ellipse(270,70,250,45);

    image(sandybottom, -80, 50, 690, 600);
  
    image(rocklarge, x[0], y[0], 140, 110);
    image(rocksmall2, x[1], y[1], 80, 90);
    image(rocksmall, x[2], y[2], 60, 40);
    image(rockcluster, x[3], y[3], 200, 200);
    image(greenplant2, x[4], y[4], 90, 150);
    image(purpleplant1, x[5], y[5], 70, 110);
    image(purpleplant2, x[6], y[6], 110, 180);
    image(greenplant1, x[7], y[7], 90, 150);
    image(starfish, x[8], y[8], 100, 110);
    image(seashell, x[9], y[9], 80, 80);
  
// Our shapes
// stroke ( 200, 10, 10);
// strokeWeight(10);
//   fill(240);
  
  // rect(x[0], y[0], 200, 200);
  // rect(x[1], y[1], 200, 200);
  // rect(x[2], y[2], 200, 200);
  // rect(x[3], y[3], 200, 200);
  // rect(x[4], y[4], 200, 200);
  // rect(x[5], y[5], 200, 200);
  
}

function mouseIsInRect( x, y, width, height ){ 
  return((mouseX >= x ) && (mouseX < x + width) && (mouseY >= y ) && (mouseY < y + height))

}


function mousePressed () {
if(mouseIsInRect(x[9], y[9], 80, 80) ) {
grabbed [9] = true;
} else if( mouseIsInRect(x[8], y[8], 100, 110) ) {
  grabbed [8] = true;
} else if( mouseIsInRect(x[7], y[7], 90, 150)) {
  grabbed [7] = true;
} else if( mouseIsInRect(x[6], y[6], 110, 180) ) {
  grabbed [6] = true;
} else if(mouseIsInRect(x[5], y[5], 70, 110)) {
  grabbed [5] = true;
} else if( mouseIsInRect(x[4], y[4], 90, 150) ) {
  grabbed [4] = true;
} else if( mouseIsInRect(x[3], y[3], 200, 200)) {
  grabbed [3] = true;
} else if( mouseIsInRect(x[2], y[2], 60, 40) ) {
  grabbed [2] = true;
} else if(mouseIsInRect(x[1], y[1], 80, 90)) {
  grabbed [1] = true;
} else if(mouseIsInRect(x[0], y[0], 140, 110)) {
  grabbed [0] = true;
} 
}

function mouseReleased(){
  grabbed[9] = false;
  grabbed[8] = false;
  grabbed[7] = false;
  grabbed[6] = false;
  grabbed[5] = false;
  grabbed[4] = false;
  grabbed[3] = false;
  grabbed[2] = false;
  grabbed[1] = false;
  grabbed[0] = false;

}

function mouseDragged () {
  if (grabbed [9] ) {
    x[9] = mouseX;
    y[9] = mouseY;

} else if( grabbed [8] ) {
  x[8] = mouseX;
  y[8] = mouseY;
  
} else if (grabbed [7] ) {
  x[7] = mouseX;
  y[7] = mouseY;
  
} else if ( grabbed [6] ) {
  x[6] = mouseX;
  y[6] = mouseY;
  
} else if ( grabbed [5] ) {
  x[5] = mouseX;
  y[5] = mouseY;
  
} else if (grabbed [4] ) {
  x[4] = mouseX;
  y[4] = mouseY;
  
} else if( grabbed [3] ) {
  x[3] = mouseX;
  y[3] = mouseY;
  
} else if (grabbed [2] ) {
  x[2] = mouseX;
  y[2] = mouseY;
  
} else if ( grabbed [1] ) {
  x[1] = mouseX;
  y[1] = mouseY;
  
} else if ( grabbed [0] ) {
  x[0] = mouseX;
  y[0] = mouseY;
}
}

// function saveDrawing() {
//   save("FishBowl.jpg");
// }
