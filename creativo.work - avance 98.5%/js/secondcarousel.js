$(document).ready(function(){
  $('.testimonios-slider').slick({
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Permite navegar infinitamente por el carrusel
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Muestra un slide por vez
    slidesToScroll: 1 // Navega un slide por vez
  });
});
