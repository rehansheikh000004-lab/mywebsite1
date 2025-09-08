let songs = [
  { title: "Song 1", src: "songs/song1.mp3" },
  { title: "Song 2", src: "songs/song2.mp3" },
  { title: "Song 3", src: "songs/song3.mp3" }
];

let currentSong = 0;
let audio = document.getElementById("audio");
let songTitle = document.getElementById("song-title");

function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
}

// Load the first song on page load
loadSong(currentSong);
