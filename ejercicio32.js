/* Ejercicio 32
Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

Utiliza este array para probar tu función. */

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1961 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(array) {
    let oldest = array[0] // Aqui "asumimos , indicamos por defecto que la primera posicion es la mas antigua es decir es el valor de partida que le damos a oldest"
  for (const element of array) {
    if (element.year < oldest.year ) {
        oldest = element
    }
   
  }
console.log(oldest)
}
findOldestXMen(xMen)


//Voy a hacer aqui tambien un for normal para recordarlo que se me esta olvidando.
/* for (let i = 0 , i < array.length , i ++){} */  // Empieza por la posicion 0 , sigue funcionando siempre que la posicion sea menos que la longitud total del array y cada vez suma una posicion , es decir pasa a la siguiente posicion del array.