// Game.js
var imagenesInicio = document.getElementById("imagenesInicio");
var startButton = document.getElementById("start-button");
var reloj = document.getElementById("reloj");
var jugador1 = document.getElementById("changeNameOne");
var jugador2 = document.getElementById("changeNameTwo");
var vidaOneP1 = document.getElementById("vidaOneP1");
var vidaTwoP1 = document.getElementById("vidaTwoP1");
var vidaThreeP1 = document.getElementById("vidaThreeP1");
var vidaOneP2 = document.getElementById("vidaOneP2");
var vidaTwoP2 = document.getElementById("vidaTwoP2");
var vidaThreeP2 = document.getElementById("vidaThreeP2");
var resultadoPlayer1 = document.getElementById("resultadoPlayer1");
var resultadoPlayer2 = document.getElementById("resultadoPlayer2");
var resultadoImageWinP1 = document.getElementById("resultadoImageWinP1");
var resultadoImageWinP2 = document.getElementById("resultadoImageWinP2");
var resultadoImageLoseP1 = document.getElementById("resultadoImageLoseP1");
var resultadoImageLoseP2 = document.getElementById("resultadoImageLoseP2");
var imagenAgain = document.getElementById("imgAgain");
var againBtn = document.getElementById("again-button");
var gameOver = document.getElementById("gameOver");
var youWin = document.getElementById("youWin");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

efectosVisules1();

var chronometer = new Chronometer();
var playerOne = new BarraPlayer();
var playerTwo = new BarraPlayer();
var detener;

var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");

window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", keyUpHandler, false);

var lifePlayerOne = 3;
var lifePlayerTwo = 3;

//Barra del jugador 2 en otro eje distinto del jugador 1
playerTwo.barraPlayerX = Math.floor(canvas.width * 0.66);

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

function startInterval() {
  detener = setInterval(update, 10);
}

function startGame() {
  efectosVisules2();
  comprobarNombresIntroducidos();
  jugador1.innerText = document.getElementById("input1").value;
  jugador2.innerText = document.getElementById("input2").value;
  startInterval();
  chronometer.setStart();
  printTime();
}

function playAgain() {
  location.reload();
}


//contador necesario para el aumento de la velocidad segun tiempo
var contador = 0;

function update() {
  //pintar todo y poner la pelota en movimiento
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  playerOne.draw();
  playerTwo.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  //colisiona con las paredes?
  colisionParedes();
  // Colisiona con alguno de los jugadores??
  colisionJ1();
  colisionJ2();
  // Aumetar la velocidad segun disminuye el tiempo y se acaba el tiempo pierden los dos
  aceleradorTiempo();
}

setInterval(setMove, 10);