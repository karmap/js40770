console.log('Ejemplo desestructuración');

const product = {
    id: 1,
    price: 900,
    title: 'Computadora Acer',
    hard_drive: {
        v1: 256,
        v2: 512,
        v3: 1024
    }
}

// const price = product.price
// const v2 = product.hard_drive.v2

const id = 4

const {id: id_prod, price: precio, title, hard_drive: {v3: confAlta}} = product

console.log(`el precio es: ${precio}`);
console.log(id_prod);
console.log(title);
console.log(confAlta);