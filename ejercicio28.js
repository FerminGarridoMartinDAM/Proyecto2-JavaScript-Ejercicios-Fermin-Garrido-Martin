/* Ejercicio 28
Dada una lista de álbumes de música, utiliza un bucle para sumar todas las duraciones solo de los álbumes de rock y luego imprime el total de estas duraciones por consola. */

const albums = [
  { title: "Led Zeppelin IV", genre: "Rock", duration: 42.19 },
  { title: "The Dark Side of the Moon", genre: "Rock", duration: 42.49 },
  { title: "Back in Black", genre: "Rock", duration: 42.11 },
  { title: "Hotel California", genre: "Rock", duration: 43.08 },
  { title: "Abbey Road", genre: "Rock", duration: 47.23 },
  { title: "Thriller", genre: "Pop", duration: 42.19 },
  { title: "A Night at the Opera", genre: "Rock", duration: 43.08 },
  { title: "The Wall", genre: "Rock", duration: 81.0 },
  { title: "Born to Run", genre: "Rock", duration: 39.26 },
  { title: "The Joshua Tree", genre: "Rock", duration: 50.11 },
];

/* Dejo esto aqui para que vea el error que tenia! Intente hacerlo con un push. pero deberia haberlo hecho con una suma porque es un numero! y con una variable en vez de constante.

function addDuration (array){
    const durationTotal = 0
    for (const element of array){
        if (element.genre === "Rock"){
           durationTotal.push(element.duration)
        }
    }
    console.log(durationTotal)
}
addDuration(albums) */

/* 
Aqui hago version super express y concisa de lo que pide sin adornos

function totalValue (array){
    let valueTotal = 0  // Cambiado: let en lugar de const, y inicializar con 0 (número)
    for (const element of array){
        if (element.genre === "Rock"){
           valueTotal += element.duration  // Cambiado: sumar en lugar de push
        }
    }
    console.log("Duracion total de  los álbumes de rock: " + valueTotal +  "minutos")
}

totalValue(albums) */

//Aqui version full experience :D para probar un poco mas de condicionales , meterle console logs a full y practicar. Le he dicho a Claude que le meta explicaciones full a cada linea para que luego pueda repasarlo y me añadio el fixed , que creo que no hace falta en este caso pero lo he dejado porque me parece un buen ejemplo para repasar. Le he dicho que ponga directamente de los console.log lo que saldria por consola, para no tener que hacer el node cada vez que quiera verlo, asi lo veo instantaneo.

function totalValue(array) {
  let durationTotal = 0;
  // ↑ CRUCIAL: Usamos 'let' porque este valor va a CAMBIAR
  // Empezamos con 0 y vamos sumando cada duración de álbum de rock
  // NO usamos 'const' porque el valor no será constante

  let totalElementCount = 0;
  // ↑ Contador para saber cuántos álbumes de rock encontramos

  console.log(" SUMANDO DURACIÓN DE ÁLBUMES DE ROCK ");
  // → === SUMANDO DURACIÓN DE ÁLBUMES DE ROCK ===

  console.log("Total de álbumes a revisar: " + array.length);
  // ↑ array.length cuenta todos los álbumes del array
  // → Total de álbumes a revisar: 10

  console.log("------------");
  // → ------------

  for (const element of array) {
    // ↑ for...of recorre cada álbum del array
    // En cada vuelta, 'element' será un objeto como { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 }

    console.log(
      "Revisando: " +
        element.title +
        " (" +
        element.genre +
        ") - " +
        element.duration +
        " min"
    );
    // → Revisando: Led Zeppelin IV (Rock) - 42.19 min
    // → Revisando: The Dark Side of the Moon (Rock) - 42.49 min
    // → Revisando: Thriller (Pop) - 42.19 min
    // ↑ Mostramos título, género y duración de cada álbum

    if (element.genre === "Rock") {
      // ↑ Pregunta: ¿El género de este álbum es exactamente "Rock"?
      // element.genre accede a la propiedad 'genre' del álbum actual
      // === hace comparación estricta (más segura que ==)

      durationTotal = durationTotal + element.duration;
      // ↑ SUMA ACUMULATIVA: Tomamos el total actual y le sumamos la duración de este álbum
      // Primera vez: 0 + 42.19 = 42.19
      // Segunda vez: 42.19 + 42.49 = 84.68
      // Tercera vez: 84.68 + 42.11 = 126.79... y así sucesivamente

      totalElementCount = totalElementCount + 1;
      // ↑ Incrementamos el contador de álbumes de rock
      // También se podría escribir como: rockAlbumsCount += 1 o rockAlbumsCount++

      console.log(
        "Es Rock - Sumamos " +
          element.duration +
          " minutos. Total actual: " +
          durationTotal.toFixed(2) +
          " min"
      );
      // → Es Rock - Sumamos 42.19 minutos. Total actual: 42.19 min
      // → Es Rock - Sumamos 42.49 minutos. Total actual: 84.68 min
      // ↑ .toFixed(2) redondea a 2 decimales para que se vea más limpio
    } else {
      // ↑ Solo se ejecuta si element.genre NO es "Rock"

      console.log("No es Rock - Lo saltamos");
      // → No es Rock - Lo saltamos
      // ↑ Informamos que encontramos un álbum que no es de rock
    }

    console.log("------------");
    // → ------------
  }

  console.log("=== RESULTADOS FINALES ===");
  // → === RESULTADOS FINALES ===

  console.log("Álbumes de Rock encontrados: " + totalElementCount);
  // → Álbumes de Rock encontrados: 9
  // ↑ Mostramos cuántos álbumes de rock había en total

  console.log(
    "Duración total de álbumes de Rock: " +
      durationTotal.toFixed(2) +
      " minutos"
  );
  // → Duración total de álbumes de Rock: 430.55 minutos
  // ↑ Esta es la respuesta principal del ejercicio

  console.log(
    "Duración promedio por álbum de Rock: " +
      (durationTotal / totalElementCount).toFixed(2) +
      " minutos"
  );
  // → Duración promedio por álbum de Rock: 47.84 minutos
  // ↑ BONUS: Calculamos el promedio dividiendo total entre cantidad
  // Los paréntesis fuerzan que se haga la división antes de .toFixed()

  return durationTotal;
  // ↑ Devolvemos el total por si queremos usar el resultado después
}

totalValue(albums);
