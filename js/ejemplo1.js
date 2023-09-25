/**
 * DWEC: Ejemplo 1. Encontrar los errores del script
 * @author Pablo L. J.
 * 
 * Realiza un script que se encargue de leer 10 nombres por pantalla y los inserte en un array. 
 * Posteriormente, los nombres se mostrarán una unica ventana emergente
 */

/* Encontrar los errores que tiene el siguiente script, usando las herramientas de depuración de Google Chrome */

var nombres=[];

var NUMERO_NOMBRES=10;

var lista = "";
for (var i = 0 ; i<10 ; i++) {
    nombres[i] = prompt("mete nombre");
    lista+= nombres[i] + " ";
}
console.warn(lista);


/* AVISOS (WARNING) */
console.warn("Mensaje warn");
/* ERRORES */
console.error("Mensaje err");
/* INFORMACIÓN (LOG) */
console.log("Mensaje log");
/* DEPURACIÓN (DEBUG) */
console.debug("Mensaje deb");
 

