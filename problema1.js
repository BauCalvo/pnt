// Dada esta lista de precios sin iva [2300,2500,5000,10000,1300]
// Devolver la suma total de precios con iva que superen el importe de 3000.
const preciosSinIva = [2300,2500,5000,10000,1300];
console.log(preciosSinIva.map(precio=>precio*1.21).filter(precio=>precio > 3000).reduce((a,c)=>a+c));
