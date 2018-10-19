// Barras de los jugadores

function BarraPlayer() {
  this.barraPlayerHeigth = Math.floor(canvas.height * 0.2);
  this.barraPlayerWith = Math.floor(canvas.width * 0.01);
  this.barraPlayerX = Math.floor(canvas.width * 0.33);
  this.barraPlayerY = Math.floor((canvas.height - 150) / 2);
  this.color = "#D7DF01";
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
    this.barraPlayerY -= 4;
  }
  else if(pulsaAbajo && this.barraPlayerY < canvas.height - this.barraPlayerHeigth) {
    this.barraPlayerY += 4;
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
