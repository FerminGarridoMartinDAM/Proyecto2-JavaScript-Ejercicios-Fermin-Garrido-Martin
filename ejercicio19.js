/* Ejercicio 19
Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función .includes() para comprobar la palabra.

Puedes usar este array: */

const toys = [
  { id: 5, name: "Transformers" },
  { id: 11, name: "LEGO" },
  { id: 23, name: "Hot Wheels" },
  { id: 40, name: "Rascador de gato" },
  { id: 40, name: "FurReal Friends gato interactivo" },
  { id: 60, name: "Nerf Blaster" },
  { id: 71, name: "Sylvanian Families - Familia gato" },
];

function deleteGato(array) {
  for (const elemento of [...array]) {
    console.log("➡️ Revisando:", elemento.name);
    if (elemento.name.includes("gato")) {
      console.log("❌ Este juguete contiene 'gato' -> lo eliminamos");
      const elementoIndexOf = array.indexOf(elemento);
      array.splice(elementoIndexOf, 1);
    } else {
      console.log("✅ Este juguete no contiene 'gato' -> lo dejamos");
    }
    console.log("--------------------------");
  }
  console.log("--------------------------");
  console.log("Juguetes que dejamos: " , array);
}


deleteGato(toys);


/* const newToys =[];

for (const toy of toys) {
    if (!toy.name.includes("gato")){
        newToys.push(toy);
    }
}
console.log(newToys); */