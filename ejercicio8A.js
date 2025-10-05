/* Ejercicio 8
Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

    for (const avenger of avengers){
        //miramos cuantos string tiene cada avenger. Optativo
        console.log(avenger+ " tiene "+ avenger.length+ "letras")
    }



    function findLongestWord(stringList) {
  let longest  = ""
  for (const string of stringList) {
    if (string.length >longest.length){
        longest = string
    }
  }
 return (longest);

}
console.log(findLongestWord(avengers));



//ejercicios para el proximo dia:
// 11, 12 , 13 , 19 , 