

var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 900);


	speed=random(55,90)
	weight=random(400,1500)


	buggati=createSprite(50, 200, 50,50);   
	buggati.velocityX = speed;
	buggati.shapeColor=color(255);
	
	
	wall=createSprite(1500,200, 60, height/1)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-buggati.x < (buggati.width+wall.width)/2)

  {
  	buggati.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		buggati.shapeColor=color(255,0,0);
   
	 	
	}

	if(deformation<180 && deformation>100)
	{
		buggati.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		buggati.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}


