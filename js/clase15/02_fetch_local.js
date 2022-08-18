console.log('Fetch local');

fetch( '/data/products.json' )
    .then( res => res.json() )
    .then( data => {
        console.log(data);
    })