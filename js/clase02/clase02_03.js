console.log('Ejemplo con calificaciones');

let lower = 0
let upper = 10
let passed = 7

let grade1 = prompt('Calificación 1')
// let grade2 = prompt('Calificación 2')
// let grade3 = prompt('Calificación 3')

if ( grade1 >= lower && grade1 <= upper ) {
    console.log('Calificaciones válidas');
    // if ( !(grade1 >= passed) ) {
    if ( grade1 < passed ) {
        alert('Reprobado')
    }
} else {
    console.log('No válidas');
}