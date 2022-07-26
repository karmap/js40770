console.log('Ejemplo de arrays');

const productos = [
    {id:1, nombre: 'celuar', precio: 200, stock: 16},
    {id:2, nombre: 'mouse', precio: 10, stock: 20},
    {id:3, nombre: 'teclado', precio: 35, stock: 25},
    {id:4, nombre: 'monitor', precio: 300, stock: 5},
    {id:5, nombre: 'base', precio: 10, stock: 22}
]

const carrito = []

function agregarAlCarrito( id ) {
    const producto = productos.find( p => p.id == id )
    carrito.push( {id: producto.id, nombre: producto.nombre, precio: producto.precio } )
}

function componenteProductos() {
    productos.forEach( p => {
        document.write(`<li>${p.nombre}</li>`)
        document.write(`<li>${p.precio}</li>`)
        document.write(`<li>${p.stock}</li>`)
        document.write(`<button>Agregar al carrito</button>`)
    })
}

function imprimirCarrito() {
    carrito.forEach( p => {
        console.log( p );
    })
}

function detalleDeProducto(id) {
    return productos.find( p => p.id == id )
}

function detalleDeCarrito() {
    let productos = []
    carrito.forEach( p => {
        productos.push( detalleDeProducto( p.id ) )
    })
    return productos
}

// function calcularTotal() {
//     let total = 0
//     carrito.forEach( p => {
//         total += p.precio
//     })
//     return total
// }

function calcularTotal() {
    return carrito.reduce( (acc, p) => p.precio + acc, 0 )
}

componenteProductos()

agregarAlCarrito( 2 )
// imprimirCarrito()

agregarAlCarrito( 4 )
agregarAlCarrito( 3 )
imprimirCarrito()

// console.log( detalleDeProducto(4) );

console.log( detalleDeCarrito() );

console.log( calcularTotal() )