/* Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

Imprime el nombre por consola.
 */
const cartoons = [
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 },
];

function findTheLowest(array) {
  let lowest = array[0] // Aqui le damos el punto de partida a la nueva variable . Es decir ahora mismo ponemos por defecto que lowest es igual a la primera posicion del array , (a el primero valor que encuentre.) que es 1938 y ya a partir de ahi pues si es menor cambiara el valor y si no dejara este.
     console.log("Recorriendo elementos...")
  for (let i = 0 ; i < array.length ; ++i) {
   /* const element = array[i] . Puedo hacer esta constante si no quiero estar poniendo siempre array[i] */
    console.log("Revisando: " + array[i].name + " " +  array[i].debut)
    if (array[i].debut < lowest.debut){
        lowest = array[i];
        console.log("Ahora mismo " + array[i].name + " " + array[i].debut +" es el elemento con el valor mas bajo")
        console.log("--------------")
  } else {
    console.log("Este elemento tiene un valor mas alto por lo que no sustituye a: " + lowest.name + " " +lowest.debut )
    console.log("-------------")
}
  }
  console.log("............RESULTADO FINAL...................")
  console.log ("Este es el elemento con el valor mas bajo: ")
  console.log(lowest)

}
findTheLowest(cartoons)