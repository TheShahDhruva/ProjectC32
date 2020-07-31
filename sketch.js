const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine, world, canvas;
var floor1, floor2, floor3;
var hexa;
var pos;
var b, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var pos1, pos2, pos3, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31,b32, b33,b34,b35,b36,b37,b38,b39,b40,b41,b42,b43,b44,b45,b46,b47,b48,b49,b50,b51,b52,b53,b54,b55,b656,b57,b58,b59;
var s;
var x;
var sling;
var base;
var score = 0;
var r, g, bl;
var gameState = "onSling";

function preload(){
  getHour();
}

function setup() {
  canvas = createCanvas(1270,720);
  engine = Engine.create();
  world = engine.world;
  floor1 = new floor(950,200);
  floor2 = new floor(600,400);
  floor3 = new floor(1050,600);
  x = 580;
  s = 180;
  pos1 = floor1.body.position;
  pos2 = floor2.body.position;
  pos3 = floor3.body.position;
  //for floor 2
  b = new box1(490 + 5, 380);
  b1 = new box1(520+ 5, 380)
  b2 = new box1(550+ 5, 380);
  b3 = new box1(580+ 5, 380);
  b4 = new box1(610 + 5, 380);
  b5 = new box1(640+ 5, 380);
  b6 = new box1(670+ 5, 380);
  b7 = new box1(700+ 5, 380);
  b8 = new box1(525, 360);
  b9 = new box1(555, 360);
  b10 = new box1(585, 360);
  b11 = new box1(615, 360);
  b12 = new box1(645, 360);
  b13 = new box1(675, 360);
  b14 = new box1(555, 340);
  b15 = new box1(585, 340);
  b16 = new box1(615, 340);
  b17 = new box1(645, 340);
  b18 = new box1(585, 320);
  b19 = new box1(615, 320);
  // for floor 3
  b20 = new box2(945, 580);
  b21 = new box2(975, x);
  b22 = new box2(1005, x);
  b23 = new box2(1035, x);
  b24 = new box2(1065, x);
  b25 = new box2(1095, x);
  b26 = new box2(1125, x);
  b27 = new box2(1155, x);
  b28 = new box2(975, x - 20);
  b29 = new box2(1005, x - 20);
  b30 = new box2(1035, x - 20);
  b31 = new box2(1065, x - 20);
  b32 = new box2(1095, x - 20);
  b33 = new box2(1125, x - 20);
  b34 = new box2(1005, x - 40);
  b35 = new box2(1035, x - 40);
  b36 = new box2(1065, x - 40);
  b37 = new box2(1095, x - 40);
  b38 = new box2(1035, x - 60);
  b39  = new box2(1065, x - 60);
  //for floor 1
  b40  = new box3(845,s);
  b41  = new box3(845 + 30,s);
  b42  = new box3(845 + 60,s);
  b43  = new box3(845 + 90,s);
  b44  = new box3(845 + 120,s);
  b45  = new box3(845 + 150,s);
  b46  = new box3(845 + 180,s);
  b47  = new box3(845 + 210,s);
  b48  = new box3(845 + 30,s - 20);
  b49  = new box3(845 + 60,s - 20);
  b50  = new box3(845 + 90,s - 20);
  b51  = new box3(845 + 120,s - 20);
  b52  = new box3(845 + 150,s - 20);
  b53  = new box3(845 + 180,s - 20);
  b54  = new box3(845 + 60,s - 40);
  b55  = new box3(845 + 90,s - 40);
  b56  = new box3(845 + 120,s - 40);
  b57  = new box3(845 + 150,s - 40);
  b58  = new box3(845 + 90,s - 60);
  b59  = new box3(845 + 120,s - 60);
  hexa = new hexagon(200, 200);
  sling = new launcher(hexa.body, {x:200, y:120});
  base = new ground(600,710);
}

function draw() {
  Engine.update(engine); 
  background(r, g, bl); 
  fill(255);
  floor1.display();
  floor2.display();
  floor3.display();
  b.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  //display 3
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();
  b37.display();
  b38.display();
  b39.display();
  //for floor 1
  b40.display();
  b41.display();
  b42.display();
  b43.display();
  b44.display();
  b45.display();
  b46.display();
  b47.display();
  b48.display();
  b49.display();
  b50.display();
  b51.display();
  b52.display();
  b53.display();
  b54.display();
  b55.display();
  b56.display();
  b57.display();
  b58.display();
  b59.display();
  hexa.display();
  sling.display();
  base.display();

  b.scores();
  b1.scores();
  b2.scores();
  b3.scores();
  b4.scores();
  b5.scores();
  b6.scores();
  b7.scores();
  b8.scores();
  b9.scores();
  b10.scores();
  b11.scores();
  b12.scores();
  b13.scores();
  b14.scores();
  b15.scores();
  b16.scores();
  b17.scores();
  b18.scores();
  b19.scores();
  //display 3
  b20.scores();
  b21.scores();
  b22.scores();
  b23.scores();
  b24.scores();
  b25.scores();
  b26.scores();
  b27.scores();
  b28.scores();
  b29.scores();
  b30.scores();
  b31.scores();
  b32.scores();
  b33.scores();
  b34.scores();
  b35.scores();
  b36.scores();
  b37.scores();
  b38.scores();
  b39.scores();
  //for floor 1
  b40.scores();
  b41.scores();
  b42.scores();
  b43.scores();
  b44.scores();
  b45.scores();
  b46.scores();
  b47.scores();
  b48.scores();
  b49.scores();
  b50.scores();
  b51.scores();
  b52.scores();
  b53.scores();
  b54.scores();
  b55.scores();
  b56.scores();
  b57.scores();
  b58.scores();
  b59.scores();
  fill(255);
  strokeWeight(3);
  textSize(20);
  text("SCORE: " + score, 50, 40);
}

function mouseDragged(){
  if(gameState === "onSling"){
  Matter.Body.setPosition(hexa.body, {x: mouseX, y: mouseY});
  }
}


function mouseReleased(){
  sling.fly();
  gameState = "launch"
}


function keyPressed(){
  if(keyCode === 32 && gameState === "launch"){
    Matter.Body.setPosition(hexa.body, {x:190, y:120});
    sling.attach(hexa.body);
    gameState = "onSling";
  }
}


async function getHour(){
  var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
  var responseJSON = await response.json(); 
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);
  if(hour >= 06 && hour < 18){
    r = 0;
    g = 173;
    bl = 215;
  }
   else {
    r = 13;
    g = 7;
    bl = 44;
  }
}