console.log("A");

for (let i = 0; i < 5; i++) {
  console.log("Hola", i);
  console.log("Adios", i);
}

console.log("B");

for (let i = 0; i < 3; i++) {
  console.log("Pepe", i);
  console.log("Jose", i);
}

//i = 0 -> Se cumple la condicion de i < 3 ->  por tanto imprime Pepe 0 entonces le suma una (i++)
// i= 1 -> Se cumple la condicion de i < 3 ->  por tanto imprime Pepe 1 entonces le suma una (i++)
// i= 2 -> Se cumple la condicion de i < 3 ->  por tanto imprime Pepe 2 entonces le suma una (i++)
// i= 3 -> No se cumple la condicion de i<3 -> por tanto se interrumpe el bucle

const figuras = ["Boba Fett", "Sam Porter", "Metal Gear", "Cloud Strife"];

for (let i = 0; i < figuras.length / 2; i++) {
  const figura = figuras[i];
  console.log(figura, i);
}

/* for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
  Este es el generico , es igual que el otro solo que nosotros al array lo hemos llamado figuras y al element figura
 */

  const numeros =[2, 5, 24, 27, 29, 100, 240, 3];
  let total = 0;

  for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    total = total + numero; // Mas rapido total += nunero;
    console.log(total, "en la vuelta " + index)
  }
  console.log(total)

  //Otros blucles
  const animales = ["Perro", "Gato", "Loro", "Elefante"]


  //for off
  for (const animal of animales) {
    console.log(animal)
  }
  for (let index = 0; index < animales.length; index++) {
    const animal = animales[index];
    console.log(animal)
  }

  //for each
  animales.forEach((animal, index) => {
    console.log(animal, index);
  });

  //for in
  const batman = {
    name: "Bruce",
    parents: false,
    city: "Gotham",
    age: 50,
  };

  for(const propiedad in batman) {
    console.log(propiedad)
  }

  for(const propiedad in batman) {
    console.log(batman[propiedad]);
  }
  for(const propiedad in batman) {
    console.log (batman);
  }