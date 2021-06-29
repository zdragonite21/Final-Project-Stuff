function Eraser(x, y, r) {
  options = {
    isSensor: true,
    isStatic: true,
    label: "eraser",
  }

  this.body = Bodies.circle(x, y, r, options)
  this.r = r

  World.add(world, this.body)

  this.show = function () {
    var pos = { x: mouseX, y: constrain(mouseY, 50, height) }

    Matter.Body.setPosition(this.body, pos)

    push()

    translate(pos.x, pos.y)
    strokeWeight(1)
    stroke(255)
    fill(127)
    ellipse(0, 0, this.r * 2, this.r * 2)

    pop()
  }

  this.detect = function () {
    var checker = Query.point(STATIC_BODIES, mouse_vec)

    if (checker.length > 0) {
      var index = STATIC_BODIES.indexOf(checker[0])
      shapes[index].remove()
    }
  }
}
