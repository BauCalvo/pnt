const lista = [7,2,5,6,8];
const copiaLista = [...lista] // copio la lista en otra porque el sort modifica la lista no devuelve una nueva como el map
console.log(copiaLista.sort((a,b)=>a-b));
console.log(copiaLista.sort((a,b)=>b-a));
const listaStrings = ['hola','chau','hello','adios'];
console.log(listaStrings.sort((a,b)=>a.localeCompare(b)));
console.log(listaStrings.sort((a,b)=>b.localeCompare(a)));

