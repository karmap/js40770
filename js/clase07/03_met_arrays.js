console.log('Métodos de Arrays');

const productos = [
    {nombre: 'celuar', precio: 200, stock: 16},
    {nombre: 'mouse', precio: 10, stock: 20},
    {nombre: 'teclado', precio: 35, stock: 25},
    {nombre: 'monitor', precio: 300, stock: 5},
    {nombre: 'base', precio: 10, stock: 22}
]

function pintarCarrito(productos) {  
    for (const item of productos) {
        document.write( '<li>' + item.nombre + '</li>' )
        document.write( '<li>' + item.precio + '</li>' )
        document.write( '<li>' + item.stock + '</li><br><br>' )
    }
}

// pintarCarrito(productos)

const mouse = productos.find( p => p.nombre == 'mouse' )
console.log(mouse);

const productosBaratos = productos.filter( p => p.precio < 100 )
// pintarCarrito(productosBaratos)

const muchoStock = productos.filter( p => p.stock > 15 )
pintarCarrito(muchoStock)

const nombresMayus = productos.map( p => p.nombre.toUpperCase() )
console.log(nombresMayus);

const total = productos.reduce( (acc, p) => acc + p.precio, 0 )
console.log('total: ' + total);