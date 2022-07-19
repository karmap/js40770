console.log('Arrays');

const productos = [
    {nombre: 'celular', precio: 200, stock: 11},
    {nombre: 'mouse', precio: 10, stock: 20},
    {nombre: 'teclado', precio: 35, stock: 25},
    {nombre: 'monitor', precio: 300, stock: 5}
]

function pintarCarrito() {  
    for (const item of productos) {
        document.write( '<h2>' + item.nombre + '</h2>' )
        document.write( '<h3>' + item.precio + '</h3>' )
        document.write( '<strong>' + item.stock + '</strong>' )
    }
}

pintarCarrito()