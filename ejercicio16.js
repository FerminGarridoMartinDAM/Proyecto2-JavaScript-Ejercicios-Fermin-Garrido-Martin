/* Ejercicio 16
For...of: Usa un bucle forof para recorrer todos los destinos del array.

Imprime en un console.log cada uno de sus valores.
 */
const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

function recorrer(places) {
    
    for (const place of places){
        console.log(" Destino: " +place )
    
    }
 // si quiero añadir la posicion por la que va la funcion:
/* let posicion = 0;  //Contador manual
  for (const place of places) {
    console.log("Posición " + posicion + ": " + place);
    posicion++;  //le sumamos uno al contador
 */

}

recorrer(placesToTravel)