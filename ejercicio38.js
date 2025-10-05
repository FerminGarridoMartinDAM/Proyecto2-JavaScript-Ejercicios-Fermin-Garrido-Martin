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

// Este si lo voy a hacer con mas console.log para ver por donde va el bucle y etc y voy a poner todos los paso por console.log para que sea ve cuando corro el programa y no tener que ir mirando
//El planteamiento de este ejercico es  crear una variable donde iremos sumando los volumenes (totalValue)  y otra constante que nos dira el total de elementos que hemos sumado (totalItemCounted) , para poder dividir el primero entre el segundo y que nos de la media.
//Para ello crearemos un bucle for of que recorra todos los elementos del array y dentro de ese bucle un bucle for in (porque va a recorrer un objeto) que recorra la key favoritesSounds ya que es donde se encuentran los volumenes, aprovechando cuando pase por ellos para que sume +1 a totalItemCounted
//NOTA ESTE ME ESTA COSTANDO MAS HACERLO GENERICO, LUEGO HARE UNO MAS ESPECIFICO Y A SACO QUE LLAMARE 38B

function averageValueOfKeyInObjectInObject(array) {
  let totalValue = 0;
  let totalItemCounted = 0;
  console.log(
    "Hemos creado la variable totalValue que ahora tiene un valor de :" +
      totalValue
  );
  console.log(
    "Hemos creado la variable totalItemCounted que ahora tiene un valor de :" +
      totalItemCounted
  );
  console.log("Y ahora vamos a recorrer el array con un bucle for of");
  let i = 0; // lo voy a poner para ver mas graficamente por donde va el bucle, quiero explicar la maximo este ejercicio porque me parece muy interesante.

  for (const element of array) {
    console.log("Bucle for of ACTIVO " + i++);
    console.log("Ahora mismo estamos recorriendo el elemento: ", element);
    console.log(
      "Y queremos recorrer ",
      Object.entries(element.favoritesSounds)
    ); //  ESO ES PARA IMPRIMIR ARRAY DE PARES, ES DECIR LAS KEYS CON SU VALOR DEL OBJETO(CHULISIMO)!!!!!!!!
    let sounds = Object.entries(element.favoritesSounds); //He creado esta variable para acceder mas facil
    console.log("---------------");

    for (const object in element.favoritesSounds) {
      console.log("Bucle for in ACTIVO");
      console.log("Recorriendo:", sounds);
      //Vamos a contar cuantos volumenes hay
      console.log("Y dentro de este elemento estamos reccoriendo: ", object);
      console.log(
        "Como cada uno va asociado a un volume pues cada vez sumamos uno para saber el numero total de volumenes"
      );
      totalItemCounted += 1;
      console.log("Volumenes contados hasta ahora: ", totalItemCounted);

      //Voy a intentar imprimir el objeto entero a ver si puedo porque ahora solo me da el nombre del objeto o la key?
      /*   console.log("PRUEBAA" ,element.favoritesSounds[object])  aqui solo me da los values pero lo quiero completo*/
      /*   for (const ObjectInObject in element.favoritesSounds[object]){
        
      console.log("Con esto recorremos:" ,ObjectInObject)}  esto no me ha servido porque me da las keys de los tipos de sonido , interesante para recorrer todo todo por eso lo dejo , pero no me sirve */
      // ME DOY POR VENCIDO y Sigo con el ejercicio

      //Vamos a sacar el valor de la key volume y a sumarla
      console.log(
        "Desde aqui podemos acceder a su key volume para que nos de el valor y poder sumarlo a totalValue "
      );
      console.log(
        "!!Sacamos el valor de volume que es: ",
        element.favoritesSounds[object].volume
      ); // IMPORTANTISIMO ESTA LINEA !!!! ME HA COSTADO LA VIDA SACAR EL VOLUMEN!!!!!!
      console.log(
        "Creamos una variable llamada volumen para no tener que escribir siempre element.favoritesSounds[object].volume"
      );
      let volume = element.favoritesSounds[object].volume;

      console.log(
        "Ahora que tenemos el valor de cada volumen los sumamos: totalValue = totalValue + volume"
      );
      totalValue = totalValue + volume;
      console.log("Valor actual del volumen: ", totalValue);
      console.log("_____Terminamos de recorrer____", object);
    }
    console.log("terminamos de recorrer: ", element.favoritesSounds);
    console.log("xxxxxxxxxxxxxxxx");
  }
  console.log("Bucle Terminado y todo recorrido");
  console.log("Total de volumenes contados: ", totalItemCounted);
  console.log("Suma total de los volumenes: ", totalValue);
  console.log(
    "Ahora hacemos la media dividiendo la suma de los volumenes entre el numero de volumenes",
    totalValue,
    " / ",
    totalItemCounted
  );
  let average = totalValue / totalItemCounted;
  console.log(average);
}

averageValueOfKeyInObjectInObject(users);
