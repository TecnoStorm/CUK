let slider = document.querySelector("#fotos");
let fotos = document.querySelectorAll(".foto");
let posicion = 0;

function mostrarSlide(posicion) {
  slider.style.transform = `translateX(-${posicion * 100}%)`;
}

setInterval(function() {
    mostrarSlide(posicion);
    posicion++;
  if (posicion >= fotos.length) {
    posicion = 0; 
  }
 
}, 3000);