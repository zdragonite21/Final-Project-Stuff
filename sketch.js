var Engine = Matter.Engine
// Render = Matter.Render
World = Matter.World
Bodies = Matter.Bodies
Body = Matter.Body

var engine
var world
var cir1
var cir2
var boxes = []

var ground
var ground1
var ground2
var ground3

var hex

function setup() {
  createCanvas(400, 400)
  engine = Engine.create()
  world = engine.world
  world.gravity.y = 0
  Engine.run(engine)
  var option = {
    isStatic: true,
  }

  Body.frictionAir = 1
  ground = Bodies.rectangle(200, height, width, 10, option)

  ground1 = Bodies.rectangle(200, 0, width, 10, option)
  ground2 = Bodies.rectangle(0, 200, 10, height, option)
  ground3 = Bodies.rectangle(width, 200, 10, height, option)

  hex = new Polygon(height / 2, width / 2, 6, 40, option)

  cir1 = new Circle(70, 70, 40)
  cir2 = new Circle(220, 220, 40)

  Body.setVelocity(cir1.body, { x: 3, y: 5 })

  Body.setVelocity(cir2.body, { x: -5, y: 3 })

  World.add(world, [ground, ground1, ground2, ground3])
}

// function mouseDragged() {
//   boxes.push(new Box(mouseX, mouseY, 20, 20))
// }

function draw() {
  background(51)
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show()
  }

  cir1.show()
  cir2.show()

  hex.show()
}
