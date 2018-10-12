var chronometer = new Chronometer();
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



chronometer.setStart();
printTime();
velocidadTiempo();