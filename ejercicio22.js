/* Ejercicio 22
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function replace(array, replaceArray){
    
// 1. Creamos un índice para controlar qué fruta usar
let replaceArrayIndex = 0;
console.log("ESTADO INICIAL:");
console.log(array);
console.log("");
// 2. Recorremos el array de comidas con un bucle for
for (let i = 0; i < array.length; i++) {  
  // 3. Verificamos si la comida actual NO es vegana (este if tiene dentro el siguiente if que tiene dentro un else)
  if (array[i].isVegan === false) {
    // 4. Mostramos qué vamos a reemplazar por que (el [i nos indica el elemento que esta en esa posicion])
    console.log("La comida " + array[i].name + " no es vegana"); 
    // 5. Verificamos que aún tengamos frutas disponibles
    if (replaceArrayIndex < replaceArray.length) {  
      // 6. Reemplazamos la comida no vegana con una fruta
      console.log("Reemplazando "+ array[i].name+  " por " + replaceArray[replaceArrayIndex]);
      array[i].name = replaceArray[replaceArrayIndex];
      array[i].isVegan = true; // Ahora es vegana   
      // 7. Avanzamos al siguiente índice de fruta (evita duplicados)
      replaceArrayIndex = replaceArrayIndex + 1; //Tambien se puede poner replaceArrayIndex += 1
      // Si no quedan  mas frutas disponibles nos avisa ( este else esta dentro de este if que a su vez esta dentro del otro if)
    } else {
      console.log("No quedan más frutas disponibles");
    }
   
  } else { //Este else es dependiente solo del primero if por tanto se activa en caso de que array[i] === false no se cumplo solamente.
    // 8. Si ya es vegana, la dejamos como está
    console.log("La comida " + array[i].name + " ya es vegana");
  }
}
// 9. Imprimimos el resultado final
console.log("");
console.log("RESULTADO FINAL:");
console.log(array);

}


replace (foodSchedule, fruits)







// AQUI COMPLETAMOS EL EJERCICIO SIN HACER FUNCION Y MAS ESPECIFICO


/* 1. Creamos un índice para controlar qué fruta usar
let fruitIndex = 0;

console.log("ESTADO INICIAL:");
console.log(foodSchedule);
console.log("") 

2. Recorremos el array de comidas con un bucle for
for (let i = 0; i < foodSchedule.length; i++) {
 3. Verificamos si la comida actual NO es vegana
  if (foodSchedule[i].isVegan === false) {
 4. Mostramos qué vamos a reemplazar (concatenación básica)
    console.log("La comida " + foodSchedule[i].name + " no es vegana");
 5. Verificamos que aún tengamos frutas disponibles
    if (fruitIndex < fruits.length) {
       6. Reemplazamos la comida no vegana con una fruta
      console.log("Reemplazando con " + fruits[fruitIndex]);
      foodSchedule[i].name = fruits[fruitIndex];
      foodSchedule[i].isVegan = tru Ahora es vegana
       7. Avanzamos al siguiente índice de fruta (evita duplicados)
      fruitIndex = fruitIndex + 1;
      
    } else {
      console.log("No quedan más frutas disponibles");
    }
  } else  8. Si ya es vegana, la dejamos como está
    console.log("La comida " + foodSchedule[i].name + " ya es vegana");
  }
}

 9. Imprimimos el resultado final 
console.log("");
console.log("RESULTADO FINAL:");
console.log(foodSchedule); */