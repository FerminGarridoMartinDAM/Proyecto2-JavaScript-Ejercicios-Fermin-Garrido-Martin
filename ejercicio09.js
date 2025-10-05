/* Ejercicio 9
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.

Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

Puedes usar este array para probar tu función: */

/* const numbers = [1, 2, 3, 5, 45, 37, 58]; */




/* se define una función llamada sumNumbers que recibe un parámetro: numberList.
Puedes pasarle cualquier array de números cuando la llames.
 */
/* Empieza un bucle for...of, que recorre cada número del array.
 let sumaTotal = 0 ; Aquí creas una variable para ir acumulando la suma. Comienza en 0.
En cada vuelta, numero será uno de los valores (por ejemplo: 1, luego 2, luego 3...). */
/* sumaTotal = sumaTotal + numero; Aquí haces la suma: actualizas sumaTotal con el número actual. */
/* Total; Después de recorrer todos los números, devuelves el total. */

/* const resultado = sumNumbers(numbers);
console.log("✅ Suma total:", resultado);
Verás en la consola todos los pasos + el resultado final. */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sumaTotal = 0;
  for (const numero of numberList) {
    console.log("🔢 Número actual:", numero);
    console.log("📊 Suma anterior:", sumaTotal);
    sumaTotal = sumaTotal + numero;
    console.log("➕ Nueva suma:", sumaTotal);
    console.log("--------------------------");
  }

  return sumaTotal;
}


const resultado = sumNumbers(numbers);
console.log("✅ Suma total:", resultado);