/* Ejercicio 14
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función:
 */
const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  /* Esta es sencilla pero repite resultados cuando la palabra se repite, el resultado es correcto pero reiterado.
    for (const word of list){
        let count = 0 ;
        for (const wordagain of list){
            if (word === wordagain){
                count += 1 // count ++ , count = count + 1
            }
        } */

  for (let i = 0; i < list.length; i++) {
    const word = list[i];
     console.log("➡️ Analizando palabra en posición " + i + ": '" + word + "'");

    // Solo contamos esta palabra si es la **primera vez que aparece** en el array
    if (list.indexOf(word) === i) {
      let count = 0;
        console.log("   Esta es la primera vez que aparece '" + word + "' → contamos cuántas veces aparece");
       
      // Recorremos todas las palabras para contar cuántas veces aparece 'word' y se compara con "w"
      console.log("Comparando")
      for (const w of list) {
        if (w === word) count += 1;
      }

      console.log("✅ La palabra '" + word + "' aparece " + count + " veces");
      console.log("--------------------------");
    }else {
      // Aquí indicamos que la palabra ya apareció antes
      console.log("⚠️ La palabra '" + word + "' ya ha aparecido antes → no contamos de nuevo");
      console.log("--------------------------");
    }}
  
}

console.log("🏁 Conteo final completado");

// Probamos la función
repeatCounter(words);
