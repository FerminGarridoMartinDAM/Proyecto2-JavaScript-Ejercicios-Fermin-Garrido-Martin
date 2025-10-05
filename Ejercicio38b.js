/* Ejercicio 38
Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

Es decir, la media de volumen de todos los volumenes juntos.
 */
const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

function calculateAverageVolume(array) {
  let numberOfVolumes = 0;
  let volumeTotal = 0;
  let averageVolume = 0 ;
  for (const user of array) {
    console.log("Aqui imprimimos user");
    console.log(user);
    for (const favoriteSound in user.favoritesSounds) {   // Con este ya hemos entrado al objeto entonces ya podemos sacar directamente el valor de la key volume  //AQUI ESTA LA LINEA DE CONSULTA PARA ANTONIO
      numberOfVolumes += 1;                               
      console.log("Aqui imprimimos favoriteSound");
      console.log(favoriteSound);
      console.log(user.favoritesSounds[favoriteSound].volume);
      volumeTotal += user.favoritesSounds[favoriteSound].volume;
      
    }
  }
  console.log("El volumen total es :" , volumeTotal)
  console.log("El numero de sonidos sumados es: " , numberOfVolumes)
  averageVolume = volumeTotal / numberOfVolumes
  console.log("La media del volumen es: " , averageVolume)
  return averageVolume
}

calculateAverageVolume(users);
