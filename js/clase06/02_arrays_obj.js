console.log('Arrays');

const productos = [
    {nombre: 'celuar', precio: 200, stock: 11},
    {nombre: 'mouse', precio: 10, stock: 20},
    {nombre: 'teclado', precio: 35, stock: 25},
    {nombre: 'monitor', precio: 300, stock: 5}
]

function pintarCarrito() {  
    for (const item of productos) {
        // console.log( '<h2>' + item.nombre + item.precio + '</h2>' );
        for (const propiedad in item) {
            console.log(item[propiedad]);
        }
    }
}

pintarCarrito()