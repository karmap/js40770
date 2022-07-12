console.log('--> Funciones');

let nombre1 = 'Juan'
let nombre2 = 'Lucas'
let nombre3 = 'Daniel'

function saludar( nombre, edad ){
    console.log('Hola: ' + nombre );
    if ( edad >= 13 ) {
        console.log('Haciendo login ...');
        console.log('Bienvenido a la app')
    } else {
        console.log('No puedes acceder a este sitio :(');
    }
}

// saludar( nombre1 )
// saludar( nombre2 )
// saludar( nombre3 )
// saludar( 'Ana' )

for (let i = 0; i < 3; i++) {
    const nombre = prompt('Dame un nombre')
    const edad = prompt('Dame tu edad')
    saludar(nombre, edad)
}