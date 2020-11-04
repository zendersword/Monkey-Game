
var monkey ;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var bananaScore=0;

var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey=createSprite(100,400,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2
  
  
  ground=createSprite(250,500,1000,10);
  ground.velocityX=-2
  ground.x = ground.width /2;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background(500);
  text("Survival Time = "+ score, 250,50);
  text("banana colected = "+ bananaScore, 250,30);
  
  
  score = score + Math.round(getFrameRate()/60);
  
  if (monkey.isTouching(bananaGroup)){
      bananaScore=bananaScore+1
      bananaGroup.destroyEach();
      
      }
  
  monkey.velocityY = monkey.velocityY + 0.8
  if(keyDown("space")&& monkey.y >= 430) {
        monkey.velocityY = -22;
        
    }
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
  
  spawnobstacle();
  spawnbanana();
  drawSprites();
}


function spawnbanana() {
  
  if (frameCount % 160 === 0) {
    var banana = createSprite(520,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    

    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    

    bananaGroup.add(banana);
  }
}

function spawnobstacle() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(520,450,40,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -10;
    
    obstacle.lifetime = 200;
    

    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    

    obstacleGroup.add(obstacle);
  }
}

