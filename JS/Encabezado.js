var tiempo;
var tiempoNoticia;
function menuInstitucional(){
    var menuInstitucional=document.getElementById("institucional-opciones")
    menuInstitucional.style.display="block";
    clearTimeout(tiempo);
}

function ocultarMenuInstitucional(){
        tiempo=setTimeout(function(){
            var menuInstitucional=document.getElementById("institucional-opciones")
            menuInstitucional.style.display="none";
        }, 100)
}

function menuNoticia(){
    var menuNoticia=document.getElementById("noticias-opciones")
    menuNoticia.style.display="block";
    clearTimeout(tiempoNoticia);
}

function ocultarMenuNoticia(){
        tiempoNoticia=setTimeout(function(){
            var menuInstitucional=document.getElementById("noticias-opciones")
            menuInstitucional.style.display="none";
        }, 300)
}
