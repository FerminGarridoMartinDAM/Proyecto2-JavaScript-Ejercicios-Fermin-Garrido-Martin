/* Ejercicio 33
Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado. */

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};



function getCapital(country) {
    if (capitals[country] === undefined){
        console.log("Se desconoce la capital de: " + country )
    } else {
        console.log(capitals[country])
        
    }
    
        

}

getCapital("Spain") // Importante ponerlo como String porque me estaba dando fallo todo el rato y era por eso.
getCapital("China")

// La voy a pasar otra vez a generico para que me sea mas claro 

function getValue(key) {
    if (object[key] === undefined){
        console.log("Se desconoce el valor de: " + key )
    } else {
        console.log(object[key])
    }
} 