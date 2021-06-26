function Polygon(
  x,
  y,
  s,
  r,
  options = {
    isStatic: true,
  }
) {
  this.body = Bodies.polygon(x, y, s, r, options)
  this.r = r
  this.s = s

  if (this.s == 3) {
    Body.rotate(this.body, PI / (s * -2))
  } else if (this.s == 5) {
    Body.rotate(this.body, PI / (s * 2))
  }
  World.add(world, this.body)

  this.show = function () {
    var pos = this.body.position
    var angle = this.body.angle - PI / s
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
