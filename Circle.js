function Circle(x, y, r) {
  options = {
    frictionAir: 0,
    friction: 0,
    frictionStatic: 0,
    inertia: Infinity,
    restitution: 1,
    collisionFilter: {
      mask: 0x001,
    },
  }

  this.body = Bodies.circle(x, y, r, options)
  this.r = r

  World.add(world, this.body)

  this.show = function () {
    var pos = this.body.position
    var angle = this.body.angle

    push()
    translate(pos.x, pos.y)
    rotate(angle)
    strokeWeight(1)
    stroke(255)
    fill(127)
    ellipse(0, 0, this.r * 2, this.r * 2)

    pop()
  }
}
