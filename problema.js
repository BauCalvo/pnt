class comprobanteFactura{
    // factura, con id, fecha, importe, lista de items
    constructor(factura,id,listaItems){
        this.factura = factura;
        this.id = id;
        this.fecha = "23/08/2023";
        this.listaItems = listaItems;
        this.importe = this.Ftotal(listaItems);
    }
    Ftotal = function(listaItems){
        let total =0;
        for (let i = 0; i < listaItems.length; i++) {
            total += listaItems[i].precioUnitario * listaItems[i].cantidad;
        }
        return total;
    }
}
const items = [
    { cantidad: 2, descripcion: 'Producto 1', precioUnitario: 10 },
    { cantidad: 3, descripcion: 'Producto 2', precioUnitario: 15 },
    { cantidad: 1, descripcion: 'Producto 3', precioUnitario: 20 }
  ];
  
const comprobante = new comprobanteFactura("aaa",1111,items);
console.log(comprobante.importe);
