import axios from 'axios';
// const axios = require('axios').default;

console.log('Ejemplo de node');

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

const URL = 'https://pokeapi.co/api/v2/pokemon/'

axios.get( URL )
  .then( res => {
    console.log( res.data.results );
  })