const sliderButton = document.getElementById('slider-button');
const slider = document.getElementById('slider');
const closeSliderButton = document.getElementById('close-slider-button');

sliderButton.addEventListener('click', function() {
  if (slider.classList.contains('slider-open')) {
    slider.classList.remove('slider-open');
  } else {
    slider.classList.add('slider-open');
  }
});

document.addEventListener('click', function(event) {
  if (!slider.contains(event.target) && !sliderButton.contains(event.target)) {
    slider.classList.remove('slider-open');
  }
});

const carousel = document.querySelector('.carousel');
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function slide() {
  currentIndex++;
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  const slideWidth = 100 / slides.length;
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

slide();
setInterval(slide, 2000);


const pregunta = document.querySelector('.pregunta');
const respuesta = document.querySelector('.respuesta');

pregunta.addEventListener('click', () => {
  respuesta.style.display = respuesta.style.display === 'none' ? 'block' : 'none';
});
