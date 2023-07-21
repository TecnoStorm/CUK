function mostrarInformacion(){
    var eleccion = document.getElementById("opciones").value;
    var abiertos = document.getElementById("Abierto");
    var cerrados = document.getElementById("Cerrado");
    var proximos = document.getElementById("proximos");

    switch (eleccion) {
        case "todos":
            abiertos.style.display= "block";
            cerrados.style.display= "block";
            proximos.style.display= "block";
            break;;

        case "Abiertos":
            abiertos.style.display= "block";
            cerrados.style.display= "none";
            proximos.style.display= "none";
            break;;

        case "Cerrado":
            cerrados.style.display= "block";
            abiertos.style.display= "none";
            proximos.style.display= "none";
            break;;

        case "Proximos":
            proximos.style.display= "block";
            abiertos.style.display= "none";
            cerrados.style.display= "none";
            break;
    }
}
    

