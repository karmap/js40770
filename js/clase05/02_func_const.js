console.log('Funcion constructora');

// const Personaje = ( nombre, vida) => { -> no se puede
function Personaje ( nombre, vida ) {
    this.name = nombre
    this.life = vida
    this.start = function () {
        console.log( 'Bienvenido ' + this.name )
    }
    this.recibirAtaque = ( valor ) => {
        this.life -= valor
    }
}

const personaje1 = new Personaje ( 'Mr Java', 100 )
const personaje2 = new Personaje ( 'Super PHP', 80 )

console.log(personaje1);
// console.log(personaje1.name);

personaje2.nivel = 2
console.log(personaje2);

personaje1.start()
personaje2.start()

personaje1.recibirAtaque( 95 )
console.log( personaje1 );