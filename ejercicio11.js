/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función:*/

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let sumaNumeros = 0;
  let sumaStrings = 0;

  for (const elemento of list) {
    let tipoDeElemento = "";

    if (typeof elemento === "number") {
      tipoDeElemento = "Número";
      sumaNumeros += elemento;
      console.log(
        "Tipo: " +
          tipoDeElemento +
          " -> valor: " +
          elemento +
          " → sumaNumeros = " +
          sumaNumeros
      );
    } else if (typeof elemento === "string") {
      tipoDeElemento = "String";
      sumaStrings += elemento.length;
      console.log(
        "Tipo: " +  tipoDeElemento +" -> valor: " +  elemento + " (longitud " + elemento.length + ") -> sumaStrings = " + sumaStrings    );
    } else {
      tipoDeElemento = "Otro tipo no válido";
      console.log("Tipo: " + tipoDeElemento + " -> valor: " + elemento);
    }
  }

  console.log("-----");
  console.log("Suma de números: " + sumaNumeros);
  console.log("Suma de longitudes de strings: " + sumaStrings);

  let sumaTotal = sumaNumeros + sumaStrings;
  let promedio = sumaTotal / list.length;

  console.log("Suma total: " + sumaTotal);
  console.log("Promedio: " + promedio);

  return promedio;
}

const promedioLista1 = averageWord(mixedElements);

console.log(promedioLista1);

/* 
Esto seria haciendo el promedio directamente de la suma de los dos, sin especificar si sumamos numbers o strings.

function averageWord(list) {
  let total = 0;
  for (const elemento of list) {
    if (typeof elemento === "number") {
      total += elemento;
      console.log("Sumando número: " + elemento + ", total ahora: " + total);
    } else if (typeof elemento === "string") {
      total += elemento.length;
      console.log("Sumando longitud de string " +  elemento + " ( +  elemento.length + "), total ahora: " + total );
    } else {
      console.log("Elemento no válido: ", elemento); 
    }
  }
  const promedio = total / list.length;
  return promedio;
}

console.log("Promedio final:",
     averageWord(mixedElements)); */
