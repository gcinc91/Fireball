// animation.js

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: '#0080FF',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

ball.draw();

function update() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.y + ball.vy > canvas.height - 23 || ball.y + ball.vy < 23) {
  ball.vy *= 1.2;
  ball.vy *= -1;
}
if (ball.x + ball.vx > canvas.width - 23 || ball.x + ball.vx < 23) {
  ball.vx *= 1.2;
  ball.vx *= -1;
}
}

setInterval(update, 20)