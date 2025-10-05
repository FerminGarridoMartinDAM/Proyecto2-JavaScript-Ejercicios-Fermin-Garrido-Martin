/* Ejercicio 31
Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.

Ejemplo de salida:

Kurt Cobain -> The Beatles

Kurt Cobain -> Pixies

Kurt Cobain -> Lead Belly

David Bowie -> Little Richard

David Bowie -> Chuck Berry

David Bowie -> The Velvet Underground */

const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];


function separateValues (array) {
    for (const element of array){
        for(const value of element.influences )
            console.log(element.name +  " -> " +  value)
            console.log ("--------------")
        }



    }

separateValues(artists)


// Voy a intentar hacer una aplicacion super generica, que va a ser solo cambiarle la nomenclatura , y asi se ve super claro 

const array1 = [
  { key1: 'Kurt Cobain', key2: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { key1: 'David Bowie', key2: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { key1: 'Eddie Vedder', key2: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { key1: 'Freddie Mercury', key2: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { key1: 'John Lennon', key2: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

function separateValuesKey2 (array){
    for (const element of array) {
        for (const key2Value of element.key2)
            console.log( element.key1 + " -> " + key2Value)
            console.log("xxxxxxxxxxxxxx")
        }
    }



separateValuesKey2 (array1)