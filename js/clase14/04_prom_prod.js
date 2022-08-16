const productos = [
    {id:1, nombre: 'celular', precio: 200, stock: 16},
    {id:2, nombre: 'mouse', precio: 10, stock: 20},
    {id:3, nombre: 'teclado', precio: 35, stock: 25},
    {id:4, nombre: 'monitor', precio: 300, stock: 5},
    {id:5, nombre: 'base', precio: 10, stock: 22}
]

console.log('Promesa y productos');

const renderProducts = ( products ) => {
    products.forEach( p => {
        document.write(`<li>${p.nombre} - precio: ${p.precio}</li>`)
    });
}

const getProducts = (timeout = 5000) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, timeout);
    })
}

getProducts(1000)
    .then( (data) => {
        console.log(data);
        renderProducts(data)
    })
