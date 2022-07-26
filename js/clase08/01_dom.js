console.log('Ejemplo DOM');

const root = document.getElementById('root')

console.log(root);

// root.innerHTML = '<h3>nuevo dom</h3>'

const productos = document.getElementsByTagName('li')

console.log( productos ) ;

for (let i = 0; i < productos.length; i++) {
    if ( i > 1 ) {
        break
    }
    productos[i].className = 'azul'
}

// for (const p of productos) {
//     console.log( p );
// }