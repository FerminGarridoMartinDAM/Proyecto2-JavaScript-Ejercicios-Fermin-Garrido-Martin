/* Ejercicio 15
Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript. */  

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];


function BuscadorCamisetas(list) {
    const conCamiseta = [] ;
    const sinCamiseta = []

    for (const product of products){
        console.log("Analizando: " + product);
        if ( product.includes("Camiseta")){
            conCamiseta.push(" " + product);
            console.log("Este elemento contiene camiseta: " + product);
            console.log("............")
            
    }else { 
        sinCamiseta.push(" "+product)
        console.log("Este elemento no contiene camiseta: " + product);
        console.log("............")
    }
        

    console.log("Analisis completado")
     console.log("............")
  console.log("Productos con 'Camiseta':" + conCamiseta);
  console.log("Productos sin 'Camiseta':" + sinCamiseta);
}
}
BuscadorCamisetas(products)