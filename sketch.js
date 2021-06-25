var Engine = Matter.Engine
// Render = Matter.Render
World = Matter.World
Bodies = Matter.Bodies
Body = Matter.Body
Events = Matter.Events

var option = {
  isStatic: true,
}

var engine
var world
var cir1
var cir2
var hex
var shapes = []
var balls = []

var ground
var ground1
var ground2
var ground3

var button1 = true
var button2 = false

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  engine = Engine.create()
  world = engine.world
  world.gravity.y = 0
  Engine.run(engine)

  ground = Bodies.rectangle(width / 2, height, width, 10, option)
  ground1 = Bodies.rectangle(height / 2, 0, width, 10, option)
  ground2 = Bodies.rectangle(0, width / 2, 10, height, option)
  ground3 = Bodies.rectangle(width, width / 2, 10, height, option)

  hex = new Polygon(width / 2, height / 2, 6, 80, option)

  cir1 = new Circle(70, 70, 40, { id: "circle1" })
  cir2 = new Circle(220, 220, 40, { id: "circle2" })

  Body.setVelocity(cir1.body, { x: 3, y: 5 })

  Body.setVelocity(cir2.body, { x: -5, y: 3 })

  World.add(world, [ground, ground1, ground2, ground3])

  Events.on(engine, "collisionStart", function (e) {
    // console.log(e)
    console.log(e)
  })
}

function mouseClicked() {
  if (mouseX >= 0 && mouseY >= 0) {
    if (button1) {
      shapes.push(new Polygon(mouseX, mouseY, 6, 80, option))
      // button1 = false
    } else if (button2) {
      var ball = new Circle(mouseX, mouseY, 20)
      Body.setVelocity(ball.body, { x: 3, y: 5 })
      balls.push(ball)
      // button2 = false
    }
  }
}

function draw() {
  background(51)
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].show()
  }
  for (var i = 0; i < balls.length; i++) {
    balls[i].show()
  }

  cir1.show()
  cir2.show()

  hex.show()

  console.log(mouseX, mouseY)
}
