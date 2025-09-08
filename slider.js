// Images for the slider
const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Load image
function showImage(index) {
  slide.src = images[index];
}

// Next
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Prev
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Event listeners
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Initial load
showImage(currentIndex);
