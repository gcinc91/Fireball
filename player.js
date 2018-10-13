// Barras de los jugadores

function BarraPlayer () {

  this.barraPlayerHeigth = 150;
  this.barraPlayerWith = 20;
  this.barraPlayerX = 30;
  this.barraPlayerY = ((canvas.height- barraPlayerOneHeigth)/2);
  this.color = "#000000";
};

BarraPlayer.prototype.draw = function() {
  
  ctx.beginPath();
  ctx.rect(this.barraPlayerX, this.barraPlayerY, this.barraPlayerWith, this.barraPlayerHeigth);
  ctx.closePath();
  ctx.fillStyle = that.color;
  ctx.fill();
}




