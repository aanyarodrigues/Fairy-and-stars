var fairy,fairyImg;
var bg, bgImg;
var star, starImg;
var music;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function preload(){
  fairyImg=loadAnimation("images/fairy.png","images/fairy1.png","images/fairy2.png");
  bgImg=loadImage("images/starnight.png");
  starImg=loadImage("images/star.png");

}
function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var bg_options={
    isStatic:true
  }
  bg=Bodies.rectangle(200,200,400,400,bg_options);
  //bg.addImage(bgImg);
  World.add(world,bg);
  console.log(bg);

  var fairy_options={
    isStatic:true
  }
  fairy=Bodies.rectangle(100,300,50,100,fairy_options);
  fairy.shapeColor=color("yellow");
   //fairy.addAnimation(fairyImg,"moving");
  World.add(world,fairy);

  var star_options={
    isStatic:true
  }
  star=Bodies.rectangle(350,50,25,25,bg_options);
  //star.addImage(starImg);
  World.add(world,star);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(bg.position.x,bg.position.y,400,400);
  rectMode(CENTER); 
  rect(fairy.position.x,fairy.position.y,50,100);
  rectMode(CENTER); 
  rect(star.position.x,star.position.y,25,25);
  if(keyDown("left_arrow")){
    fairy.x=fairy.position.x-2;
  }
  if(keyDown("right_arrow")){
    fairy.x=fairy.position.x+2;
  }
  if(keyDown("space")){
    Matter.Body.setStatic(star,false);
  }
  if(star.position.y===250 && star.position.x===fairy.position.x || star.isTouching(fairy)){
    Matter.Body.setStatic(star,true);
  }
}