console.log('Lista de productos');

const productos = [
    {id:1, nombre: 'celuar', precio: 200, stock: 16},
    {id:2, nombre: 'mouse', precio: 10, stock: 20},
    {id:3, nombre: 'teclado', precio: 35, stock: 25},
    {id:4, nombre: 'monitor', precio: 300, stock: 5},
    {id:5, nombre: 'base', precio: 10, stock: 22}
]

const root = document.getElementById('root')
root.innerHTML = ''

productos.forEach( p => {
    const element = document.createElement('li')
    element.innerHTML = `${p.nombre}: <strong>${p.precio}</strong>`
    root.append( element )
});