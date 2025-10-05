/* Filtra una lista de canciones para crear una playlist que solo contenga canciones de rock que duren más de 5 minutos.

Utiliza un bucle para lograrlo e imprime la nueva playlist por consola. */

const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];
const rockPlaylist = [];


function createListGenreDuration (array, genre, duration){
    const newList = []
    
    for (const element of array){
        console.log("Revisando " + element.title + " " + element.genre + " "+ element.duration)
        if ((element.genre === genre) && (element.duration >= duration)) {
            newList.push(element)
            console.log(element.title +" cumple con los requisitos " + genre + " y mas de " + duration + " minutos ,asi que se añade a la newList")
            console.log("---------------------")

        } else {  console.log(element.title +" no cumple con los requisitos " + genre + " y mas de " + duration + " minutos ,asi que se NO se añade a la newList")
            console.log("--------------------")

        }
    }
    console.log("...................")
    console.log("La nueva lista tiene: " + newList.length + " elementos, que son los siguientes: ")
    console.log(newList)
    return newList
    }

    createListGenreDuration (songs , "Rock" , 5)