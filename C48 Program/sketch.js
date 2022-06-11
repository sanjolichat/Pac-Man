function preload(){
  greenGhostImage = loadImage("./assets/greenGhost.png")
  orangeGhostImage = loadImage("./assets/orangeGhost.png")
  redGhostImage = loadImage("./assets/redGhost.png")
  pacmanImage = loadImage("./assets/pacman.png")
  yellowDotImage = loadImage("./assets/yellowDot.png")
}

function setup() {
  createCanvas(800,400);
  wall1 = createSprite(50,150,100,10)
  wall1.shapeColor = "blue"
  wall2 = createSprite(50,250,100,10)
  wall2.shapeColor = "blue"
  wall3 = createSprite(95,200,10,100)
  wall3.shapeColor = "blue"

  wall4 = createSprite(750,150,100,10)
  wall4.shapeColor = "blue"
  wall5 = createSprite(750,250,100,10)
  wall5.shapeColor = "blue"
  wall6 = createSprite(705,200,10,100)
  wall6.shapeColor = "blue"

  wall7 = createSprite(200,200,10,100)
  wall7.shapeColor = "blue" 
  wall8 = createSprite(600,200,10,100)
  wall8.shapeColor = "blue" 

  wall9 = createSprite(400,100,150,10)
  wall9.shapeColor = "blue" 
  wall10 = createSprite(400,150,10,100)
  wall10.shapeColor = "blue" 

  wall11 = createSprite(400,300,150,10)
  wall11.shapeColor = "blue" 
  wall12 = createSprite(400,350,10,100)
  wall12.shapeColor = "blue" 

  wall13 = createSprite(200,350,150,10)
  wall13.shapeColor = "blue" 
  wall14 = createSprite(600,350,150,10)
  wall14.shapeColor = "blue" 

  wall15 = createSprite(400,5,150,10)
  wall15.shapeColor = "blue"
  wall6 = createSprite(330,50,10,100)
  wall6.shapeColor = "blue"
  wall7 = createSprite(470,50,10,100)
  wall7.shapeColor = "blue"

  wall13 = createSprite(100,60,150,10)
  wall13.shapeColor = "blue" 
  wall14 = createSprite(700,60,150,10)
  wall14.shapeColor = "blue" 


  yellowDot = createSprite(50,380,10,10)
  yellowDot.addImage("yellowDotImage",yellowDotImage)
  yellowDot.scale = 0.005
  yellowDot1 = createSprite(100,380,10,10)
  yellowDot1.addImage("yellowDotImage",yellowDotImage)
  yellowDot1.scale = 0.005
  yellowDot2 = createSprite(150,380,10,10)
  yellowDot2.addImage("yellowDotImage",yellowDotImage)
  yellowDot2.scale = 0.005
  yellowDot3 = createSprite(200,380,10,10)
  yellowDot3.addImage("yellowDotImage",yellowDotImage)
  yellowDot3.scale = 0.005
  yellowDot4 = createSprite(250,380,10,10)
  yellowDot4.addImage("yellowDotImage",yellowDotImage)
  yellowDot4.scale = 0.005
  yellowDot5 = createSprite(300,380,10,10)
  yellowDot5.addImage("yellowDotImage",yellowDotImage)
  yellowDot5.scale = 0.005
  yellowDot6 = createSprite(350,380,10,10)
  yellowDot6.addImage("yellowDotImage",yellowDotImage)
  yellowDot6.scale = 0.005
  yellowDot7 = createSprite(350,330,10,10)
  yellowDot7.addImage("yellowDotImage",yellowDotImage)
  yellowDot7.scale = 0.005
  yellowDot8 = createSprite(300,330,10,10)
  yellowDot8.addImage("yellowDotImage",yellowDotImage)
  yellowDot8.scale = 0.005
  yellowDot9 = createSprite(250,330,10,10)
  yellowDot9.addImage("yellowDotImage",yellowDotImage)
  yellowDot9.scale = 0.005
  yellowDot10 = createSprite(200,330,10,10)
  yellowDot10.addImage("yellowDotImage",yellowDotImage)
  yellowDot10.scale = 0.005
  yellowDot11 = createSprite(150,330,10,10)
  yellowDot11.addImage("yellowDotImage",yellowDotImage)
  yellowDot11.scale = 0.005
  yellowDot12 = createSprite(100,330,10,10)
  yellowDot12.addImage("yellowDotImage",yellowDotImage)
  yellowDot12.scale = 0.005
  yellowDot13 = createSprite(50,330,10,10)
  yellowDot13.addImage("yellowDotImage",yellowDotImage)
  yellowDot13.scale = 0.005
  yellowDot14 = createSprite(50,280,10,10)
  yellowDot14.addImage("yellowDotImage",yellowDotImage)
  yellowDot14.scale = 0.005
}

function draw() {
  background(0);  
  drawSprites();
}