/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función:*/

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];



function averageWord(list) {
    let total = 0 ;
    for (const element of list) {
        if (typeof element === "string"){
            total += element.length;
        } else {
            total += element ;
        }
    }
    const average = total / list.length
    console.log(average)
}
averageWord(mixedElements)