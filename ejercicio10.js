/* Ejercicio 10
Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

Puedes usar este array para probarla:
const numbers = [12, 21, 38, 5, 45, 37, 6]; */

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let sumaTotal = 0;
  for (const numero of numberList) {
    sumaTotal = sumaTotal + numero;
  }
  const cantidadDeNumeros = numberList.length;
  const promedio = sumaTotal / cantidadDeNumeros;


console.log("La suma de todos los numeros es: " + sumaTotal);
console.log("En esta lista hay: " + cantidadDeNumeros + " numeros");
console.log("Por lo tanto: " + sumaTotal+ " / " + cantidadDeNumeros+ " nos da: " +promedio+ " que es el promedioS");

  return promedio
}



const resultadoNumbers = average(numbers);
console.log("📊 El promedio es:", resultadoNumbers);

average(numbers)


