function quitarVidaP2() {
  if (lifePlayerTwo === 2) {
    vidaThreeP2.style.display = "none";
    console.log("Entra Aqui");
  } else if (lifePlayerTwo === 1) {
    vidaTwoP2.style.display = "none";
  } else {
    resultadoImageWinP1.style.display = "block";
    resultadoImageLoseP2.style.display = "block";
    sinVidas();
  }
}

function quitarVidaP1() {
  if (lifePlayerOne === 2) {
    vidaThreeP1.style.display = "none";
    console.log("Entra Aqui");
  } else if (lifePlayerOne === 1) {
    vidaTwoP1.style.display = "none";
  } else {
    resultadoImageLoseP1.style.display = "block";
    resultadoImageWinP2.style.display = "block";
    sinVidas();
  }
}

function sinVidas() {
  canvas.style.display = "none";
  jugador1.style.display = "none";
  jugador2.style.display = "none";
  vidaOneP1.style.display = "none";
  vidaTwoP1.style.display = "none";
  vidaThreeP1.style.display = "none";
  vidaOneP1.style.display = "none";
  vidaTwoP1.style.display = "none";
  vidaThreeP1.style.display = "none";
  vidaOneP2.style.display = "none";
  vidaTwoP2.style.display = "none";
  vidaThreeP2.style.display = "none";
  reloj.style.display = "none";
  resultadoPlayer1.innerText = document.getElementById("input1").value;
  resultadoPlayer2.innerText = document.getElementById("input2").value;
  resultadoPlayer2.style.display = "block";
  resultadoPlayer1.style.display = "block";
  imagenAgain.style.display = "block";
  againBtn.style.display = "block";
  clearInterval(detener);
}

function colisionJ1() {
  if (ball.x + ball.radius >= playerOne.barraPlayerX && ball.x + ball.radius <= playerOne.barraPlayerX + playerOne.barraPlayerWith) {
    if (
      (ball.y + ball.radius -3 >= playerOne.barraPlayerY && ball.y + ball.radius - 3 <= playerOne.barraPlayerY + playerOne.barraPlayerHeigth) ||
      (ball.y - ball.radius + 3 >= playerOne.barraPlayerY && ball.y - ball.radius + 3 <=  playerOne.barraPlayerY + playerOne.barraPlayerHeigth)
    ) 
    {
      lifePlayerOne--;
      quitarVidaP1();
      clearInterval(detener);
      setTimeout(function() {
        ball.reset();
        startInterval();
      }, 1000);
    } else if (
      ball.y + ball.radius -3 >= playerOne.barraPlayerY &&
      ball.y + ball.radius -3<= playerOne.barraPlayerY
    ) {
      lifePlayerOne--;
      quitarVidaP1();
      clearInterval(detener);
      setTimeout(function() {
        ball.reset();
        startInterval();
      }, 1000);
      //alert("1 Vida menos  J1!!");
    }
  }
}

function colisionJ2() {
  if (
    ball.x + ball.radius -3  >= playerTwo.barraPlayerX &&
    ball.x + ball.radius -3 <=
      playerTwo.barraPlayerX + playerTwo.barraPlayerWith
  ) {
    if (
      (ball.y + ball.radius -3 >= playerTwo.barraPlayerY && ball.y + ball.radius -3 <=  playerTwo.barraPlayerY + playerTwo.barraPlayerHeigth) ||
      (ball.y - ball.radius + 3 >= playerTwo.barraPlayerY && ball.y - ball.radius + 3 <=  playerTwo.barraPlayerY + playerTwo.barraPlayerHeigth)
    ) {
      lifePlayerTwo--;
      quitarVidaP2();
      clearInterval(detener);
      setTimeout(function() {
        ball.reset();
        startInterval();
      }, 1000);

      //alert("1 Vida menos  J2!!");
    } else if ( ball.y + ball.radius -3 >= playerTwo.barraPlayerY && ball.y + ball.radius -3 <= playerTwo.barraPlayerY) {
      lifePlayerTwo--;
      quitarVidaP2();
      clearInterval(detener);
      setTimeout(function() {
        ball.reset();
        startInterval();
      }, 1000);
      //alert("1 Vida menos  J2!!");
    }
  }
}

function efectosVisules1() {
  reloj.style.display = "none";
  vidaOneP1.style.display = "none";
  vidaTwoP1.style.display = "none";
  vidaThreeP1.style.display = "none";
  vidaOneP2.style.display = "none";
  vidaTwoP2.style.display = "none";
  vidaThreeP2.style.display = "none";
  jugador1.style.display = "none";
  jugador2.style.display = "none";
  imagenesInicio.display = "block";
  resultadoPlayer1.style.display = "none";
  resultadoPlayer2.style.display = "none";
  resultadoImageLoseP1.style.display = "none";
  resultadoImageLoseP2.style.display = "none";
  resultadoImageWinP1.style.display = "none";
  resultadoImageWinP2.style.display = "none";
  imagenAgain.style.display = "none";
  againBtn.style.display = "none";
}

function efectosVisules2() {
  imagenesInicio.style.display = "none";
  vidaOneP1.style.display = "inline";
  vidaTwoP1.style.display = "inline";
  vidaThreeP1.style.display = "inline";
  vidaOneP2.style.display = "inline";
  vidaTwoP2.style.display = "inline";
  vidaThreeP2.style.display = "inline";
  jugador1.style.display = "block";
  jugador2.style.display = "block";
  reloj.style.display = "block";
  canvas.style.display = "block";
}

function aceleradorTiempo() {
  if (chronometer.currentTime === 90 && contador === 0) {
    ball.vy *= 1.2;
    ball.vx *= 1.2;
    contador = 1;
  } else if (chronometer.currentTime === 60 && contador === 1) {
    ball.vy *= 1.5;
    ball.vx *= 1.5;
    contador = 2;
  } else if (chronometer.currentTime === 30 && contador === 2) {
    ball.vy *= 2;
    ball.vx *= 2;
    contador = 3;
  } else if (chronometer.currentTime === 0 && contador === 3) {
    sinVidas();
    contador++;
  }
}

function colisionParedes() {
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
}