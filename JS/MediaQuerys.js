const boton = document.getElementById('opcionesMedia');
const menu = document.getElementById('menu');
const opcionesInstitucional= document.getElementById('opcionInstitucional')
const opcionesNoticias=document.getElementById('opcionNoticias')
const cerrarMenu=document.getElementById('cerrarMenu')
const MostrarOpcionesInstitucional=document.querySelectorAll('.MediaInstitucional')
const MostrarOpcionesNoticias=document.querySelectorAll('.mediaNoticias')
var visibleInstitucional=false;
var visibleNoticia=false;

boton.addEventListener('click', () => {
  menu.style.display="flex";
});

cerrarMenu.addEventListener('click',() =>{
  menu.style.display="none"; 
});

opcionesInstitucional.addEventListener('click', () => {
  if(visibleInstitucional){
    MostrarOpcionesInstitucional.forEach(elemento => {
    elemento.style.display="none";
  });
    }
    else{
      MostrarOpcionesInstitucional.forEach(elemento => {
      elemento.style.display="block";
    });
  }
  visibleInstitucional=!visibleInstitucional;
});

opcionesNoticias.addEventListener('click', () => {
  if(visibleNoticia){
    MostrarOpcionesNoticias.forEach(elemento => {
    elemento.style.display="none";
  });
    }
    else{
      MostrarOpcionesNoticias.forEach(elemento => {
      elemento.style.display="block";
    });
  }
  visibleNoticia=!visibleNoticia;
});
