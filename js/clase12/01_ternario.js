console.log('Ejemplo ternario');

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

// if ( product.price > 1000 ) {
//     console.log('Computadora premium');
// } else {
//     console.log('Computadora accesible');
// }

product.price > 1000 ? console.log('Computadora premium') : console.log('Computadora accesible'); 

// prodcuto v2 mayor que 500
const confMedia = product.hard_drive.v1 > 500 && "Gran disco duro"

console.log(confMedia || 'El disco duro no es sufuciente');

let confAlta = null
console.log(confAlta ?? 'El disco duro no es sufuciente');

console.log(
    confAlta?.hard_drive.v4 || 'no existe'
);

console.log(
    product.screen_size?.v1 || 'no existe'
);