function bounceOff(ball,doll){
    if (ball.x - doll.x < doll.width/2 + ball.width/2
      && doll.x - ball.x < doll.width/2 +ball.width/2) {
    ball.velocityX = ball.velocityX * (-1);
    doll.velocityX = doll.velocityX * (-1);
  }
  if (ball.y - doll.y < doll.height/2 + ball.height/2
    && doll.y - ball.y < doll.height/2 + ball.height/2){
    ball.velocityY = ball.velocityY * (-1);
    doll.velocityY = doll.velocityY * (-1);
  }
  
  }