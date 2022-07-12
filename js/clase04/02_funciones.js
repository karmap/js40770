console.log('Funciones con return');

function alCuadrado( numero ) {
    // let resultado = numero * numero
    // return resultado
    return numero * numero 
}

function alCubo( numero ) {
    return numero ** 3
}

let resultado1 = alCuadrado( 8 )
console.log('8 al cuadrado: ' + resultado1);

console.log( alCuadrado( 5 ) );

console.log( alCubo( 5 ) );
console.log( alCubo( 10 ) );
console.log( alCubo( 513 ) );