console.log('Fetch');

// const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=1540'
const URL = 'https://pokeapi.co/api/v2/pokemon/'

// fetch( URL, { method: 'GET'} )
//     .then( response => { return response.text() } )
//     .then( x => { console.log(x);})

// fetch( URL )
//     .then( response => response.json() )
//     .then( data => { 
//         console.log( data )
//         console.log( 'total: ' + data.count );
//         console.log( data.results[3] );
//         console.log( data.results.find( p => p.name == 'pikachu'));
//     })

const root = document.getElementById('root')

function renderPokemons( pokemons ) {
    pokemons.forEach(p => {
        const pokemon = document.createElement('li')
        pokemon.innerText = p.name
        root.append(pokemon)
    });
}

fetch( URL )
    .then( response => response.json() )
    .then( data => {
        console.log( data );
        renderPokemons(data.results)
    })