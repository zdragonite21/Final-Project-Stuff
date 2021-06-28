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

var button1 = false
var button2 = false
var side_length = 6
var cir = false
var shape_rad = 80
var ball_rad = 20
var header = 50
var rot = 0

var poX = 0
var poY = 0
var stay = false
var turn = false
var hidden = false

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  engine = Engine.create()
  world = engine.world
  world.gravity.y = 0
  Engine.run(engine)

  ground = Bodies.rectangle(width / 2, height, width, 10, option)
  ground1 = Bodies.rectangle(width / 2, 0, width, 10, option)
  ground2 = Bodies.rectangle(0, height / 2, 10, height, option)
  ground3 = Bodies.rectangle(width, height / 2, 10, height, option)

  hex = new Polygon(width / 2, height / 2, 6, 80, 0)

  cir1 = new Circle(70, 70, 40, "circle1")
  cir2 = new Circle(220, 220, 40, "circle2")

  Body.setVelocity(cir1.body, { x: 3, y: 5 })

  Body.setVelocity(cir2.body, { x: -5, y: 3 })

  World.add(world, [ground, ground1, ground2, ground3])

  Events.on(engine, "collisionStart", function (e) {
    // console.log(e)
  })
}

function mouseClicked() {
  if (mouseX >= 0 && mouseY >= header) {
    if (button1) {
      if (cir) {
        shapes.push(new Circle(poX, poY, shape_rad, 0, true))
        button1 = false
      } else {
        if (stay) {
          shapes.push(new Polygon(poX, poY, side_length, shape_rad, rot))
          button1 = false
          stay = false
        } else {
          stay = true
        }
      }
    } else if (button2) {
      var ball = new Circle(mouseX, mouseY, ball_rad)
      Body.setVelocity(ball.body, { x: 3, y: 5 })
      balls.push(ball)
      button2 = false
    }
  }
}

function keyPressed() {
  if (keyCode === 72 && hidden == false) {
    $(".trans").animate({ top: "-100px" })
    hidden = true
    header = 0
  } else if (keyCode === 72 && hidden == true) {
    $(".trans").animate({ top: "0" })
    hidden = false
    header = 50
  }
}

function mouseWheel(event) {
  shape_rad += event.delta / 20
  shape_rad = constrain(shape_rad, 30, 150)
}

function draw() {
  background(51)
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].show()
  }
  for (var i = 0; i < balls.length; i++) {
    balls[i].show()
  }

  if (!stay) {
    poX = mouseX
    poY = mouseY
    turn = true
  }

  if (turn) {
    if (keyIsDown(16)) {
      rot = roun(Math.atan2(mouseY - poY, mouseX - poX), PI / (side_length * 2))
    } else {
      rot = Math.atan2(mouseY - poY, mouseX - poX)
    }
  }

  if (button1) {
    Poly(poX, poY, side_length, shape_rad, rot, cir)
  }

  if (button2) {
    Cir(poX, poY, ball_rad)
  }

  cir1.show()
  cir2.show()
  hex.show()
}
