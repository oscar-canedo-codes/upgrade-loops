// Iteration 1
 
/* Usa la función includes - Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". */
 
const products = [
    'Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta'
 ];
  
 function showProducts() {
   
    /* for loop ([initialExpression]; [conditionExpression]; [incrementExpression]) -> Recorrer por cada elemento del array */
  
    for(let i = 0; i < products.length; i++ ) {
       
        /* if -> Condición para revisar si hay valor de 'camiseta'
        products[i] -> Valor de 'i' en cada iteracion
        .includes -> Método para arrays, Acceder cada ítem 'i' de cada iteración */
  
        if (products[i].includes('Camiseta')) {
  
        /* Si la condición devuelve resultado, demostrar dentro la consola */
       
        console.log(products[i]);
        }
    }
 }
 showProducts(products);