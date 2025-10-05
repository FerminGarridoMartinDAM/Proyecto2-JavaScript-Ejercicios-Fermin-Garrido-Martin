/* Ejercicio 30
Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valoreses sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola. */

const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];


//Voy a hacer una version rapida y directa sin todos los console.log y sin explicacion ya que es identico al ejercicio anterior,  y al haberlo hecho generico lo puedo integrar perfectamente en este.  Estoy pensando que si se quisiera hacer mucho mas generico, en vez de poner title y genre, se podria poner key1 y key2
function sortArrayByKey(array) {
  let objectSortedByKey = {};
  let key = "";
  for (const element of array) {
    if (element.genre === "Metal") {
      key = "Metal";
    } else if (element.genre === "Rock") {
      key = "Rock";
    } else if (element.genre === "Pop") {
      key = "Pop";
    } else if (element.genre === "Country") {
      key = "Country";
    } else if (element.genre === "Grunge") {
      key = "Grunge";
    }
    if (objectSortedByKey[key] === undefined) {
      objectSortedByKey[key] = [];
    }
    objectSortedByKey[key].push(element.title)
  }
  console.log(objectSortedByKey)
}
sortArrayByKey(tracks);


