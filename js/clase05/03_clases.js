console.log('Clases');

class Personaje {
    constructor(nombre) {
        this.nombre = nombre
        this.vida = 100
        this.magia = 100
        this.poder = 1
        this.nivel = 1
    }
    recibirAtaque( valor ) {
        this.vida -= valor
    }
    subirNivel(){
        this.nivel++
    }
    subirPoder(){
        this.poder++
    }
}

const personaje1 = new Personaje('Mr Java')
const personaje2 = new Personaje('Super PHP')

console.log( personaje1 );
console.log( personaje2 );

personaje1.recibirAtaque(42)
personaje1.subirNivel()
personaje1.subirNivel()
personaje1.subirPoder()

console.log(personaje1);