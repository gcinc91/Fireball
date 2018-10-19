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

playerTwo.barraPlayerX = canvas.width * 0.66;

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

  if (ball.y + ball.vy > canvas.height - ball.radius || ball.y + ball.vy < ball.radius) {
    ball.y = ball.radius;
    console.log("Entra aqui Tambien, Desaparece por arriba o por abajo");
  }
  if (ball.x + ball.vx < 0) {
    ball.x = canvas.width - ball.radius;
    console.log(ball.x + ball.vx);
    console.log("canvas witdh menos radius " + (canvas.width - ball.radius)+ "Entra en la pared de la IZQ");
  }
  if(ball.x + ball.vx >= (canvas.width - ball.radius)){
    ball.x = ball.radius;
    console.log("Sale por el final???")
  }
  if (ball.x + ball.radius  >= playerOne.barraPlayerX && ball.x + ball.radius  <= (playerOne.barraPlayerX + playerOne.barraPlayerWith)+ 50 ){
    if ((ball.y+ball.radius >= playerOne.barraPlayerY )&& ball.y+ball.radius <= (playerOne.barraPlayerY+playerOne.barraPlayerHeigth)+ 50) {

      console.log("|||||||||||  la bola va por aqui: "+ (ball.y + ball.radius)+ " |||||||||||||");
      console.log("Llega aqui y deberia rebotar...");
      console.log("La Y:"+ playerTwo.barraPlayerY );
      console.log("La Y mas la Altura: " + (playerOne.barraPlayerY + playerOne.barraPlayerHeigth));
      ball.vx *= -1;
      }
    }

    if ((ball.x + ball.radius  >= playerTwo.barraPlayerX && ball.x + ball.radius  <= (playerTwo.barraPlayerX + playerTwo.barraPlayerWith)+ 50)){
      if ((ball.y+ball.radius >= playerTwo.barraPlayerY )&& ball.y+ball.radius <= (playerTwo.barraPlayerY+playerTwo.barraPlayerHeigth)+ 50) {
        ball.vx *= -1;
      }
    }


  // Aumetar la velocidad segun disminuye el tiempo
  if (chronometer.currentTime === 90 && contador === 0) {
    ball.vy *= 2;
    ball.vx *= 2;
    contador = 1;
  } else if (chronometer.currentTime === 60 && contador === 1) {
    ball.vy *= 2;
    ball.vx *= 2;
    contador = 2;
  } else if (chronometer.currentTime === 30 && contador === 2) {
    ball.vy *= 2;
    ball.vx *= 2;
    contador = 3;
  }
}

setInterval(update, 10);
