/*problema2:Dada esta lista de comprobantes de notas de crédito
[{id:100,descripcion:”prov1”,precio:1000},{id:102,descripcion:”prov2”,precio:1300}]
Devolver una nueva lista de comprobantes, con el precio con impuesto de iva del 21% */

const notas = [{id:100,descripcion:'prov1',precio:1000},{id:102,descripcion:'prov2',precio:1300}]
  
const notasMasCaras = notas.map(nota => {
    const precioConIva = nota.precio * 1.21;
      return {
        ...nota,/* operador spread. que devuelve el mismo objeto y le piso el precio con el precio con iva */
        precio: precioConIva
      }
  })

  console.log(notas);

  console.log(notasMasCaras);
  