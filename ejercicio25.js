/* Ejercicio 25
Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

Imprime ambos conteos por consola.
 */
const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];



function beforeAndAfterAdate (array) {
    const after = []
    const before = []
    let dateValor = 2000
    for (const element of array){
        
        console.log("Revisando: " + element.title + " (" + element.releaseYear + ")")
        
        if (element.releaseYear >= dateValor) {
            after.push(element)
            console.log("Este elemento es del año:" +  dateValor + " o posterior, la añadimos a after.")
            console.log("------------")
        } else if (element.releaseYear < dateValor) {
            before.push(element)
            console.log("Este elemento es anterior al año: " + dateValor + " , la añadimos a befores." )
            console.log("------------")
        }
    }
    console.log("-----------")
    console.log("Elementos anteriores a "+ dateValor + ": " + before.length)
    console.log (before)
    console.log("------------")
    console.log("Elementos del año: " + dateValor + " en adelante : " + after.length)
    console.log(after)
    console.log("------------")

    console.log ("Elementos totales: " + array.length)
    console.log("Total elementos revisados: " + (before.length + after.length)); // Para comprobar que se procesaron todas
    if (array.length === (before.length + after.length)){
        console.log("Todos los elementos fueron revisados")
            }else {
                console.log("Algun elemento no ha sido revisado")
            }
}
beforeAndAfterAdate(movies)