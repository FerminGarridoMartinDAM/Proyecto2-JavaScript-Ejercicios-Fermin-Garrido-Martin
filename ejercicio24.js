/* Ejercicio 24
Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.

Imprime este nuevo array por consola.
 */
const characters = [
  { name: "Luke Skywalker", species: "Human" },
  { name: "Darth Vader", species: "Human" },
  { name: "Chewbacca", species: "Wookiee" },
  { name: "Leia Organa", species: "Human" },
  { name: "R2-D2", species: "Droid" },
  { name: "C-3PO", species: "Droid" },
  { name: "Obi-Wan Kenobi", species: "Human" },
  { name: "Yoda", species: "Unknown" },
  { name: "Han Solo", species: "Human" },
];

function addElementforXValor(array, elementValor) {
  const newArray = [];
  for (const element of array) {
    console.log("Revisando especie de :" + element.name);
    if (element.species === elementValor) {
      console.log(
        element.name +
          " es " +
          elementValor +
          " , lo añadimos al nuevo array"
      );
      newArray.push(element);
    } else {
      console.log(
        element.name +
          " no es " +
          elementValor +
          " , asi que no lo añadimos al nuevo array"
      );
    }
  }
  console.log("RESULTADO FINAL");
  console.log("En este array hay " + newArray.length + " " + elementValor +":");
  console.log(newArray)
  console.log("---------------------------------------")
  return newArray
}

// Aqui vamos a hacer una constante para sacar los characters human y despues vamos a hacer otra para hacer los characters droid y asi ver claro como hacer constantes.

const humanCharacters = addElementforXValor (characters , "Human");

const droidCharacters = addElementforXValor (characters , "Droid");

console.log (humanCharacters);
console.log (droidCharacters);