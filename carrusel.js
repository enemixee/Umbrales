function startCarousel(selector) {
  const images = document.querySelectorAll(selector);
  let current = 0;

  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 5000);
}

// carruseles por separado
startCarousel(".carousel-image");
startCarousel(".carousel-image2");
startCarousel(".carousel-image3");
startCarousel(".carousel-image4");
startCarousel(".carousel-image-inicio");