let wave = new Wave();
let options = {type:"flower blocks", 
colors: ["red", "black", "white"],
stoke: 9};
wave.fromElement("audio","canvas", options);


//Event Listener
let play = document.getElementById("play").addEventListener("click", togglePlay);

let audio = document.getElementById("audio");
let timer = document.getElementById("current-time");
let isPlaying = false;

// Functions control the pausing and playing of the current song

function togglePlay() {
  isPlaying ? audio.pause() : audio.play();
}

audio.onplaying = function () {
  isPlaying = true;
  document.getElementById("play").innerHTML = '<ion-icon name="pause-circle"></ion-icon>';
}

audio.onpause = function () {
  isPlaying = false;
  document.getElementById("play").innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>';
};

audio.addEventListener("timeupdate", function () {
  let currentTime = audio.currentTime;
  let duration = audio.duration;
  let minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime) - minutes * 60;
  let hours = Math.floor(currentTime / 3600);
  document.querySelector(".audio-bar").style.width = (currentTime / duration) * 100 + "%";
  document.getElementById("current-time").innerHTML = timer.innerHTML = `${minutes}:${seconds}`;
  if (seconds < 10) {
    timer.innerHTML = `${minutes}:0${seconds}`;
  }
});

function durationDisplay() {
  let duration = audio.duration;
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration - minutes * 60); 
  document.getElementById("song-length").innerHTML = `${minutes}:${seconds}`;
}

durationDisplay();