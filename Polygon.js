function Polygon(
  x,
  y,
  s,
  r,
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
) {
  this.body = Bodies.polygon(x, y, s, r, options)
  this.r = r
  this.s = s

  World.add(world, this.body)

  this.show = function () {
    var pos = this.body.position
    var angle = this.body.angle
    var an = TWO_PI / s

    push()
    translate(pos.x, pos.y)
    rotate(angle)
    strokeWeight(1)
    stroke(255)
    fill(127)

    beginShape()
    for (let a = 0; a < TWO_PI; a += an) {
      let sx = cos(a) * r
      let sy = sin(a) * r
      vertex(sx, sy)
    }
    endShape(CLOSE)

    pop()
  }
}
