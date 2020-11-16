
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper 
var dustbin
var ground


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


groundSprite=createSprite(width/2, height-35, width,10);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
paper= new Paper(340,678,34)

}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
 

  drawSprites();

  
paper.display()

ground.display()

}

function KeyPressed(){

	if(KeyCode (UP_ARROW)){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x : 85 ,y:-85})
		
	}
	

}

