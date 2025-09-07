const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function showImage(index) {
  lightbox.style.display = "flex";
  lightboxImg.src = galleryItems[index].src;
  currentIndex = index;
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => showImage(index));
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage(currentIndex);
});
