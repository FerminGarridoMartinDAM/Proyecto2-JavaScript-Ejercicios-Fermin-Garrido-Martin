/* Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

Imprime cada array por consola. */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

function organizeIn3Arrays (array) {
     console.log("=== ORGANIZANDO PELÍCULAS POR DURACIÓN ===");
  console.log("---------------------");
const peliculaPequeña = [] // Nuevo array para peliculas de menos de 100 minutos
const peliculaMediana = []  // Nuevo array para peliculas de entre 100 y 200 minutos
const peliculaGrande = []   // Nuevo array para peliculas de mas de 200 mimutos.
for (const element of array){
    if (element.durationInMinutes < 100) {
        peliculaPequeña.push(element)
         console.log("Es PEQUEÑA - La agregamos al array de películas pequeñas");
    } else if (element.durationInMinutes >= 100 && element.durationInMinutes < 200)  {
        peliculaMediana.push(element)
         console.log("Es Mediana - La agregamos al array de películas pequeñas");
    } else if  (element.durationInMinutes >= 200) {
        peliculaGrande.push(element)
         console.log("Es Grande - La agregamos al array de películas pequeñas");
         console.log('%c%s', 'color: #e69900'); // aqui he probado una extension para colorear los console.log pero creo que tengo que crearle primero una constante asi que se complica un poco. voy a hacer una prueba al final del codigo
         
    }
    }

 console.log("=== RESULTADOS FINALES ===");
  console.log("-----------");
  
  console.log("PELÍCULAS PEQUEÑAS (menos de 100 min):" + peliculaPequeña.length);
  console.log(peliculaPequeña);
  console.log("-----------");
  
  console.log("PELÍCULAS MEDIANAS (100-199 min): "+ peliculaMediana.length);
  console.log(peliculaMediana);
  console.log("-----------");
  
  console.log("PELÍCULAS GRANDES (200+ min): " + peliculaGrande.length);
  console.log(peliculaGrande);
  console.log("-----------");
  
  console.log("RESUMEN:");
  console.log("Pequeñas: " + peliculaPequeña.length + " películas");
  console.log("Medianas: " + peliculaMediana.length + " películas"); 
  console.log("Grandes: " + peliculaGrande.length + " películas");
  console.log("Total: " + (peliculaPequeña.length + peliculaMediana.length + peliculaGrande.length) + " películas");

   return {
    pequeñas: peliculaPequeña,
    medianas: peliculaMediana,
    grandes: peliculaGrande
   };
}


organizeIn3Arrays(movies);



const pruebaColor = "AQUI VAMOS A PROBAR EL console.log CON COLOR"
console.log('%c%s', 'color: #19722b', pruebaColor);

// Me imprime pero no me colorea... otra vez sera.