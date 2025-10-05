/* Ejercicio 29
    Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

    Utiliza bucles para lograrlo e imprime el objeto final por consola.
    */

//Nota adicional. Antonio he utilizado la const decade varias veces en el ejercicio porque estaba dentro de un bucle, y la he usado en otros bucles llamandola igual.
const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

function sortArrayByKey(array) {
  let objectSortedByKey = {};
  let key = "";
  console.log("=== AGRUPANDO PELÍCULAS POR DÉCADA ===");
  // === AGRUPANDO PELÍCULAS POR DÉCADA ===
  console.log("Total de películas a procesar: " + array.length);
  //  Total de películas a procesar: 11
  console.log("------------");

  for (const element of array) {
    // Estamos creando las decadas, dandole a a la variable key un valor(value) dependiendo del valor(value) de releaseYear
    if (element.releaseYear >= 1970 && element.releaseYear <= 1979) {
      key = "1970's";
      //si releaseYear esta entre x key e y key entonces decada tendra n key , en este caso como esta entre 1970 y 1979 le damos el key(en Strings de 1970)
    } else if (element.releaseYear >= 1980 && element.releaseYear <= 1989) {
      key = "1980's";
    } else if (element.releaseYear >= 1990 && element.releaseYear <= 1999) {
      key = "1990's";
    } else if (element.releaseYear >= 2000 && element.releaseYear <= 2009) {
      key = "2000's";
    } else if (element.releaseYear >= 2010 && element.releaseYear <= 2019) {
      key = "2010's";
    } else if (element.releaseYear >= 2020 && element.releaseYear <= 2029) {
      key = "2020's";
    } else {
      console.log("Esta pelicula o es muuuuy antigua o viene del futuro");
    }
    console.log(
      "Revisando pelicula: " +
        element.title +
        ". Del año:(" +
        element.releaseYear +
        ") Esta peli es de: " +
        key
    );
    //Revisar las nuevas concatenaciones que nos ha dicho Antonio, que ahorran mucho creo que eran las ${}

    // AHORA AGREGAMOS LA PELÍCULA.
    if (objectSortedByKey[key] === undefined) {
      //  Verificamos si esta década ya existe en nuestro objeto
      // objectSortedByKey[key] busca la propiedad con el nombre de la década
      // Si es la primera película de esta década, no existe (undefined)
      console.log("Creando nueva década: " + key);
      //  Creando nueva década: 1970s , 1980s , etc pero solo una vez , que sera las veces que se cumpla moviesByKey[key] === undefined, porque una vez que coja el Key ya no sera undefined

      objectSortedByKey[key] = [];
      // Entonces creamos la propiedad[key] nueva con un array vacío
    }
    objectSortedByKey[key].push(element.title); //Aqui lo he puesto con element.title por que me de solo el nombre, pero si quieres todo el elemento , le quitas el . title
    // Y agregamos la película completa al array de su década ,  lo ponemos fuera del ultimo if , porque queremos que vaya añadiendo siempre peliculas, si no solo añadiria la primer vez que crea la decada
    // moviesByKey["1970s"].push(película_completa)

    console.log(
      "Añadida a " +
        key +
        ". Total en esta década: " +
        objectSortedByKey[key].length
    );
    //  Añadida a 1970's. Total en esta década: 1
    //  Añadida a 1980's. Total en esta década: 1
    //  Añadida a 1980's. Total en esta década: 2
    //  ... etc

    console.log("------------");
  }

  console.log(objectSortedByKey);
  console.log("------------");
  console.log("Total de elementos a revisar: " + array.length);
  /*!!  !!!! console.log("Total de elementos ordenados :" + objectSortedByKey.length); //aqui me da fallo  console.log("Total de elementos ordenados :" + objectSortedByKey.length)  , porque me da undefined, voy a revisarlo con Claude a ver que me dice. ESTABA HACIENDOLE EL .LENGHT A UN OBJETO ENTERO Y ESO NO SE PUEDE.!!!!
   */
  /*!!!! console.log("Total de elementos revisados:" + Object.values(objectSortedByKey).length)// Aqui solo me da el Key de 2010 porque es la ultima posicion que se ha quedado creo... voy a hacerle un bucle y que me de el valor del length sumando todos los Object.values(objectSortedByKey).length */

  //Aqui lo voy a hacer con el bucle a ver si me da ya el total de elementos revisados, es decir lo que quiero que me de es la suma de los values de las keys del objeto , es decir cuantos valores hay en cada decada (cuantos valores hay en cada propiedad o cuantos values hay en cada key   key(decadas) -> value(peliculas))

  let totalValues = 0;

  /* for (const value in objectSortedByKey) {           Este es un bucle for in pero voy a hacer un bucle directamente con for of atacando a los Object.values
        totalValues = totalValues + objectSortedByKey[value].length
    }   */
  for (const value of Object.values(objectSortedByKey)) {
    totalValues = totalValues + value.length;
  }

  console.log("Total de elementos revisados: " + totalValues);

  for (const element in objectSortedByKey) {
    console.log(
      "En la decada: " +
        element +
        "hay: " +
        objectSortedByKey[element].length +
        " elementos"
    ); // Y aqui tenia un fallo por que estaba poniendo Key en vez de element y estaba en el Key que se habia quedado la otra constante. Pero tengo que preguntar a Antonio si puedo hacer este console.log sin tener que hacer este bucle con otra constante y lo puedo hacer con las que tenia antes y asi me evito crear nuevas.
  }
}

sortArrayByKey(starWarsMovies);


//Cuando hago el console log , no se porque me salen las decadas (las keys) en verde y con las comillas como si fueran values y en el siguiente si me salen bien las key (metal rock , etc,) Supongo que es para dar enfasis en que son strings aunque sean numeros?????
/* {
  "1970's": [ 'A New Hope' ],
  "1980's": [ 'The Empire Strikes Back', 'Return of the Jedi' ],
  "1990's": [ 'The Phantom Menace' ],
  "2000's": [ 'Attack of the Clones', 'Revenge of the Sith' ],
  "2010's": [
    'The Force Awakens',
    'The Last Jedi',
    'The Rise of Skywalker',
    'Rogue One',
    'Solo'
  ]
} */

/*   {
  Metal: [ 'Enter Sandman' ],
  Rock: [
    'Back in Black',
    'Bohemian Rhapsody',
    'Thunderstruck',
    'Hotel California',
    'Stairway to Heaven'
  ],
  Pop: [ 'Blinding Lights', 'Bad Guy' ],
  Country: [ 'Old Town Road' ],
  Grunge: [ 'Smells Like Teen Spirit' ]
} */