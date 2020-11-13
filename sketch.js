var fixedRect, movingRect;
var ract1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100,400,50,30);
  rect2 = createSprite(1100,400,50,30);
  rect1.shapeColor= "orange";
  rect2.shapeColor = "red";
  rect2.debug = true;
  rect1.debug = true;

  rect1.velocityX = +5;
  rect2.velocityX = -5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  
  bounceOff(movingRect,fixedRect);
  bounceOff(rect1,rect2);
  drawSprites();
}
