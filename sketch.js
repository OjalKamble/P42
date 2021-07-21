var bg,iss,spacecraft;
var sc1,sc2,sc3,sc4,ISS;

function preload(){
bg = loadImage("spacebg.jpg");
iss = loadImage("iss.png");
sc1 = loadImage("spacecraft1.png");
sc2 = loadImage("spacecraft2.png");
sc3 = loadImage("spacecraft3.png");
sc4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1000,600);

  ISS = createSprite(400, 200);
  ISS.addImage(iss);
  ISS.setCollider("rectangle",10,0,500,70);
  //ISS.debug = true

  spacecraft = createSprite(360,400);
  spacecraft.addImage(sc1);
  spacecraft.scale = 0.2;

}

function draw() {
  background(bg);
  //spacecraft.collide(ISS); 

  if(spacecraft.isTouching(ISS)){
    spacecraft.velocityY = 0;
    spacecraft.velocityX = 0;
    fill("white");
    textSize(30);
    text("DOCKING SUCCESSFUL!",500,400);
  }
  
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(sc3);
    spacecraft.velocityX = -2;
  }

  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(sc4);
    spacecraft.velocityX = 2;
  }

  if(keyDown(UP_ARROW)){
    spacecraft.addImage(sc2);
    spacecraft.velocityY = -2;
  }

  drawSprites();
}