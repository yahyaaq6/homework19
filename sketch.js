  var fireblue_moving, bluefire;
  var background1, backgroundImage;
  var firered_moving, redfire;
  var firepink_moving, pinkfire;
  var player, playerImage;
  var greenfire, greenImage;
  var pinkGroup, blueGroup, redGroup, fireGroup;
  var score = 0;
  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;
  var over, overImage;
  var restart,restartImage;
  var invisibleground,ground2;
  var oversound,bust,press;
  var backsong;

function preload() {
  
  restartImage = loadImage ("restart.png");
  overImage = loadImage ("gameover.png");
  
  fireblue_moving = loadAnimation("fireblue1.png", "fireblue2.png", "fireblue3.png", "fireblue4.png", "fireblue5.png", "fireblue6.png");
  
  backgroundImage = loadImage("background1.png");
  
  firered_moving = loadAnimation("firered1.png", "firered2.png", "firered3.png", "firered4.png", "firered5.png", "firered6.png");
  
  firepink_moving = loadAnimation("firepink1.png", "firepink2.png", "firepink3.png", "firepink4.png", "firepink5.png", "firepink6.png");
  
  playerImage = loadImage("player.png");
  
  greenImage_moving = loadAnimation("Effects_Fire_0_01.png", "Effects_Fire_0_04.png", "Effects_Fire_0_06.png", "Effects_Fire_0_07.png", "Effects_Fire_0_11.png", "Effects_Fire_0_22.png");
  
  oversound = loadSound ("gameOver.mp3")
  bust = loadSound ("bomb.wav")
  press = loadSound ("jump.mp3")
  backsong = loadSound ("swoosh1.mp3")
}


function setup() {
  createCanvas(600, 400);

  background1 = createSprite(300, 150, 100, 100)
  background1.addImage(backgroundImage)
  
  background1.scale = 0.5

  player = createSprite(100, 200, 10, 10)
  player.addImage(playerImage)
  player.scale = 0.2
  
  over = createSprite (300,150,20,20)
  over.addImage (overImage)
  
  restart = createSprite (300,200,20,20)
  restart.addImage (restartImage)
  restart.scale = 0.4
  
  invisibleground = createSprite (300,310,600,10)
  
  ground2 = createSprite (300,6,600,10)
  
  pinkGroup1 = createGroup();
  pinkGroup = createGroup();
  blueGroup1 = createGroup();
  blueGroup = createGroup();
  redGroup = createGroup();
  redGroup1 = createGroup();
  fireGroup = createGroup();
}

function draw() {
  
  background("white");
  player.collide (invisibleground);
  player.collide (ground2);
  
  
  if (gameState === PLAY) {
    score = score + Math.round(getFrameRate() / 60);

    if (fireGroup.isTouching(pinkGroup)) {
      fireGroup.destroyEach();
      pinkGroup.destroyEach();
    }
    if (fireGroup.isTouching(pinkGroup1)) {
      fireGroup.destroyEach();
      pinkGroup1.destroyEach();
    }
    if (fireGroup.isTouching(blueGroup)) {
      fireGroup.destroyEach();
      blueGroup.destroyEach();
    }
    if (fireGroup.isTouching(blueGroup1)) {
      fireGroup.destroyEach();
      blueGroup1.destroyEach();
    }
    if (fireGroup.isTouching(redGroup)) {
      fireGroup.destroyEach();
      redGroup.destroyEach();
    }
    if (fireGroup.isTouching(redGroup1)) {
      fireGroup.destroyEach();
      redGroup1.destroyEach();
    }
    if (background1.x < 100) {
      background1.x = 400
    }

    background1.velocityX = -(7 + 7* score/ 100)
    
    player.visible = true ;
    over.visible = false ;
    restart.visible = false;
    invisibleground.visible = false ;
    ground2.visible = false ;
    
    cyan();
    red2();
    pink2();
    cyan2();
    redba();
    redba1();
    
  }
  
  if (gameState === PLAY) {
    
    if (keyWentDown("up")) {
    player.velocityX = 0;
    player.velocityY = -5
  }
    
  if (keyWentUp("up")) {
    player.velocityX = 0;
    player.velocityY = 0
  }
    
  if (keyWentDown("down")) {
    player.velocityX = 0;
    player.velocityY = 5
  }
    
  if (keyWentUp("down")) {
    player.velocityX = 0;
    player.velocityY = 0
  }

  if (keyDown("space")) {
    backsong.play();
    shoot();
  }
  }

if (gameState === END){
   background1.velocityX = 0
   player.visible = false;
   over.visible = true ;
   restart.visible = true;
   invisibleground.visible = false ;
}

if (player.isTouching(pinkGroup)){
  bust.play();
  pinkGroup.destroyEach();
  blueGroup.destroyEach();
  redGroup.destroyEach();
  pinkGroup1.destroyEach();
  blueGroup1.destroyEach();
  redGroup1.destroyEach();
  oversound.play ();
  gameState = END; 
}
  
  if (player.isTouching(pinkGroup)){
   gameState = END;
   oversound.play ();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bust.play();
}
  
  if (player.isTouching(pinkGroup1)){
   gameState = END
   oversound.play ();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bust.play();
}
  
  if (player.isTouching(blueGroup)){
   gameState = END;
   oversound.play ();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bust.play();
}
  
  if (player.isTouching(blueGroup1)){
   gameState = END;
   oversound.play ();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
    bust.play();
}
  
  if (player.isTouching(redGroup1)){
   gameState = END;
   oversound.play ();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bust.play();
}
  
  if (player.isTouching(redGroup)){
   gameState = END
   oversound.play ();
   pinkGroup.destroyEach();
   blueGroup.destroyEach();
   redGroup.destroyEach();
   pinkGroup1.destroyEach();
   blueGroup1.destroyEach();
   redGroup1.destroyEach();
   bust.play();
}

  if(mousePressedOver(restart)) {
    reset ();
    press.play();
    }
  
   drawSprites();

   stroke("cyan")
   fill("cyan")
   text("score:" + score, 450, 50)
   textSize("100")

}

function cyan() {
  if (frameCount % 180 === 0) {
    bluefire = Math.round(random(600, 500));
    bluefire = createSprite(600, 100, 20, 20);
    bluefire.addAnimation("moving", fireblue_moving);
    bluefire.scale = 0.4
    bluefire.velocityX = -(4 + score/100)
    bluefire.lifetime = 150
    blueGroup.add(bluefire);
  }
}

function red2() {
  if (frameCount % 180 === 0) {
    pinkfire = createSprite(600, 200, 20, 20);
    pinkfire.addAnimation("moving", firepink_moving);
    pinkfire.scale = 0.4
    pinkfire.velocityX = -(4 + score/100)
    pinkfire.x = Math.round(random(600, 500));
    pinkfire.lifetime = 150

    pinkGroup.add(pinkfire);
  }
}

function pink2() {
  if (frameCount % 180 === 0) {
    pinkfire = createSprite(600, 300, 20, 20);
    pinkfire.addAnimation("moving", firepink_moving);
    pinkfire.scale = 0.4
    pinkfire.velocityX = -(4 + score/100)
    pinkfire.x = Math.round(random(600, 500));
    pinkfire.lifetime = 150

    pinkGroup1.add(pinkfire);
  }
}

function cyan2() {
  if (frameCount % 180 === 0) {
    bluefire = Math.round(random(600, 500));
    bluefire = createSprite(600, 200, 20, 20);
    bluefire.addAnimation("moving", fireblue_moving);
    bluefire.scale = 0.4
    bluefire.velocityX = -(4 + score/100)

    bluefire.lifetime = 150
    blueGroup1.add(bluefire);
  }
}

function redba() {
  if (frameCount % 180 === 0) {
    redfire = Math.round(random(600, 500));
    redfire = createSprite(600, 200, 20, 20);
    redfire.addAnimation("moving", firered_moving);
    redfire.scale = 0.4
    redfire.velocityX = -(4 + score/100)

    redfire.lifetime = 150

    redGroup.add(redfire);
  }
}

function redba1() {
  if (frameCount % 180 === 0) {
    redfire = Math.round(random(600, 500));
    redfire = createSprite(600, 50, 20, 20);
    redfire.addAnimation("moving", firered_moving);
    redfire.scale = 0.4
    redfire.velocityX = -(4 + score/100)

    redfire.lifetime = 150

    redGroup1.add(redfire)
  }
}

function shoot() {
  greenfire = createSprite(100, 100, 5, 10);
  greenfire.velocityX = 6
  greenfire.addAnimation("moving", greenImage_moving);
  greenfire.scale = 0.8;
  greenfire.y = player.y
  greenfire.lifetime = 100

  fireGroup.add(greenfire);
}
function reset (){
 gameState = PLAY;
  over.visible = false;
  restart.visible = false;
  pinkGroup.destroyEach();
  blueGroup.destroyEach();
  redGroup.destroyEach();
  pinkGroup1.destroyEach();
  blueGroup1.destroyEach();
  redGroup1.destroyEach();
  score = 0;
  
  
}