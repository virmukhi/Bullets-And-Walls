var wall,thickness;
var  bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
 
bullet = createSprite(50, 200, 50, 50);
bullet.shapeColor=color(255);

wall = createSprite(1200, 200, thickness , height/2);
wall.shapeColor=color(80,80,80);

thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
}

function draw() {
  background(0); 
  bullet.velocityX=speed;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
  var def=0.5*weight*speed*speed/22500;
  if(def>180){
    bullet.shapeColor=color(255,0,0);
  }
  if(def<180&&def>100){
    bullet.shapeColor=color(230,230,0);  
  }
  if(def<100){
    bullet.shapeColor=color(0,255,0);  
  }
  }
  drawSprites();
}