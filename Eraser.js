function Eraser(x, y, r) {
  options = {
    isSensor: true,
    isStatic: true,
  }

  this.body = Bodies.circle(x, y, r, options)
  this.r = r

  World.add(world, this.body)

  this.show = function () {
    var pos = { x: mouseX, y: constrain(mouseY, 50, height) }

    this.body.position = pos

    push()

    translate(pos.x, pos.y)
    strokeWeight(1)
    stroke(255)
    fill(127)
    ellipse(0, 0, this.r * 2, this.r * 2)

    pop()
  }

  this.detect = function () {
    Events.on(engine, "collisionStart", function (event) {
      var pairs = event.pairs

      for (var i = 0, j = pairs.length; i != j; ++i) {
        var pair = pairs[i]

        if (pair.bodyA == this.body) {
          console.log("bodyA")
        } else if (pair.bodyB == this.body) {
          console.log("bodyB")
        }
      }
    })
  }
}
