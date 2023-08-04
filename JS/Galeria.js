
mostrarPagina(0);
function mostrarPagina(numero) {
    const secciones = document.querySelectorAll('#contenedorTotal > section');
    for (var x = 0; x < secciones.length; x++) {
        if( x==numero){
            secciones[x].style.display= 'flex';
        }
        else{
            secciones[x].style.display= 'none';
        }
    }
  }