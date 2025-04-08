const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.getElementById('heroDots');
let current = 0;

// Punkte zur Steuerung erstellen
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  if (index === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    goToSlide(index);
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.hero-dots span');

function goToSlide(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');

  current = index;

  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function nextSlide() {
  let nextIndex = (current + 1) % slides.length;
  goToSlide(nextIndex);
}

setInterval(nextSlide, 5000);
