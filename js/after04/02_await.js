console.log('Fetch local con await');

function renderData( products ) {
    products.forEach(p => {
        const product = document.createElement('li')
        product.innerText = p.nombre
        root.append(product)
    });
}

const getProducts = async () => {
    try {
        const res  = await fetch( '/data/productsX.json' )
        const data = await res.json() 
        renderData( data )
    } catch (error) {
        console.log('hubo error: ' + error);
    }
}

getProducts()
