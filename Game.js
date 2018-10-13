// Game.js

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var chronometer = new Chronometer();
var playerOne = new BarraPlayer();
var playerTwo = new BarraPlayer();
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");

function printTime() {
  var intervalId = setInterval(function() {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

playerTwo.barraPlayerX = (canvas.width * 0.66);




chronometer.setStart();
printTime();

//contador necesario para el aumento de la velocidad segun tiempo
var contador = 0;

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  playerOne.draw();
  playerTwo.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Efecto de rebote contra la pared del campo de juego

  if (ball.y + ball.vy > canvas.height - 23 || ball.y + ball.vy < 23) {
  
    ball.y = 23;
  }
  if (ball.x + ball.vx > canvas.width - 23 || ball.x + ball.vx < 23) {
    
    ball.x = 23; 
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

setInterval(update, 10);




