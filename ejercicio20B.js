/*
Me he calentado. Quiero usar for of para añadir todos los elementos que tengan sellCount >= 15, pero tambien quiero que pueda imprimir o utilizar segun yo lo dispongo o un array solo, o varios a la vez , o bien si en el futuro me dan mas arrays poder añadirlos o combinarlos como quiera.  */


const toys = [
  { id: 101, name: "Super Soaker", sellCount: 15 },
  { id: 102, name: "Tamagotchi", sellCount: 22 },
  { id: 103, name: "Polly Pocket", sellCount: 8 },
  { id: 104, name: "Yo-yo", sellCount: 33 },
  { id: 105, name: "Pikachu plush toy", sellCount: 19 },
  { id: 106, name: "Rubik's Cube", sellCount: 27 },
  { id: 107, name: "Fidget Spinner", sellCount: 12 },
  { id: 108, name: "Slinky", sellCount: 5 },
  { id: 109, name: "Magic 8-Ball", sellCount: 38 },
  { id: 110, name: "Troll Doll", sellCount: 20 },
];

const videogames = [
  { id: 111, name: "PES6", sellCount: 999 },
  { id: 112, name: "FIFA99", sellCount: 22 },
  { id: 113, name: "GTA5", sellCount: 8 },
  { id: 114, name: "Super Mario", sellCount: 33 },
  { id: 115, name: "Pokemon", sellCount: 19 },
  { id: 116, name: "WRC5", sellCount: 27 },
  { id: 117, name: "Dragon Ball Tenkaichi", sellCount: 12 },
  { id: 118, name: "WOW", sellCount: 999 },
  { id: 119, name: "Diablo", sellCount: 38 },
  { id: 120, name: "LOL", sellCount: 20 },
];

// Array general donde podemos acumular todos los top sell si queremos
const popularAll = [];

// Función flexible
function selectTopSellFlexible(arraysObj, addToGeneral = true) {
  // arraysObj será un objeto donde las claves son el nombre de la categoría y los valores los arrays
  // Ejemplo: { "juguetes": toys, "videojuegos": videogames }

  // Recorremos cada categoría
  for (const category in arraysObj) {
    const array = arraysObj[category]; // Tomamos el array de esa categoría
    const popularCategory = [];        // Array temporal solo para esa categoría

    console.log(`\n🔹 Procesando categoría: ${category}`);

    // Recorremos los elementos del array usando for...of
    for (const item of array) {
      console.log("Contando ventas de: " + item.name);
      console.log("Se han vendido: " + item.sellCount + " de: " + item.name);

      // Si el item tiene sellCount >= 15
      if (item.sellCount >= 15) {
        popularCategory.push(item);      // Lo añadimos al array de esa categoría
        if (addToGeneral) popularAll.push(item); // Si queremos, lo añadimos también al general
        console.log("✅ " + item.name + " tiene 15 ventas o más");
      } else {
        console.log("❌ " + item.name + " tiene menos de 15 ventas");
      }
      console.log("--------------------");
    }

    // Imprimimos los resultados según lo que hayamos decidido
    if (addToGeneral) {
      console.log(`📌 Los más vendidos hasta ahora (TODAS las categorías):`, popularAll);
    } else {
      console.log(`📌 Los más vendidos de ${category} son:`, popularCategory);
    }
  }

  console.log("🔹 Proceso completado.\n");

  // Devolvemos el array general si addToGeneral=true, o null si no
  return addToGeneral ? popularAll : null;
}

// 👉 Ejemplo de uso:
const arraysToProcess = {
  "juguetes": toys,
  "videojuegos": videogames
};

// Procesamos y agrupamos todo en el array general
selectTopSellFlexible(arraysToProcess, true);

// Procesamos cada categoría por separado sin agrupar al general
// selectTopSellFlexible(arraysToProcess, false);