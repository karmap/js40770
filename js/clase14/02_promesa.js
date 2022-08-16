console.log('Promesa');

const miPromesa = new Promise( (resolve, reject) => {
    const rand = Math.random()
    console.log(rand);
    if ( rand > 0.5 ) {
        resolve('Se resolvió la promesa')
    } else {
        reject('Se rechazó la promesa :(')
    }
})

miPromesa
    .then( response => { console.log(response) } )
    .catch( res => { console.log(res); } )
    .finally( () => { console.log('Finalizó'); } )

// console.log(miPromesa);