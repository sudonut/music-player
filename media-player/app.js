//Event Listners
let play = document
  .getElementById("play")
  .addEventListener("click", togglePlay);

// Variables
let audio = document.getElementById("audio");
let timer = document.getElementById("current-time");
let isPlaying = false;

// This function is called when the play button is clicked
function togglePlay() {
  isPlaying ? audio.pause() : audio.play();
}

// This function swaps the play button to a pause button while music is playing
audio.onplaying = function () {
  isPlaying = true;
  document.getElementById("play").innerHTML = '<i class="fas fa-pause"></i>';
};

// This function changes the pause button to a play button when the music is stopped
audio.onpause = function () {
  isPlaying = false;
  document.getElementById("play").innerHTML = '<i class="fas fa-play"></i>';
};

// This function updates the playing bar with the current time of the song
audio.addEventListener("timeupdate", function () {
  let currentTime = audio.currentTime;``
  let duration = audio.duration;
  let minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime) - minutes * 60;
  let hours = Math.floor(currentTime / 3600);
  document.getElementById("audio-bar").style.width =
    (currentTime / duration) * 100 + "%";
  document.getElementById(
    "current-time"
  ).innerHTML = timer.innerHTML = `${minutes}:${seconds}`;
  if (seconds < 10) {
    timer.innerHTML = `${minutes}:0${seconds}`;
  }
});

// This function displays the length of the song
function durationDisplay() {
  let duration = audio.duration;
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration - minutes * 60);
  document.getElementById("song-length").innerHTML = `${minutes}:${seconds}`;
}
durationDisplay();
