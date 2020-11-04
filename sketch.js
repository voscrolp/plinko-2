
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;

var divisionHeight = 200;
var particleCount = 0;
var particle;
var score = 0;
var i;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(width/2,875,800,400);
  particle = new Particle(100,100,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  console.log(mouseX);

  push();
  textSize(25);
  fill(255);
  textAlign(CENTER);
  text("500",40,height-divisionHeight/2);
  text("500",120,height-divisionHeight/2);
  text("500",200,height-divisionHeight/2);
  text("500",280,height-divisionHeight/2);

  text("100",360,height-divisionHeight/2);
  text("100",440,height-divisionHeight/2);
  text("100",520,height-divisionHeight/2);

  text("200",600,height-divisionHeight/2);
  text("200",680,height-divisionHeight/2);
  text("200",760,height-divisionHeight/2);

  text("Score:" + score,75,50);
  pop();

//create particles
  if(frameCount%30 == 0 && particleCount < 5){
    particles.push(new Particle(random(width/2+20, width/2-20),10,10));
    particleCount = particleCount + 1;
  }

  for(i = 0; i < particles.length; i++){
    particles[i].score();
    particles[i].display();
  }


//create plinkos
  for(var a = 50; a <= 750; a = a + 50){
	  plinkos.push(new Plinko(a,75,10));
  }

  for(var a = 75; a <= 725; a = a + 50){
	plinkos.push(new Plinko(a,175,10));
  }

  for(var a = 50; a <= 750; a = a + 50){
	plinkos.push(new Plinko(a,275,10));
  }

  for(var a = 75; a <= 725; a = a + 50){
	plinkos.push(new Plinko(a,375,10));
  }




  for(var z = 0; z < plinkos.length; z++){
	  plinkos[z].display();
  }

//create divisions
  for(var y = 0; y <= width; y = y + 80){
    divisions.push(new Ground(y,height-divisionHeight/2,10,divisionHeight));
  }

  for(var r = 0; r < divisions.length; r++){
    divisions[r].display();
  }


  //scoring
  //325 boundary for 500

  if(particle.body.position.y > 500){
    if(particle.body.position.x > 0 && particle.body.position.x < 0){
      particle = null;
    }
  }
  

  drawSprites();
 
}



