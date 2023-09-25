<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/Galeria.css">
    <link rel="stylesheet" href="CSS/EncabezadoFooter.css">
    <title>Document</title>
</head>
<body>
<header>
<section id="encabezadoMedia">
                <a href="Index.html" id="enlaceIndex"><img src="imagenes/LogoCUK.png" id="logoMedia"></a> 
                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" id="opcionesMedia"fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                   </svg>
                 </section>
                 <section id="contenedorMenu">
                 <section id="menu"> 
                 <section id="contenedorX">
                 <h2 id="tituloOpciones">Opciones</h2>
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" id="cerrarMenu"fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                     <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                 </svg>
             </section>
                 <ul>
             <li id="opcionInstitucional">institucional</li>
             <li class="MediaInstitucional"><a href="Historia.html">Historia </a></li>
             <li class="MediaInstitucional"><a href="Afiliarse.html">Como Afiliarse a la Cuk</a></li>
             <li class="MediaInstitucional"><a href="ConsejoEjecutivo.html">Consejo Ejecutivo</a></li>
             <li id="opcionNoticias"> Noticias</li>
             <li class="mediaNoticias"><a href="Noticias.html">Noticias</li></a>
             <li class="mediaNoticias"><a href="Eventos.html">Eventos</li></a>
             <li><a href="Campeonatos.html">Campeonatos</a></li>
             <li><a href="Seleccion.html">Selección</a></li>
             <li><a href="Galeria.php">Galeria de Imagenes</a></li>
             <li><a href="Arbitraje.html">Arbitraje</a></li>
              </ul>
             </section> 
              </section>
        <section id="encabezado">
            <img src="imagenes/LogoCUK.png" id="LogoCUK">
            <section id="botones">
                <section class="puntos-encabezado">
                    <a href="Index.html"><button>inicio</button></a>
                </section>
                <section class="puntos-encabezado">
                    <button onmouseover="menuInstitucional()"
                        onmouseout="ocultarMenuInstitucional()">Institucional</button>
                    <ul id="institucional-opciones" onmouseover="menuInstitucional()"
                        onmouseout="ocultarMenuInstitucional()">
                        <a href="Historia.html"><li>Historia,Actas,Estatutos,reglamentos</li></a>
                        <a href="Afiliarse.html"><li>Como afiliarse a la CUK </li></a>
                        <a href="ConsejoEjecutivo.html">
                        <a href="ConsejoEjecutivo.html"><li>Consejo Ejecutivo</li></a> 
                        </a>
                    </ul>
                </section>
                <section class="puntos-encabezado">
                   <a  href="Noticias.html"><button onmouseover="menuNoticia()" onmouseout="ocultarMenuNoticia()">Noticias</button></a> 
                    <ul id="noticias-opciones" onmouseover="menuNoticia()" onmouseout="ocultarMenuNoticia()">
                        <li id="txtEventos"> Eventos </li>
                    </ul>
                </section>
                <section class="puntos-encabezado">
                  <a href="Campeonatos.html"> <button>Campeonatos</button></a> 
                </section>
                <section class="puntos-encabezado">
                    <a href="Seleccion.html"><button>Selección</button></a>
                </section>
                <section class="puntos-encabezado">
                    <button>Galeria de imagenes</button>
                </section>
                <section class="puntos-encabezado">
                    <a href="Arbitraje.html"><button>Arbitraje</button></a>
                </section>
            </section>
        </section>
        </section>
    </header>
<section id=contenedorTotal>    
<h1> Galeria de Imagenes</h1>
<?php
$contador=0;
for($x=1;$x<=10;$x++){
   $contador=GenerarPagina("Pagina".$x,$contador);
}
echo "</section>";
echo "</section>";
function GenerarPagina($pagina, $contador){
    echo "<section class='contenedor'>";
    $rutaImagenes="imagenes/galeriaDeImagenes/".$pagina;
    $imagenes=glob($rutaImagenes . "/*.*");
    foreach($imagenes  as $imagen){
        echo "<style> #imagen".$contador."{background-image: url(".$imagen.");}</style>";
        echo "<section class='imagen' id='imagen".$contador."'>";
        echo "</section>";
        $contador++;
    }
    echo "</section>";
    return $contador;
} 
?>
<section id="contenedorTotalBtn">
<section class="paginacion" id="paginacion">

<button onclick="mostrarPagina(0)" class="btnPaginacion">1</button>
<button onclick="mostrarPagina(1)" class="btnPaginacion">2</button>  
<button onclick="mostrarPagina(2)" class="btnPaginacion">3</button> 

<button onclick="mostrarPagina(3)" class="btnPaginacion">4</button>  
<button onclick="mostrarPagina(4)" class="btnPaginacion">5</button>  
<button onclick="mostrarPagina(5)" class="btnPaginacion">6</button>

<button onclick="mostrarPagina(6)" class="btnPaginacion">7</button>  
<button onclick="mostrarPagina(7)" class="btnPaginacion">8</button>  
<button onclick="mostrarPagina(8)" class="btnPaginacion">9</button>  
 
<button onclick="mostrarPagina(9)" class="btnPaginacion">10</button>  
</section>
</section>
<footer>
        <section class="footer-contenedor">
            <section class="footer-contacto">
                <p>Ubicación Bv. José Batlle y Ordóñez 2326 (CEDEC) - Montevideo - Uruguay</p>
                <p>Celular +598 99 999 999</p>
                <p>Correo cuk@cuk.org.uy</p>
            </section>
            <section class="footer-logo">
                <img src="imagenes/LogoCUKFooter.png" id="CukCopyright">
            </section>
            <section class="footer-redes">
            <p> Redes</p>
                <a href="https://www.facebook.com/karatecuk/?locale=es_LA" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                        class="logo-facebook" viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg></a>
                <a href="https://www.instagram.com/cukkarate/?hl=es" target="_blank"><svg
                        xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                        class="logo-instagram" viewBox="0 0 16 16">
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg></a>
            </section>
        </section>
</footer>
<script src="JS/Galeria.js"> </script>
<script src="JS/Encabezado.js"></script>
<script src="JS/MediaQuerys.js"></script>
</body>
</html>

