
var jungle,jungleImage
var monkey , monkey_running,gameOverImage
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage=loadImage("2081864.png")
}



function setup() {
   createCanvas(800, 400);

   jungle= createSprite(0,0,800,400)
  jungle.addImage(jungleImage)
  jungle.velocityX=-2
  jungle.scale=1.5
  jungle.x=jungle.width/2
  
 
   ground = createSprite(400,350,800,10);
  ground.velocityX=-2
   ground.x=ground.width/2;
  ground.visible=false;
  
  
  monkey=createSprite(100,340,20,50)
monkey.addAnimation("running",monkey_running)
monkey.scale=0.1

  score=0;
  
 
  
 
  
  
//wall=createSprite(300,300,600,10)

  RockGroup = new Group();
  BananaGroup = new Group(); 
}


function draw() {
background(0);

  if (ground.x < 0){
      ground.x = ground.width/2;
    }  
  
  if (jungle.x < 100){
      jungle.x = jungle.width/2;
    }  
  
  
  if(keyDown("space")&& monkey.y >= 10) {
        monkey.velocityY = -18;
          }
  
  monkey.velocityY = monkey.velocityY + 0.8
  

  if(RockGroup.isTouching(monkey)){
   monkey.scale=monkey.scale-0.07
   RockGroup.destroyEach();
  }
  

 if(BananaGroup.isTouching(monkey)){
        BananaGroup.destroyEach();
        score=score+1
        monkey.scale=monkey.scale+0.05
 }   
  
  
   monkey.collide(ground)
  spawnRock();
  
  spawnBanana();
  
  drawSprites();
 text("Score"+score,500,50)

}

function spawnRock() {
  if (frameCount % 150 === 0) {
    var rock = createSprite(800,350,10,40);
    //rock.y = Math.round(random(400,430));
    rock.addImage(obstacleImage);
    rock.scale = 0.2;
    rock.velocityX = -3;
    
   // rock.y=ground.y
    
     //assign lifetime to the variable
    rock.lifetime = 300;
    
    //adjust the depth
    rock.depth = monkey.depth;
    rock.depth = monkey.depth + 1;
    
    //jungle.depth=monkey.depth
    //jungle.depth=monkey.depth+1
    
    RockGroup.add(rock);
  }
}

function spawnBanana(){
  if(frameCount% 150 === 0) {
    var banana = createSprite(400,10,40,10);
    banana.y=Math.round(random(400,50));
    banana.addImage(bananaImage)
    banana.velocityX=-3
    banana.lifetime=200
    banana.depth=monkey.depth;
    banana.depth=monkey.depth+1
    banana.scale=0.2
    BananaGroup.add(banana);
  }
}






