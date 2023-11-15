/*jslint devel: true*/
/*eslint-env browser*/

/**
 * Simula la compra de entradas
 */
function comprar() {
    "use strict";

    //Se extrae la información de lo que ha escrito el usuario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var expo;
    var expo_value = document.getElementById("exposicion").value;
    var entradas = document.getElementById("numero").value;
    var coste = document.getElementById("coste").innerHTML;
    console.log("coste: " + coste);

    //El nombre de la exposición dependerá del value seleccionado
    if (expo_value === "e") {
        expo = "Formula1";
    }
    
    //Se añaden los valores en la ventana modal
    document.getElementById("n").innerHTML = nombre;
    document.getElementById("c").innerHTML = correo;
    document.getElementById("e").innerHTML = expo;
    document.getElementById("nu").innerHTML = entradas;
    document.getElementById("ct").innerHTML = coste;

    //Se muestra la ventana modal
    document.getElementById("modal").style.display = "flex";
    return false;
}


/**
 * Oculta la ventana modal
 */
function cerrarVentana() {
    "use strict";
    document.getElementById("modal").style.display = "none";
}


/**
 * Calcula el coste de las entradas
 */
function costeTotal() {
    "use strict";
    var numero = document.getElementById("numero").value;
    document.getElementById("coste").innerHTML = (numero * 20) + "€";

}
