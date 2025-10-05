/* Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript. */

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

function countFavoriteSounds(array) {
  const soundCount = {}; 
  //  Creamos objeto en vez de un array porque vamos a introducirle un key (waves, wind, firecamp...) con su value ( veces que esta; 1 , 2 3, 4 )
  // Las claves serán los sonidos (waves, rain, etc.)
  // y los valores cuántas veces aparece cada uno.

  for (const user of array) {
    //  Recorremos cada usuario del array
    console.log("Usuario:", user.name);

    for (const sound in user.favoritesSounds) {
      //  Recorremos cada sonido favorito de ese usuario
      console.log("  Sonido:", sound);

      if (soundCount[sound] === undefined) {
        soundCount[sound] = {aparece: 1 };    //!!! Lo he hecho con {aparece} para practicar agregarle una key , no se si es interesante pero era por probar, si se quiere agregar solo que sume un numero se quita {aparece} y listo el resultado sera , waves, rain , firecamp como key y el numero como valor
        console.log(sound," es la primera vez que aparece, ponemos el marcador en 1");
      } else {
        console.log("Ha aparecido: " , sound, ", que  ya existía" , " habia aparecido " , soundCount[sound].aparece, " veces");
        soundCount[sound].aparece++;
        console.log(sound , " con esta aparicion ha aparecido ya: " , soundCount[sound].aparece , " veces")
      }
    }
  }

  console.log("Resultado final:", soundCount);
  
}

countFavoriteSounds(users);