document.querySelectorAll('.carrusel').forEach(carrusel => {
  const slides = carrusel.querySelector('.slides');
  const slide = carrusel.querySelectorAll('.slide');
  const prev = carrusel.querySelector('.prev');
  const next = carrusel.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    index = (i + slide.length) % slide.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  prev.addEventListener('click', () => {
    showSlide(index - 1);
  });

  next.addEventListener('click', () => {
    showSlide(index + 1);
  });
});