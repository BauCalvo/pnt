/* Dada esta lista de recibos:
const recibos = [
{numero: 1000, importe: 1500},
{numero: 1001, importe: 2300},
{numero: 1002, importe: 2100}
]
Obtener la suma total de los importes. */
const recibos = [
    {numero: 1000, importe: 1500},
    {numero: 1001, importe: 2300},
    {numero: 1002, importe: 2100}
    ]
console.log(recibos.reduce((a,c) =>a + c.importe,0)); // a es donde se va sumando las cosas