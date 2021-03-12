const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var engine, world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground1 = new Ground(400,400,800,50);
  base1 = new Ground(380,300,170,10);
  base2 = new Ground(590,200,120,10);
  block1 = new blueblock(320,280,20,30);
  block2 = new blueblock(340,280,20,30);
  block3 = new blueblock(360,280,20,30);
  block4 = new blueblock(380,280,20,30);
  block5 = new blueblock(400,280,20,30);
  block6 = new blueblock(420,280,20,30);
  block7 = new blueblock(440,280,20,30);
  block8 = new pinkblock(340,260,20,30);
  block9 = new pinkblock(360,260,20,30);
  block10= new pinkblock(380,260,20,30);
  block11= new pinkblock(400,260,20,30);
  block12= new pinkblock(420,260,20,30);
  block13 = new greenblock(360,240,20,30);
  block14 = new greenblock(380,240,20,30);
  block15 = new greenblock(400,240,20,30);
  block16 = new block(380,220,20,30);
  block17 = new blueblock(550,180,20,30);
  block18 = new blueblock(570,180,20,30);
  block19 = new blueblock(590,180,20,30);
  block20 = new blueblock(610,180,20,30);
  block21 = new blueblock(630,180,20,30);
  block22 = new greenblock(570,160,20,30);
  block23 = new greenblock(590,160,20,30);
  block24 = new greenblock(610,160,20,30);
  block25 = new block(590,140,20,30);
  polygon = new Polygon(50,200,25);
  
  slingshot = new SlingShot(polygon.body,{x:100,y:200});
}
function draw() {
  background(0);  
  fill("yellow");
  text("Drag the yellow ball and release it to launch towards the blocks",225,50);
  
  ground1.display();
  base1.display();
  base2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygon.display();
  slingshot.display();
  
}       
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
 }
function mouseReleased(){
  slingshot.fly();
} 
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body);
  }
}