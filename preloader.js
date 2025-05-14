    const barra = document.getElementById("barraProgreso");
    let progreso = 0;

    // Simular avance de la barra mientras se carga la página
    const avanceBarra = setInterval(() => {
      if (progreso < 90) {
        progreso += 1;
        barra.style.width = progreso + "%";
      } else {
        clearInterval(avanceBarra);
      }
    }, 30);

    // Espera a que TODO se haya cargado (imágenes, fuentes, etc.)
    window.addEventListener("load", () => {
      clearInterval(avanceBarra);
      progreso = 100;
      barra.style.width = "100%";

      const preloader = document.getElementById("preloader");
      const contenido = document.getElementById("contenido");

      // Añadir clase para animar desaparición
      preloader.classList.add("oculto");

      // Esperar animación y mostrar contenido
      setTimeout(() => {
        preloader.style.display = "none";
        contenido.style.display = "block";
      }, 600); // tiempo para animación de fade-out
    });