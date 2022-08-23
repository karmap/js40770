console.log('Fetch local');

function renderData( products ) {
    products.forEach(p => {
        const product = document.createElement('li')
        product.innerText = p.nombre
        root.append(product)
    });
}

fetch( '/data/products.json' )
    .then( res => res.json() )
    .then( data => {
        console.log(data);
        renderData(data)
    })