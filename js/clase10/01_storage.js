console.log('localStorage');

const nombres = ['Ana', 'Maria', 'Julián']
const modoOscuro = false
const promedioGeneral = 9.3

// localStorage.clear()

localStorage.setItem('names', nombres)
localStorage.setItem('mode', modoOscuro)
localStorage.setItem('avg', promedioGeneral)

console.log( localStorage );

const nombresDesdeLS = localStorage.getItem('names')
// console.log( typeof nombresDesdeLS );
console.log( nombresDesdeLS.split(',') );
console.log( localStorage.getItem('mode') == 'true' );
console.log(  parseFloat(localStorage.getItem('avg')) );

// localStorage.removeItem('names')
// console.log( localStorage );

for (let i = 0; i < localStorage.length; i++) {  
    const clave = localStorage.key(i)
    console.log(`${i} - ${clave} - ${localStorage.getItem(clave)}`);
}
