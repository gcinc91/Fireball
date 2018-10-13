// Barras de los jugadores

function BarraPlayer() {
  this.barraPlayerHeigth = canvas.height * 0.2;
  this.barraPlayerWith = canvas.width * 0.01;
  this.barraPlayerX = canvas.width * 0.33;
  this.barraPlayerY = (canvas.height - 150) / 2;
  this.color = "#000000";
}

BarraPlayer.prototype.draw = function() {
  ctx.beginPath();
  ctx.rect(
    this.barraPlayerX,
    this.barraPlayerY,
    this.barraPlayerWith,
    this.barraPlayerHeigth
  );
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();

  if (pulsaArriba && this.barraPlayerY > 0){
    this.barraPlayerY -= 7;
  }
  else if(pulsaAbajo && this.barraPlayerY < canvas.height - this.barraPlayerHeigth) {
    this.barraPlayerY += 7;
  }
};

var pulsaArriba = false;
var pulsaAbajo = false;


  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function keyDownHandler(e) {
    if (e.keyCode == 87) {
      pulsaArriba = true;
    } else if (e.keyCode == 83) {
      pulsaAbajo = true;
    }
  };

  function keyUpHandler(e) {
    if (e.keyCode == 87) {
      pulsaArriba = false;
    } else if (e.keyCode == 83) {
      pulsaAbajo = false;
    }
  };
