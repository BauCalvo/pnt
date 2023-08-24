//Dada esta lista de números [ 4,3,-2,5,8,-12,10]
//Obtener la suma total de los elementos, iniciando en 100

const lista = [ 4,3,-2,5,8,-12,10]
console.log(lista.reduce((a,c)=>a+c,100)); // a es donde se va sumando las cosas