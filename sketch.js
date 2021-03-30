var r1,r2,r3,ground,junk, back;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
back = loadImage("junk.png");




}

function setup() {
	createCanvas(800, 700);

 


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	r1= new Dustbin(600,680,200,20);
	r2=new Dustbin(500,615,20,150);
    r3=new Dustbin(700,615,20,150);

   junk = new Paper(80,650,60) ;
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);
  

  
  drawSprites();
  r1.display();
  r2.display();
  r3.display();
  ground.display();
  junk.display();
  
  

}

function keyPressed(){

if (keyCode===UP_ARROW){

  Matter.Body.applyForce(junk.body, junk.body.position,{ x:530, y: -530});



}





}

