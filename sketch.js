var box
function setup() {
  createCanvas(400,400);
  background (51)
  box= createSprite (200,200,50,50)

}

function draw() 
{
 if (keyIsDown(DOWN_ARROW))
 {
    background("blue");
 }
 if (keyIsDown(UP_ARROW))
 {
background("yellow");
 }
 if (keyIsDown(RIGHT_ARROW))
 {
    background("red");
 }
 if (keyIsDown(LEFT_ARROW))
 {
    background("blue");
 }
 drawSprites()
}




