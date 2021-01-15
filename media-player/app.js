let play = document.getElementById("play").addEventListener("click", togglePlay);
let isPlaying = false;
let audio = document.getElementById("audio");

function togglePlay() {
  isPlaying ? audio.pause() : audio.play();
};

audio.onplaying = function() {
  isPlaying = true;
  document.getElementById("play").innerHTML = '<i class="fas fa-pause"></i>';
};

audio.onpause = function() {
  isPlaying = false;
  document.getElementById("play").innerHTML = '<i class="fas fa-play"></i>'
};