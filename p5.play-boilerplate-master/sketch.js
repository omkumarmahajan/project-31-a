const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var divisions = []    

var divisionHeight =300;

function setup() {
  engine = Engine.create();
    world = engine.world;

 
  createCanvas(400,800);
  
  bottom = new Ground(200,height,400,20)

  division1 = new Division(10,10,width,height)



}

function draw() {
  Engine.update(engine);
  background("black");  
  drawSprites();

  bottom.display();
  division1.display();
}