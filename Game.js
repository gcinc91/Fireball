// Game.js
var gameOver = document.getElementById("gameOver");
gameOver.style.display = "none";
var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var chronometer = new Chronometer();
var playerOne = new BarraPlayer();
var playerTwo = new BarraPlayer();

var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");

window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", keyUpHandler, false);

var lifePlayerOne = 3;
var lifePlayerTwo = 3;

var map = {
  87: false,
  83: false,
  79: false,
  76: false
};

function setMove() {
  Object.keys(map).map(function(key, index) {
    // Player one
    if (map[87]) {
      if (map[79]) {
        playerOne.move(1);
        playerTwo.move(1);
      } else if (map[76]) {
        playerOne.move(1);
        playerTwo.move(0);
      } else {
        playerOne.move(1);
      }
    }
    if (map[83]) {
      if (map[79]) {
        playerOne.move(0);
        playerTwo.move(1);
      } else if (map[76]) {
        playerOne.move(0);
        playerTwo.move(0);
      } else {
        playerOne.move(0);
      }
    }

    // Player two
    if (map[79]) {
      if (map[87]) {
        playerOne.move(1);
        playerTwo.move(1);
      } else if (map[83]) {
        playerOne.move(0);
        playerTwo.move(1);
      } else {
        playerTwo.move(1);
      }
    }
    if (map[76]) {
      if (map[87]) {
        playerOne.move(1);
        playerTwo.move(0);
      } else if (map[83]) {
        playerOne.move(0);
        playerTwo.move(0);
      } else {
        playerTwo.move(0);
      }
    }
  });
}

function onkeydown(e) {
  if (e.keyCode in map) {
    map[e.keyCode] = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode in map) {
    map[e.keyCode] = false;
  }
}

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



chronometer.setStart();
printTime();

//contador necesario para el aumento de la velocidad segun tiempo
var contador = 0;
var tiempoActual = 0;

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  playerOne.draw();
  playerTwo.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  // La bola sale por arriba o por abajo y sale por el lado contrario
  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.y = ball.radius;
  }
  //si la bola es menor que 0 entra por la pared izquierda y sale por la derecha
  if (ball.x + ball.vx < 0) {
    ball.x = canvas.width - ball.radius;
  }
  //si la bola es menor que 0 entra por la pared derecha y sale por la izquierda
  if (ball.x + ball.vx >= canvas.width - ball.radius) {
    ball.x = ball.radius;
  }

  // Si la bola esta en el eje X del primer jugador  yyyyy
  if (
    ball.x + ball.radius - 3 >= playerOne.barraPlayerX &&
    ball.x + ball.radius <= playerOne.barraPlayerX + playerOne.barraPlayerWith
  ) {
    if (
      ball.y + ball.radius - 3 >= playerOne.barraPlayerY &&
      ball.y + ball.radius <=
        playerOne.barraPlayerY + playerOne.barraPlayerHeigth
    ) {
      
    } else if (
      ball.y + ball.radius - 3 >= playerOne.barraPlayerY &&
      ball.y + ball.radius - 3 <= playerOne.barraPlayerY
    ) {
      //alert("1 Vida menos  J1!!");
      
    }
  }

  if (
    ball.x + ball.radius - 3 >= playerTwo.barraPlayerX &&
    ball.x + ball.radius - 3 <=
      playerTwo.barraPlayerX + playerTwo.barraPlayerWith
  ) {
    if (
      ball.y + ball.radius >= playerTwo.barraPlayerY &&
      ball.y + ball.radius <=
        playerTwo.barraPlayerY + playerTwo.barraPlayerHeigth
    ) {
      console.log("aqui entro 2");
      lifePlayerOne--;
      clearInterval(detener);
      setTimeout(function(){ball.reset(); startInterval()} , 1000);

      //alert("1 Vida menos  J2!!");
    } else if (
      ball.y + ball.radius - 3 >= playerOne.barraPlayerY &&
      ball.y + ball.radius - 3 <= playerOne.barraPlayerY
    ) {
      

      //alert("1 Vida menos  J2!!");
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
  } else if (chronometer.currentTime === 0 && contador === 3) {
    alert("Game Over!!");
    contador++;
  }

  if (lifePlayerOne === 0 || lifePlayerTwo === 0) {
    document.getElementById("canvas").style.display = "none";
    document.getElementById("gameOver").style.display = "block";
    clearInterval(detener);
  }
}

function startInterval() {
  detener = setInterval(update, 10);
}


setInterval(setMove, 10);
startInterval();
var detener;
