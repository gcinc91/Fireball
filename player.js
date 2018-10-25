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
};

BarraPlayer.prototype.move = function(direcion) {
  if (direcion && this.barraPlayerY > 0) {
    this.barraPlayerY -= 1;
  } else if (this.barraPlayerY < canvas.height - this.barraPlayerHeigth) {
    this.barraPlayerY += 1;
  }
};

