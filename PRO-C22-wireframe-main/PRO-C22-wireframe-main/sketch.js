const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;



function preload()
 {
   backgroundimage  = loadImage("assets/background.gif")
   towerimage = loadImage("assets/tower.png")
   

}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options= { isStatic:true}
  ground  = Bodies.rectangle(0,height -1,width *2,1,options)
  World.add(world,ground)

  var options= { isStatic:true}
  tower = Bodies.rectangle(100,350,160,310,options)
  World.add(world,tower)
}

function draw() {
  background(backgroundimage);
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1)
   
  push()
  imageMode(CENTER)
  image(towerimage,tower.position.x,tower.position.y,160,310);
  pop()
}
