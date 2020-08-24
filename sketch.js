
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var boy1;
var sling;
var ground;
var mango1,mango2,mango3,mango4,mango5;
var stone1;
var tree1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);

   mango1 = new mango(685,500,40);
	 mango2 = new mango(635,450,30);
	 mango3 = new mango(505,500,35);
	 mango4 = new mango(555,450,35);
	 mango5 = new mango(585,500,30);

	stone1 = new stone(324,500,40);

	tree1 = new tree(600,560,300, 300);

  boy1 = new boy(144,650,100,200);
  
  sling = new Slingshot(stone1.body,{x:114,y:600});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();

  tree1.display();

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone1.display();

  sling.display();

  boy1.display();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y :mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
Matter.Body.setPosition(stone1.body,{x:235,y:420})
sling.attach(stone1.body);
  }
}
function detectcollision(lstone,lmango){
 mangoBodyPosition = lmango.body.position;
 stoneBodyPosition = lstone.body.position;

 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y,);

 if(distance<lmango.radius+lstone.radius ) {
    Matter.Body.setStatic(lmango.body,false); 
  }


}



