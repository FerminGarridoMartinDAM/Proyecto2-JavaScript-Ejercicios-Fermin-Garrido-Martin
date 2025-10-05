/* Ejercicio 4 */
//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
console.log(aldeanos[3]);
//4.2 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio")
console.log(aldeanos)
//4.3 - Cambia el primer elemento de este array por "Bambina".
// con unshift: aldeanos.unshift("Bambina") lo habriamos añadido al principio del array pero no hubieramos sustitudo al otro.
aldeanos[0] = "Bambina"
console.log(aldeanos)
//4.4 - Dale la vuelta a este array.
aldeanos.reverse()
console.log(aldeanos)
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
console.log(aldeanos.indexOf("Narciso"))
//Nos ha dado la posicion 4 por tanto añado Canela a la posicion 4 y borro la 5 que sera donde este Narciso
aldeanos[4] = "Canela"
// compruebo la posicion de Narciso y Canela con el indexOf
console.log(aldeanos.indexOf("Narciso"))
console.log(aldeanos.indexOf("Canela"))
//me ha dado lo posicion -1 en Narciso , por lo que quiere decir que no existe , por lo tanto quiere decir que con directamente he sustituido a Narciso por Canela
console.log(aldeanos)

//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente

console.log(aldeanos.length)
//tiene 6 posiciones , pero como empieza por 0 , imprimiremos la posicion 5 que es la ultima.
console.log(aldeanos[5])

//Ahora con un metodo creando una constante

const longitud = aldeanos.length;
const ultimoElemento = longitud - 1;
console.log (aldeanos[ultimoElemento])