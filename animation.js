// animation.js

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ball = {
  x: 100,
  y: 100,
  vx: 10,
  vy: 4,
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

var contador = 0;

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Efecto de rebote contra la pared del campo de juego

  if (ball.y + ball.vy > canvas.height - 23 || ball.y + ball.vy < 23) {
    
    ball.y  -= 0;
    
    //ball.vy *= -1;
  }
  if (ball.x + ball.vx > canvas.width - 23 || ball.x + ball.vx < 23) {
    
    ball.x -= 0
    
    //ball.vx *= -1;
  } 


  // Aumetar la velocidad segun disminuye el tiempo
  if (chronometer.currentTime === 90 && contador === 0) {
    ball.vy *= 2;
    ball.vx *= 2;
    contador = 1;
  }else if (chronometer.currentTime === 60 && contador === 1) {
    ball.vy *= 2;
    ball.vx *= 2;
    contador = 2;
  }else if (chronometer.currentTime === 30 && contador === 2) {
    ball.vy *= 2;
    ball.vx *= 2;
    contador = 3;
  }
  
}

setInterval(update, 20);



// Cronometro
function Chronometer() {
  this.currentTime = 120;
  this.intervalId = 0;
}

Chronometer.prototype.setStart = function() {
  that = this;

  this.intervalId = setInterval(function() {
    that.currentTime -= 1;
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  var minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  var seconds;
  if (this.currentTime > 60 && this.currentTime > 120) {
    seconds = this.currentTime - 60;
    return seconds;
  } else {
    seconds = this.currentTime % 60;
    return seconds;
  }
};

Chronometer.prototype.twoDigitsNumber = function(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value + "";
  }
};

Chronometer.prototype.setTime = function() {
  this.minutes = this.twoDigitsNumber(this.minutes);
  this.seconds = this.twoDigitsNumber(this.seconds);
};
