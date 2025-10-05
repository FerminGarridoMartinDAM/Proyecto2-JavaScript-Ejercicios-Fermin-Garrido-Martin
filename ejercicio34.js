/* Ejercicio 34
Escribe una función que calcule el promedio de duración de una lista de películas.

Recibe un array de películas, cada una con su duración en minutos.

La función debe devolver el promedio de duración de todas las películas.
 */
const movies = [
  { title: "Inception", duration: 148 },
  { title: "The Dark Knight", duration: 152 },
  { title: "Interstellar", duration: 169 },
  { title: "Dunkirk", duration: 106 },
  { title: "The Prestige", duration: 130 },
  { title: "Memento", duration: 113 },
  { title: "Batman Begins", duration: 140 },
  { title: "The Dark Knight Rises", duration: 164 },
  { title: "Tenet", duration: 150 },
  { title: "Insomnia", duration: 118 },
];

function averageMovieDuration(array) {
  let totalDuration = 0;
  let averageDuration = 0;
  for (const element of array) {
    totalDuration = totalDuration + element.duration;
    averageDuration = totalDuration / array.length;
  }
  console.log(averageDuration);
}
averageMovieDuration(movies);

// Voy a probar a hacerlo en una sola operacion a ver si puedo
function averageMovieDuration2(array) {
  let averageDuration = 0;
  for (const element of array) {
    averageDuration = averageDuration + element.duration;
  }
  averageDuration = averageDuration / array.length;
  console.log(averageDuration);
}
averageMovieDuration2(movies);

//PERFECTO! aun que me parece mas sencillo la primera , porque aqui para alguno puede haber confusion con poner la operacion fuera del bucle y en esete caso lo unico que nos ahorramos es nombrar una variable... Habra que comprobar en programas mas complicados.

