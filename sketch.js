var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf,leafImg
var redleaf,redleafImg
var orangeleaf,orangeleafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  redleafImg = loadImage("redImage.png");
  orangeleafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  var select_sprites =Math.round(random(1,3));
  if(frameCount % 80 == 0){
    if(select_sprites == 1)
  
   
  {Apples();}
  else if (select_sprites == 5){
    createRedLeaf();
  }
     else {createRedLeaf()}
  }


  if(frameCount % 80 == 0){
    if(select_sprites == 1)
    
  {createOrangeLeaf();}
  else if (select_sprites == 5){
    createOrangeLeaf();}
  else {createOrangeLeaf()}}

  if(frameCount % 80 == 0){
    if(select_sprites == 1)

  {createLeaves();}
  else if (select_sprites == 5){
    createLeaves();}
  else {createLeaves()}}
 
  drawSprites();
}

function Apples(){

  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY=5;
  apple.lifetime=150;
}

function createLeaves(){

  leaf=createSprite(random(50,350),0,10,10)
  leaf.addImage(leafImg);
  leaf.scale=0.1;
  leaf.velocityY=5;
  leaf.lifetime=150;
}

function createRedLeaf(){

  redleaf=createSprite(random(50,350),0,10,10)
  redleaf.addImage(redleafImg)
  redleaf.scale=0.1;
  redleaf.velocityY=5;
  redleaf.lifetime=150; 
}

function createOrangeLeaf(){
  orangeleaf = createSprite(random(50,350),0,10,10)
  orangeleaf.addImage(orangeleafImg);
  orangeleaf.scale=0.1;
  orangeleaf.velocityY=5;
  orangeleafImg.lifetime=150;
}