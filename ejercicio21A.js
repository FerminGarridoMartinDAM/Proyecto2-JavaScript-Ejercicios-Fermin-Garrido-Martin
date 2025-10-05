/* Ejercicio 21
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".   En este lo que vamos a hacer es directamente organizarlos en 2 nuevos arrays.
 */
const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];


function separateAdult(array) {
    const adults = []
    const minors = []
    for (user of [...array]){
        if (user.years >= 18) {
            adults.push(user)
            
        }else{
            minors.push(user)
        }
    }
console.log("Usuarios mayores de edad:" ,adults);
console.log("..............................")
console.log("Usuarios menores de edad:" ,minors);
console.log("..............................")
}
separateAdult(users)