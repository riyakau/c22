const World= Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;



var world, engine,object,ball;

function setup() {
  engine= Engine.create();
  world= engine.world;
 
  createCanvas(400,400);

  var op={

    isStatic:true,
    mass:4
  }


  object= Bodies.rectangle(200,390,400,20,op);
  World.add(world,object);

var op1= {

restitution:1

}
  ball= Bodies.circle(150,300,9,op1);
  World.add(world,ball);



console.log(object);
  
 

  
}

function draw() {
  Engine.update(engine);
  background(0);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,9,9);

}