console.log('Objectos literales');

const personaje = {
    nombre: 'Mr Java',
    vida: 100,
    magia: 100,
    poder: 1,
    nivel: 1
}

console.log( personaje );

// recibió un ataque
personaje.vida = 80

// ganó nivel
// personaje.nivel = 2
personaje["nivel"] = 2

console.log( personaje );


for (const propiedad in personaje) {
    console.log(propiedad);
    console.log(personaje[ propiedad ]);
}


