var ball = {
  x: 100,
  y: 100,
  vx: 3,
  vy: 1,
  radius: 25,
  color: "#0080FF",
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

ball.draw();
