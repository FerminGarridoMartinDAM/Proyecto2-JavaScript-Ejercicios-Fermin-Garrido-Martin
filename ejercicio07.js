/* Ejercicio 7
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos. */
function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}
greaterNumber(2, 5);
greaterNumber(10, 15);
greaterNumber(20, 10);
// Aqui lo vamos a hacer con ternario que es mas compacto
function mayorNumero(primerNumero, segundoNumero) {
    console.log(primerNumero>segundoNumero ? primerNumero : segundoNumero);
}
mayorNumero(8,15)
//para crear una const y sacarle un return
function mayorNumeroRetorno(primerNumeroRetorno , segundoNumeroRetorno) {
    const mayor = primerNumeroRetorno>segundoNumeroRetorno ? primerNumeroRetorno : segundoNumeroRetorno;
    console.log(mayor);
    return mayor;
}
mayorNumeroRetorno(20,123123)