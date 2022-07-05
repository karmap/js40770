console.log('Primer for');

// for( let contador = 1; contador <= 10; contador++){
//     console.log( contador );
// }

// for( let contador = 2; contador <= 10; contador = contador + 2){
//     console.log( contador );
// }

// let sumador = 0
// for ( let i = 1; i <= 10 ; i++) {
//     sumador = sumador + i
//     console.log( 'contador: ' + i + ' - sumador: ' + sumador);
// }
// console.log( sumador );

// let sumador = 0
// for ( let i = 1; i <= 1000 ; i++) {
//     sumador = sumador + i
//     console.log( 'contador: ' + i + ' - sumador: ' + sumador);
// }
// console.log( sumador );

let sumador = 0
for ( let i = 1; i <= 1000 ; i++) {
    sumador = sumador + i
    console.log( 'contador: ' + i + ' - sumador: ' + sumador);
    if ( sumador >= 1000 ) {
        console.log('El valor mínimo es: ' + i);
        break;
    }
}
console.log( sumador );