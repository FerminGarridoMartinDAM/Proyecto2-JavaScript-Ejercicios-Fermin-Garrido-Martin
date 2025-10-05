/* Ejercicio 40
Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.
 */

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      console.log(array[i], " esta en la posicion ", i);
      return i; //Le hemos hecho return para usarlo en el siguiente ejercicio, en el que cuando llamos a la funcion nos dara el valor de i directamente.
    }
  }
  console.log("No se ha encontrado el elemento ", text);
  return -1; //Esto se hace por convencion en JS , yo no lo habia puesto y estaba usando undefined, pero estoy es como decir no se encuentra y es mas especifico que undefined
}

findArrayIndex(mainCharacters, "Anakin");

//voy a probar a hacer otra funcion con el bucle for of , que a no recorrer posiciones si no directamente los elementos , le deberemos crear una variable estilo contador a la que llamaremos o i o index, pero sabiendo que empieza por 1 el contador tendremos que restarle 1 al final para que nos de la posicion que empieza por 0.
// !!NUEVA idea en vez de restarle uno, lo que vamos a hacer es hacerle el console log antes de sumarle el valor a la variable index

function findArrayIndex2(array, text) {
  let index = 0;
  for (const element of array) {
    if (element === text) {
      console.log(element, "esta en la posicion ", index);
    }
    index++;
  }
}

findArrayIndex2(mainCharacters, "Han Solo");

/* Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

//Voy a hacer uno con splice para practicarlo y otro como dijo Antonio , que es mejor añadir a un nuevo array antes que borrar, entonces añadiremos todos los elementos del array menos el que coincida con el texto

/* Aui creamos la variable para no tener que estar todo el rato escribiendo findArrayIndex(array, text),pero creo que tambien es mas interesante porque llamamos solo al resultado no a  realizar la funcion todo el rato y como nos retorno i pues solo llamamos al valor de i (No estoy seguro de esto) de hecho lo podiamos haber llamado i pero no se si hay problema al ser palabra reservada y lo hemos llamado position*/

function removeItem(array, text) {
  let position = findArrayIndex(array, text);
  console.log("Asi esta el array ", array, " antes de borrar ", text);
  console.log(
    "El elemento ",
    text,
    " esta en la posicion ",
    position,
    " y se procede a borrarlo"
  );
  if (position > -1) {
    array.splice(position, 1);
    console.log(
      "Asi esta el array ",
      array,
      " despues de haber borrado ",
      text
    );
  } else {
    console.log("El elemento ", text , " no se encuentra en " , array)
  }
  return array
}

removeItem(mainCharacters, "Leia");

//Haciendole el push

function removeItem2(array, text) {
    let newArray = []
  let position = findArrayIndex(array, text);
  console.log(
    "El elemento ",
    text,
    " esta en la posicion ",
    position,
    " y se procede a saltarlo"
  );
  for (let i = 0 ; i < array.length ; i++)
    if( position !== i ){
        newArray.push(array[i])
    }else {
        console.log ("Saltamos el elemento " , array[i] )
    }
    console.log("Asi queda el nuevo array sin el elemento " , text)
    console.log(newArray)
}

removeItem2(mainCharacters, "Luke")


//Voy a probar a hacer otra forma del ejercico con la funcion del splice a ver si me sale con un bucle for tradicional


function removeItem3(array, text) {
   
  let position = findArrayIndex(array, text);
  console.log(
    "El elemento ",
    text,
    " esta en la posicion ",
    position,
    " y se procede a borrarlo"
  );
  for (let i = 0 ; i < array.length ; i++){
    if( position === i ){
        console.log ("Borramos el elemento " , array[i] )
        array.splice(i, 1) // o tambien podriamos hacerlo array.splice(position , 1 )
         
    }
       
    }
    console.log("Asi queda el nuevo array sin el elemento " , text)
    console.log(array)
    return array
}

removeItem2(mainCharacters, "Chewbacca")

//Esta ultima me parece la mas sencilla de entender, pero creo que me esta menos optimizada porquele metemos otro bucle en medio.