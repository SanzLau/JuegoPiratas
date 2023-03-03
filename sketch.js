const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var background1, torreImg;
var torre;
var angle;
var canon;
var bala;



function preload() {
 background1= loadImage("./imagenes/background.gif");
 torreImg= loadImage("./imagenes/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  //Motor físico
  engine = Engine.create();
  //Creas tu mundo
  world = engine.world;
  
  //Propiedades físicas del suelo
  var options={
    isStatic: true
  }
  //Creación del suelo
  ground = Bodies.rectangle(0,height-3,width*2,3,options);
  //Agregamos al mundo
  World.add(world,ground);

  //Torre
  torre = Bodies.rectangle(160,350,160,310,options);
  World.add(world,torre);

  //Ángulo
  angle=20;
  canon = new Cannon (180,110,130,100,angle);

  //Fabricar bala
  bala= new Bala(canon.x,canon.y)



 
}

function draw() {

  image(background1,0,0,1200,600);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y, width*2,3);

  canon.display();
  bala.display();
  
  push()
  imageMode(CENTER);
  image(torreImg,torre.position.x,torre.position.y,160,310);
  pop();
  
   
}
