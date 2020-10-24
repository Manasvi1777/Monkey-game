var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,ground,ground_image;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  ground_image = loadImage("images.png");
}
function setup() {
  createCanvas(400,400);
  
   ground=createSprite(200,499,200,20);
  ground.addImage(ground_image);
 ground.scale=3;
  
  monkey=createSprite(40,320);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
background("lightblue");
 ground.velocityX=-10;
   if (keyDown("space")&&monkey.y>=321)
  {
   monkey.velocityY=-18;
  }
  if(ground.x<0)
    {
      ground.x=200;
    }
  fruit();
  obstacle1();
  
   monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
 
  drawSprites();
}
function fruit()
{
  if(frameCount%80===0)
    {
     banana=createSprite(400,random(120,200),20,20);
     banana.addImage(bananaImage);
     banana.scale=0.1 ;
     banana.velocityX=-10;
     banana.lifetime=43;
     foodGroup.add(banana);
    }
}
function obstacle1()
{
  if(frameCount%300===0)
    {
     obstacle=createSprite(410,320,20,20);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.2
     obstacle.lifetime=50;
     obstacle.velocityX=-10;
     obstacleGroup.add(obstacle);
    }
}




