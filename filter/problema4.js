/*Data esta lista de notas de crédito:
const ncs = [{id:100,descripcion:"prov1",precio:1000},
{id:102,descripcion:"prov2",precio:1300},
{id:103,descripcion:"prov3",precio:600}];
Realizar una función que retorne otra lista con las notas de crédito inferiores a un
número pasado por parámetro.*/

const ncs = [{id:100,descripcion:"prov1",precio:1000},
            {id:102,descripcion:"prov2",precio:1300},
            {id:103,descripcion:"prov3",precio:600}];

const listaFlitrada = (n,lista)=>{
    return lista.filter(nota=> nota.precio<n)}
console.log(listaFlitrada(1001,ncs));