
function mostrarInformacion(){
    var eleccion=document.getElementById("opciones").value;
    var informacion=document.getElementById("informacion");
    switch(eleccion){
        case "opcion1":
        informacion.innerHTML= "<p class='parrafoInfo'> Referente: Juan Manuel Alonso - 7° Dan</p>" + "<p class='parrafoInfo'> Facebook: AsociacionUruguayaDeKarate</p>"+
        "<p class='parrafoInfo'> Correo: info@auk.com.uy</p>" + "<p class='parrafoInfo'>Ubicacion: José Luis Bado 3186 (Club 25 de Agosto). </p>" + 
        "<p class='parrafoInfo'> Celular: 099 631 512"
        break;;
        case "opcion2":
        informacion.innerHTML="<p class='parrafoInfo'>Referente: Carlos Pazos - 7° Dan</p>"+
        "<p class='parrafoInfo'> Correo: divskifuruguay@gmail.com</p>"+
        "Ubicacion: Acevedo Díaz 1084 (Honbu Dojo)"
        break;;
        case "opcion3":
        informacion.innerHTML="<p class='parrafoInfo'>Referente: Radko Balcar - 8º Dan</p>"+
        "<p class='parrafoInfo'>Pagina:www.uruguaygojuryu.com</p>"+
        "<p class='parrafoInfo'>Correo:rbalcar@gmail.com</p>"+
        "<p class='parrafoInfo'>Ubicacion: Julio Herrera y Obes 1231</p>"+
        "<p class='parrafoInfo'>Tel: 2900 1207 </p>"+
        "<p class='parrafoInfo'>Celular: 099 375 908</p>"
        break;;
        case "opcion4":
        informacion.innerHTML="<p class='parrafoInfo'>Presidente: Jorge A. Crosa - 4º Dan ITKF</p>"+
        "<p class='parrafoInfo'> Pagina:www.iktu.org.uy</p>"+
        "<p class='parrafoInfo'> Correo:secretariado@iktu.org.uy</p>"+
        "<p class='parrafoInfo'> Ubicacion:Avda. Gral. Eugenio Garzón 1850 (Administración)</p>"+
        "<p class='parrafoInfo'> Celular:099 033 008</p>"
        break;;
        case "opcion5":
        informacion.innerHTML="<p class='parrafoInfo'>Representante: Edgardo Auza - 6to Dan - ISKF.</p>"+
        "<p class='parrafoInfo'>Correo:secretariaiskfuruguay@hotmail.com</p>"+
        "<p class='parrafoInfo'>Ubicacion:Ecuador 1680</p>"+
        "<p class='parrafoInfo'>Telefono:2311 6400</p>"+
        "<p class='parrafoInfo'>Celular:094 532 667</p>"
        break;;
        case "opcion6":
        informacion.innerHTML="<p class='parrafoInfo'>Referente: Jorge Mercado - 5º Dan</p>"+
        "<p class='parrafoInfo'>Entrenador Deportivo: Shihan Pablo Layerla 3ºDan</p>"+
        "<p class='parrafoInfo'>Correo:alquimiasylviajor@gmail.com</p>"+
        "<p class='parrafoInfo'>Correo:pablolayerla@hotmail.com</p>"+
        "<p class='parrafoInfo'>Ubicacion: LAVALLEJA KM 23.800 / SOLYMAR / CANELONES.</p>"+
        "<p class='parrafoInfo'>Celular:097 301 240</p>"+
        "<p class='parrafoInfo'>Celular:094 776 577</p>"
        break;;
        case "opcion7":
        informacion.innerHTML="<p class='parrafoInfo'>Representante: Prof, Erasmo Petingi Labastie - 6º Dan. Shotokan. Miembro Activo de IOSTK</p>"+
        " <p class='parrafoInfo'>Pagina:sok@adinet.com.uy</p>"
        break;;
        case "opcion8":
        informacion.innerHTML="<p class='parrafoInfo'>Referente: Miguel Correa - 5º Dan</p>"+
        "<p class='parrafoInfo'>Correohttp://www.shoburyu.com.uy</p>"+
        "<p class='parrafoInfo'>Correo:info@shoburyu.com.uy</p>"+
       " <p class='parrafoInfo'>Ubicacion:Marrubio 3982</p>"+
        "<p class='parrafoInfo'>Telofono:2220 0620</p>"+
        "<p class='parrafoInfo'>Celular:099 913 399</p>"
        break;;
        case "opcion9":
        informacion.innerHTML="<p class='parrafoInfo'>Referente: Eduardo Cabrera - 6° Dan</p>"+
        "<p class='parrafoInfo'>Pagina:shitoryu.com.uy</p>"+
        "<p class='parrafoInfo'>Correo:shitoryu.uy@gmail.com</p>"+
        "<p class='parrafoInfo'>Ubicacion:Gral. Flores 2960/64 (Dojo Mabuni)</p>"+
        "<p class='parrafoInfo'>Tel: 22095215"+
        "<p class='parrafoInfo'>Celular:098 669 405</p>"
        break;;
        case "opcion10":
        informacion.innerHTML="<p class='parrafoInfo'>Referente: Roberto Chocho Maglio - 6º Dan</p>"+
        "<p class='parrafoInfo'> Pagina:www.kenshinkanuruguay.com.uy</p>"+
        "<p class='parrafoInfo'>Correo:suparumpei108@gmail.com</p>"+
        "<p class='parrafoInfo'>Correo:alvahuluk@gmail.com</p>"+
        "<p class='parrafoInfo'>Ubicacion:Hombu Dojo Atlantida - Dojo Montevideo Suarez y Ev. Ciganda</p>"+
        "<p class='parrafoInfo'> Celular Atlantida: 091060802</p>"+
        " <p class='parrafoInfo'>Celular Montevideo: 099617616</p>"+
        " <p class='parrafoInfo'>Celular Montevideo: 095210871</p>"
        break;;
        case "opcion11":
        informacion.innerHTML="<p class='parrafoInfo'>Referente: Marcelo Carambula</p>"
        break;;
        case "opcion12":
        informacion.innerHTML="<p class='parrafoInfo'>Representante :Juan Carlos Borbas - 6º Dan Karate - 3º Dan Kobudo. Representante para Uruguay IUSKF.</p>"+
        "<p class='parrafoInfo'>Correo shinshukanuruguay@hotmail.com</p>"+
        "<p class='parrafoInfo'>Ubicacion:Calle 15/3682 Casabó-Cerro</p>"+
        "<p class='parrafoInfo'>Telefono:2314 6668</p>"+
        "<p class='parrafoInfo'>Celular:095 318 062</p>"
        break;;
        case "opcion13":
        informacion.innerHTML="<p class='parrafoInfo'>Representate:Néstor Duarte - 3 DAN</p>"+
        "<p class='parrafoInfo'>Pagina:www.karate.uy</p>"+
        "<p class='parrafoInfo'>Correo:escuela@karate.uy</p>"+
        "<p class='parrafoInfo'>Ubicacion:Ada. Uruguay 1719</p>"+
        "<p class='parrafoInfo'> Celular:099 888 792</p>"
        break;;
        case "opcion14":
        informacion.innerHTML="<p class='parrafoInfo'>Referente: Omar Díaz</p>"+
        "<p class='parrafoInfo'>Correo:eukj.uy@gmail.com</p>"+
        "<p class='parrafoInfo'>Ubicacion:San Jose de Carrasco - Canelones</p>"
        break;;
        case "opcion15":
        informacion.innerHTML="<p class='parrafoInfo'>Sensei:Oscar Villarreal - Director Nacional.</p>"+
        "<p class='parrafoInfo'>Ubicacion:Jose Rotondaro 1609 - Toledo - Canelones</p>"+
        "<p class='parrafoInfo'>Celular:094 269 122</p>"
        break;
    }
}

const slider = document.querySelector('#noticias');
const noticias = document.querySelectorAll('.noticia');
const izquierda = document.getElementById('flechaIzquierda');
const derecha = document.getElementById('flechaDerecha');
let posicion = 0;

function MostrarSlide(posicion) {
  slider.style.transform = `translateX(-${posicion * 100}%)`;
}

izquierda.addEventListener('click', () => {
  posicion = (posicion - 1 + noticias.length) % noticias.length;
  MostrarSlide(posicion);
});

derecha.addEventListener('click', () => {
  posicion = (posicion + 1) % noticias.length;
  MostrarSlide(posicion);
});