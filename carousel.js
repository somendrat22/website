// Simple, responsive image carousel for the gallery
const carouselItems = [
  { type: 'image', src: 'images/Muskan1.jpeg' },
  { type: 'image', src: 'images/Muskan2.jpeg' },
  { type: 'image', src: 'images/Muskan3.jpeg' },
  { type: 'video', src: 'images/special.mp4' },
  // Example video:
  // 
  // Add more items as needed
];

let currentIndex = 0;
const carouselImg = document.getElementById('carousel-img');
let carouselVideo = document.getElementById('carousel-video');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');

function showItem(index) {
  const item = carouselItems[index];
  if (item.type === 'image') {
    carouselImg.src = item.src;
    carouselImg.style.display = 'block';
    if (carouselVideo) carouselVideo.style.display = 'none';
  } else if (item.type === 'video') {
    if (!carouselVideo) {
      carouselVideo = document.createElement('video');
      carouselVideo.id = 'carousel-video';
      carouselVideo.className = 'carousel-img';
      carouselVideo.controls = true;
      carouselImg.parentNode.insertBefore(carouselVideo, carouselImg.nextSibling);
    }
    carouselVideo.src = item.src;
    carouselVideo.style.display = 'block';
    carouselImg.style.display = 'none';
  }
  // Auto-play background music if not already playing
  try {
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic && bgMusic.paused) {
      bgMusic.play();
    }
  } catch (e) {
    // Ignore autoplay errors (browser policies)
  }
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
});

// Initialize
showItem(currentIndex);

