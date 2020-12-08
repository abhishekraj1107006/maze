var Maze;
function preload() {
	Maze = loadImage("MAZE.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  wall1 = createSprite(70,height/2,10,height-100); 
  wall2 = createSprite(width/4-20,50,width/3+80,10);
  wall3 = createSprite(width/4+30,height-50,width/3+170,10);
  wall4 = createSprite(width-80,height/2,10,height-100); 
  wall5 = createSprite(width-370,height-50,width/3+80,10);
  wall6 = createSprite(width-430,50,width/3+170,10);

}


function draw() {
  background(Maze);  

  drawSprites();
 
}

