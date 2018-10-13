// Cronometro
function Chronometer() {
  this.currentTime = 120;
  this.intervalId = 0;
}

Chronometer.prototype.setStart = function() {
  that = this;

  this.intervalId = setInterval(function() {
    that.currentTime -= 1;
    that.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  var minutes = Math.floor(this.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  var seconds;
  if (this.currentTime > 60 && this.currentTime > 120) {
    seconds = this.currentTime - 60;
    return seconds;
  } else {
    seconds = this.currentTime % 60;
    return seconds;
  }
};

Chronometer.prototype.twoDigitsNumber = function(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value + "";
  }
};

Chronometer.prototype.setTime = function() {
  this.minutes = this.twoDigitsNumber(this.minutes);
  this.seconds = this.twoDigitsNumber(this.seconds);
};