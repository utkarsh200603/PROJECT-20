var cat,catImage,catImageStill,catImageColided;
var background,bgImg;
var mouse,mouseImageStill,mouseImageCollision,mouseImage;

function preload() {
  bgImg=loadImage("images/garden.png");
  catImage=loadAnimation("images/cat2.png","images/cat3.png");
  catImageStill=loadAnimation("images/cat1.png");
  catImageColided=loadAnimation("images/cat4.png");
  mouseImageStill=loadAnimation("images/mouse1.png");
  mouseImage=loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImageCollision=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(870,600,50,50);
    cat.addAnimation("cat",catImageStill);
    cat.scale=0.2;

    mouse=createSprite(200,600,10,10);
    mouse.addAnimation("mouseImageStill",mouseImageStill);
    mouse.scale=0.2;
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x <(cat.width - mouse.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catImagecolided",catImageColided);
      mouse.addAnimation("mouseImageColided",mouseImageCollision);
      cat.scale=0.2;
      mouse.scale=0.2;

      

    }
    
    drawSprites();
}


function keyPressed(){

  If (keyPressed===LEFT_ARROW)
    mouse.addAnimation("mouse1",mouseImage);
    cat.addAnimation("catWalking",catImage);
    cat.velocityX=-4;
  }



