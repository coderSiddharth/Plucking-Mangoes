
var tree,boy,mango1,mango2,mango3,ground,launcher;
var gamestate="onsling";
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyimg=loadImage("boy.png")
	
}

function setup() {
	createCanvas(1600, 800);

	boy=createSprite(200+100,650,10,10);
	boy.addImage(boyimg)
	boy.scale=0.15

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(1000,310,450,450);
	mango1=new Mango(1250,450,100);
	mango2=new Mango(1350,460,50);
	mango3=new Mango(1150,380,50);
	stone=new Stone(150,570,30);
	ground=new Ground(800,750,1600,10)
	slingshot=new Launcher(stone.body,{x:220,y:570})
	
	Engine.run(engine);
  
}

console.log("press backspace to reset mango position")

function draw() {
  rectMode(CENTER);
  background("white");
 


  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  ground.display();
  slingshot.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);


  

  drawSprites();
 
}


function mouseDragged() 
{
	if(gamestate!=="launched"){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
 
    }}

	function mouseReleased(){
		slingshot.fly();
		gamestate="launched";
		
		
	}
	
	function keyPressed(){
		if(keyCode === 32){
			slingshot.attach(stone.body);
			Matter.Body.setPosition(stone.body,{x:80, y:570});
		gamestate="onsling";
		
	
		}
		if(keyCode === 8 && gamestate !== "onsling"){
	    Matter.Body.setPosition(mango1.body,{x:1250,y:450})
		Matter.Body.setPosition(mango2.body,{x:1350,y:460})
		Matter.Body.setPosition(mango3.body,{x:1150,y:380})
		Matter.Body.setStatic(mango1.body,true);
		Matter.Body.setStatic(mango2.body,true);
		Matter.Body.setStatic(mango3.body,true);
		}
	}

function detectollision(lstone,lmango){

 stoneBodyPosition=lstone.body.position;
 mangoBodyPosition=lmango.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);


if(distance<=lmango.r+lstone.r){

Matter.Body.setStatic(lmango.body,false)

}


}




