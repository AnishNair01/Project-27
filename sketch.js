const Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,roof1,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,250,300,30);

	bob4 = new Bob(320,450,20);
	bob2 = new Bob(360,450,20);
	bob1 = new Bob(400,450,20);
	bob3 = new Bob(440,450,20);
	bob5 = new Bob(480,450,20);

	// roof2 = new Roof(360,250,300,30);
	// roof3 = new Roof(440,250,300,30);
	// roof4 = new Roof(320,250,300,30);
	// roof5 = new Roof(480,250,300,30);
	rope4 = new Rope(bob4.body,roof1.body,-80,0);
	rope2 = new Rope(bob2.body,roof1.body,-40,0);
	rope1 = new Rope(bob1.body,roof1.body,0,0);
	rope3 = new Rope(bob3.body,roof1.body,40,0);
	rope5 = new Rope(bob5.body,roof1.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();

  rope4.display();
  rope2.display();
  rope1.display();
  rope3.display();
  rope5.display();

  bob4.display();
  bob2.display();
  bob1.display();
  bob3.display();
  bob5.display();

  

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-50,y:-45});
	  }


}
