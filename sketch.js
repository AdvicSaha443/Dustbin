const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3;
var paper;
var ground;
var as;
var im;
var a = -50;

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,680,1400,10);
	log1 = new Log(950,565,50,200, PI);
	log2 = new Log(1050,650,250,30, -PI/4);
	log3 = new Log(1150,565,50,200, PI);
  paper = new Paper(175,600,70);
  as = loadImage("dustbingreen.png");
  im = new Im(1050,550,250,250);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  log1.display();
  log2.display();
  log3.display();
  background(255, 255, 0);
  paper.display();
  ground.display();
  im.display();

  KeyPressed();

  drawSprites();

  text(mouseX + "," + mouseY, mouseX, mouseY);
 
}

function KeyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y: a-0.5});
    }
}