
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,1200,10)
 ground.velocityX=-6

  foodGroup=createGroup();
  
}


function draw() {
  background(220)
  
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;

    }
  
  survivalTime= Math.ceil(frameCount/frameRate())
  textSize(40)
  text("survival time:"+survivalTime,150,100)
  
  food();
  obstacles();
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  
  drawSprites();
}

function food(){
  if (frameCount % 80 ===0){
    banana=createSprite(600,100,10,10)
    banana.addImage(bananaImage);
    banana.scale=0.2
    banana.y=Math.round(random(180,250))
    banana.velocityX=-6
    banana.lifetime=120
    foodGroup.add(banana)
    
  }
}

function obstacles (){
  if(frameCount % 300 ===0){
    obstacle=createSprite(600,330,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacle.velocityX=-4
  }
}





