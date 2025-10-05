/* Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

for (const avenger of avengers) {
  console.log(avenger + " tiene " + avenger.length + " strings");
}

//aqui ya hemos visto que Capitan A. y Capitan M. son las mas largas con 10 strings, ahora vamos a hacer una funcion que nos saque automaticamente el elemento con mas strings y en caso de empate el primero que encuentre , que en este caso tiene que ser Capitan A

function findLongestWord(stringList) {
  let longest = stringList[0]; // empezamos con la primera palabra, Antonio hizo longest = "" !asi no tiene que pasar 2 veces por la posicion 0.
  console.log("🔍 Empezamos. Palabra inicial más larga es la primera que haya por defecto, en este caso:", longest);

  for (const avenger of stringList) {
    console.log("➡️ Analizando:", avenger);
    console.log("   Longitud de", avenger, "es", avenger.length);
    console.log("   Longitud de", longest, "es", longest.length);

    if (avenger.length > longest.length) {
      console.log("✅", avenger, "es más largo que", longest, "→ actualizamos");
      longest = avenger;
    } else if (avenger.length === longest.length) {
      console.log(
        "🤝",
        avenger,
        "tiene la misma longitud que",
        longest,
        "→ no se actualiza, se mantiene la primera que apareció."
      );
    } else {
      console.log(
        "⛔",
        avenger,
        "no es más largo que",
        longest,
        "→ no cambiamos"
      );
    }

    console.log("----------------------------");
  }

  console.log("🏁 Resultado final: La palabra más larga es:", longest);
  return longest; // ← Aquí devolvemos el resultado para usarlo si se necesita
}
// Llamamos a la función y guardamos el resultado
let palabraMasLarga = findLongestWord(avengers);

// Mostramos el resultado devuelto por la función

/* findLongestWord(avengers);
ahora con solo llamar a la funcion haria el mismo proceso que hemos realizado antes */

console.log("-------Hasta aqui el ejercicio de los avengers--------------------")


/* Aqui he hecho otro ejercicio para comprobar si servia la funcion con otro array. */
const coches = [
    "Audi",
    "BMW",
    "Ferrari",
    "Mercedes",
];


palabraMasLarga = findLongestWord(coches);

console.log(palabraMasLarga);


/* findLongestWord(coches);
se puede hacer directamente llamando la funcion. */