console.log("\"if\" pidiendo datos");

let rightNumber = 7
let userNumber = parseInt(prompt('Adivina cuál es el número:'))

if ( userNumber == rightNumber ) {
    alert('Adivinaste el número!');
} else {
    alert('No es :(');
}