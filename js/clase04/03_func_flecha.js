console.log('Funciones flecha');

// function abreviar( palabra ) {
//     return palabra.substring(0,3).toUpperCase()
// }

// const abreviar = ( palabra ) => { return palabra.substring(0,4).toUpperCase() }
// const abreviar = palabra => palabra.substring(0,3).toUpperCase()
const abreviar = p => p.substring(0,4).toUpperCase()

console.log( abreviar('licenciado') );
console.log( abreviar('ingeniero') );
console.log( abreviar('doctor') );
console.log( abreviar('profesor') );