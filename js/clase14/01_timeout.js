console.log('setTimeout');

console.log('Inicia mi código');

setTimeout( () => {
    console.log('A la mitad (5seg)');
}, 5000) 

setTimeout( () => {
    console.log('A los 3 segundos');

    // setTimeout( () => {
    //     console.log('Dr Strange');
    // }, 1000) 
}, 3000)   

console.log('Termina mi código');