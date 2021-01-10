
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	treeim = loadImage("tree.png");
	boyim = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 900);
	engine = Engine.create();
	world = engine.world;
  mango1 = new mango(800,300,50,50);
  mango2 = new mango(750,250,50,50);
  mango3 = new mango(900,210,50,50);
  mango4 = new mango(1000,290,50,50);
	stone1 = new stone(240,500,50,50); 
  slingshot1 = new Slingshot(stone1.body,{x:240, y:500} )

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(mouseX,mouseY)
  image (treeim,600,100,500,500);
  image (boyim,200,450,200,200);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone1.display();
  slingshot1.display();
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  drawSprites();
 
}


function detectcollision(Lstone,Lmango){
mangoBodyPosition=Lmango.body.position
stoneBodyPosition=Lstone.body.position
  
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=Lmango.width+Lstone.width)
  {
    Matter.Body.setStatic(Lmango.body,false);
  }


}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot1.fly();
}
function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone1.body, {x:240, y:500});
    slingshot1.attach(stone1.body);
  }
}