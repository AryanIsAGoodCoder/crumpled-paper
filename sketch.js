
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin1,dustbin2,dustbin3,ground,options;
var ooo;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//ooo = Matter.Bodies.circle(200,200,50,options);

	options={
		isStatic : false,
		restitution : 0.3,
		friction : 0.5,
		density : 1.2,
	}

	ground = createSprite(400,635,800,20);
	ground.shapeColor = "yellow";

	dustbin1 = createSprite(500,620,200,20);
	dustbin1 = createSprite(400,580,20,100);
	dustbin3 = createSprite(600,580,20,100);

	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(205,205,205);

  noStroke();
  fill("purple");
  ball = ellipse(100,600,50,50);

  //ooo.display();
  
  
  drawSprites();
 
}






