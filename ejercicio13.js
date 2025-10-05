/* Ejercicio 13
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función: */

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, name) {
  if (nameList.indexOf(name) === -1) { // Si no está
    console.log("❌ El nombre "+name+ " NO existe en el array:");
    return false;
  } else { // Si está
    console.log("✅ El nombre "+name+ " existe en la posición:", nameList.indexOf(name));
    return true;
  }
}
/*
Este es igual pero creando una constante que sustituye al indexOf, asi no hay que recorrer siempre el array.
function nameFinder(nameList, name) {
  
  const position = nameList.indexOf(name);

  if (position === -1) { // Si no está
    console.log("❌ El nombre NO existe en el array:", name);
    return false;
  } else { // Si está
    console.log("✅ El nombre existe en la posición:", position);
    return true;
  }
} */



nameFinder(names, "Tony");   // Sí existe
nameFinder(names, "Wanda");  // No existe