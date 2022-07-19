console.log('Arrays');

const productos = ['celuar', 'mouse', 'teclado', 'monitor', 'cable']

function pintarCarrito() {  
    // for (let i = 0; i < productos.length; i++) {
    //     console.log( '<h1>' + productos[ i ] + '</h1>' );
    // }
    productos.forEach( producto => {
        console.log( '<h2>' + producto + '</h2>' );
    })

    // for (const item of productos) {
    //     console.log( '<h2>' + item + '</h2>' );
    // }
}

// pintarCarrito()

productos.push('impresora')

// pintarCarrito()

productos.shift()

pintarCarrito()





