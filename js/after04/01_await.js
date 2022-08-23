console.log('After 04 - async/await');

const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

// fetch( URL_POKEMONS )
//     .then( res => res.json() )
//     .then( data => {
//         const pikachu = data.results.find( p => p.name == 'pikachu' )
//         console.log( pikachu.url );

//         fetch( pikachu.url )
//             .then( res => res.json() )
//             .then( data => {
//                 console.log( data );
//             })
//     })

// async function getPikachuData() {
//     const res  = await fetch( URL_POKEMONS )
//     const data = await res.json()
//     console.log(data);
// }

// (async () => {
//     const res  = await fetch( URL_POKEMONS )
//     const data = await res.json()
//     console.log(data);
// })()

const getPikachuData = async () => {
    const res  = await fetch( URL_POKEMONS )
    const data = await res.json()
    const pikachu = data.results.find( p => p.name == 'pikachu' )
    const resPikachu = await fetch( pikachu.url )
    const pikachuData = await resPikachu.json()
    console.log(pikachuData);
}

getPikachuData()
