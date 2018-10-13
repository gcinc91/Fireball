// Barras de los jugadores

function BarraPlayer() {
  this.barraPlayerHeigth = 150;
  this.barraPlayerWith = 20;
  this.barraPlayerX = 250;
  this.barraPlayerY = (900 - 150) / 2;
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
};
