/* Ejercicio 12
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.

Puedes usar este array para probar tu función: */

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

/* ctrl + d sirve para coger todas los elementos coincidentes */

function removeDuplicates(lista) {
  let listaSinDuplicados = [];

  for (const elemento of lista) {
    if (listaSinDuplicados.includes(elemento) === false) { //Esta linea tambien se puede poner  if (!result.includes(elemento)) {
      listaSinDuplicados.push(elemento);                    // la exclamacion ! es igual a decir === false
    }
  }

  return listaSinDuplicados;
}

console.log(removeDuplicates(duplicates));  




/* function removeDuplicates(lista) {
  // Recorremos el array con i desde la primera posición
  for (let i = 0; i < lista.length; i++) {
    // Para cada elemento, comparamos con los que vienen después 
    for (let j = i + 1; j < lista.length; j++) {
      if (lista[i] === lista[j]) {  // Si encontramos un duplicado
        lista.splice(j, 1);         // Lo borramos del array original
        j = j - 1;      o    j -= 1   o  j--                // Ajustamos j porque el array se acortó
      }
    }
  }
  return lista; // Devolvemos el array limpio
}

console.log(removeDuplicates(duplicates)); */