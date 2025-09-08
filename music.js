// ===== Music Player =====

// Add your songs here. Just update this array when you add more files.
const songs = [
  { title: "Song 1", src: "songs/song1.mp3" },
  { title: "Song 2", src: "songs/song2.mp3" },
  { title: "Song 3", src: "songs/song3.mp3" }
];

let currentSong = 0;
const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Load a song by index
function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
}

// Play / Pause toggle
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸ Pause";
  } else {
    audio.pause();
    playBtn.textContent = "▶ Play";
  }
}

// Next song
function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.textContent = "⏸ Pause";
}

// Previous song
function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.textContent = "⏸ Pause";
}

// Event listeners
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Auto move to next when song ends
audio.addEventListener("ended", nextSong);

// Initial load
loadSong(currentSong);
