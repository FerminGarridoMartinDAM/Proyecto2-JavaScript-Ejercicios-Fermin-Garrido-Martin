/* Ejercicio 37
Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.

Ten en cuenta que las categorías no tienen que repetirse.

Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]

Para filtrar las categorías puedes ayudarte de la función .includes(). */

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];


// Ahora estoy haciendo el codigo un poco mas rapido y sin tantos console.log por no hacerlo tan repetitivo , y en los que sean mas especiales hare varias versiones
function createNewArrayWithCategories (array) {
    let newArray = [];
    for (const element of array) {
        for (const value /* categorie */ of element.categories){
            if (!newArray.includes(value)) // Aqui le decimos ! Si no incluye el valor(comedia, accion, etc)
                newArray.push(value)        // pusheamos ese valor al nuevo array
        }
    }
    console.log(newArray)
}
createNewCategoriesArray(movies)