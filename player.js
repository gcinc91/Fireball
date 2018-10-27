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

