/*Dada una lista de números, realizar una función que tome dos parámetros, la lista , un
numero y que devuelva otra lista con numeros menores al parámetro*/
const lista = [1,2,3,4,5,6,7,8]

const nuevaLista = (lista,n)=> lista.filter(numero => numero<n);

console.log(nuevaLista(lista,5));