/*     Ejercicio 35
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder.
 */
const mutants = [
  { name: "Wolverine", power: "teleportation" }, // Este valor de power lo he cambiado para probar si imprimia en caso de multiples
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(array, key2) {
  let found = false; // Creamos una variable en false para marcarla por defecto como no activa, y la vamos a meter en el bucle en true cuando haya encontrado el resultado y en false para cuando no lo haya encontrado

  for (const element of array) {
    if (element.power === key2) {
      console.log("Encontrado :" + element.name + " con " + key2);
    }
  }
  if (found === false) {
    console.log("No se ha encontrado ningun elemento coincidente con " + key2);
  }
}

findMutantByPower(mutants, "pepe");



// Voy a probar otra manera, quiero asignar una variable found y otra notFound para que me resulte mas sencillo



function findMutantByPower2(array, key2) {
  let found = false; 
  let notFound =! found 

  for (const element of array) {
    if (element.power === key2) {
        found = true
      console.log("Encontrado :" + element.name + " con " + key2);
    }
  }
  if(notFound) {
    console.log("No se ha encontrado ningun elemento coincidente con " + key2);
  }
}

findMutantByPower2(mutants, "caca");


// No me parece muy interesante