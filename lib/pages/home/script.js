const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const imageCount = images.length;
let currentIndex = 0;

function showNextImage() {
   currentIndex = (currentIndex + 1) % imageCount;
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}
setInterval(showNextImage, 2000);