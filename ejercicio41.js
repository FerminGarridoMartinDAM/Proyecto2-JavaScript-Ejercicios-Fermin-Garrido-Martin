/* Ejercicio 41
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random() */

function rollDice (numberOfSides){ //Yo que se como se dice eso en ingles jejeje
        // Math.random() genera un número entre 0 (incluido) y 1 (excluido)
  // Multiplicamos por 6 para obtener un rango de 0 a 5 (excluyendo 6)
  // Math.floor() elimina los decimales, resultando en un entero entre 0 y 5
  // Sumamos 1 para obtener un rango de 1 a 6
  let random = Math.random()  // Aqui generamos un numero decimal aleatorio entre 0 y 0.999999999999 . Los parametros siempre estan vacios
  let escala = random * numberOfSides   // Aqui le decimos hasta que numero llega nuestro dad
    let redondeo = Math.floor(escala)
let resultadoFinal = redondeo + 1
console.log("Tiramos un dado de " , numberOfSides , " caras y el resultado es: " , resultadoFinal)
return resultadoFinal
}

rollDice(150)




//Voy a intentar simplificarlo 

function rollDice2(sides){

    let resultado = Math.floor(Math.random()*sides) + 1
    console.log("Tiramos un dado de " , sides , " caras y el resultado es: " , resultado)
    return resultado
}

rollDice2(6)