// Simple, responsive image carousel for the gallery
const images = [
  'images/Muskan1.jpeg',
  'images/Muskan2.jpeg',
  'images/Muskan3.jpeg',
  // Add more image paths here if desired
];

let currentIndex = 0;
const carouselImg = document.getElementById('carousel-img');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');

function showImage(index) {
  carouselImg.src = images[index];
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Initialize
showImage(currentIndex);
