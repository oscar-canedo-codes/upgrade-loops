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

 // Iteration 2

/* Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. */

 const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for (let index = 0; index < alumns.length; index++) {
    alumn = alumns[index];
  
    let approvedCount = 0;
    approvedCount = alumn.T1 ? approvedCount + 1 : approvedCount;
    approvedCount = alumn.T2 ? approvedCount + 1 : approvedCount;
    approvedCount = alumn.T3 ? approvedCount + 1 : approvedCount;
    alumn.isApproved = approvedCount >= 2 ? true : false;
  }
  
  console.log(alumns);
