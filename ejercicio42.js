/* Ejercicio 42
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante.
 */
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swapElement(array, index1, index2) {
  let swap = array[index1] // Esta variable se crea porque en el paso siguiente perdemos el valor de array[index1] y pasa a ser array[index2]
  array[index1] = array[index2]
  array[index2] = swap
  return array
}

console.log(swapElement(fantasticFour , 2 , 3))