// CONTINUACION DEL ANTERIOR 20A
//Aqui he visto que haciendo esto añado los videogames que cumplen los requisitos, pero he visto que es redundante el console.log , entonces quiero encontrar la forma de que si añado mas elementos al array me haga solo un console.log final con todos los arrays. A ver que pasa...
//he visto que se puede hacer con una con un boolean lo hago en el siguiente ejercicio ,20A, para no manchar mas este

/*Copio las dos const arribas e intento cambiar la funcion para que me muestre solo el valor de esa constante, y si yo se lo pido con un true me cree una sola constante con todos los elementos que tengan 15 ventas o mas.

/* For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys.

Imprímelo por consola.

Puedes usar este array: */

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

const popularAll = [];

function selectTopSell(array, ShowAll = true) {
  const popularCategorie = [];

  for (const elemento of [...array]) {
    console.log("Contando ventas de: " + elemento.name);
    console.log(
      "Se han vendido: " + elemento.sellCount + " de: " + elemento.name
    );

    if (elemento.sellCount >= 15) {
      popularCategorie.push(elemento);
      console.log("✅ " + elemento.name + " tiene 15 ventas o mas");
      console.log("..................");
      
      if (ShowAll) {
        popularAll.push(elemento);
      }
    } else {
      console.log("❌ " + elemento.name + " tiene menos de 15 ventas");
      console.log("..................");
    }
    }

    if (ShowAll) {
      
      console.log("Los más vendidos de todas las categorias  son: ", popularAll);
      return popularAll;
    }  else {
      
      console.log("Los mas vendidos son: ", popularCategorie);
      return popularCategorie;
    }
  }
  

selectTopSell (videogames, true)
