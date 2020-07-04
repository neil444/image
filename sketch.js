var db1
var paper_object,gr;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 900);


	engine = Engine.create();
	world = engine.world;
	db1 = new Db (1200,620,200,200)
	paper_object = new paper(200,200,50,50)
	
	
      
    gr = createSprite(50,180,20,50);
	gr = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, gr);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  db1.display();
 paper_object.display();


  drawSprites();
 
}
function keyPressed(){ 
	if(keyCode === UP_ARROW)
	{ Matter.Body.applyForce(paper_object.body,paper_object.body.position,
		 {x:150,y:-105}); }
 }


