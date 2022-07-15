console.log('Ejemplo after');

// function Paquete(params) {
//     this.params = params
//     this.metodo = function() {}
// }

const TARIFAS = {
    'BA' : 1000,
    'CO' : 1500,
    'RO' : 1800
}

class Paquete {
    constructor ( destino, peso ) {
        this.destino = destino
        this.peso = peso
    }
    calcularTarifa (){
        const tarifaPorDestino = TARIFAS[this.destino]
        const tarifaTotal = tarifaPorDestino * this.peso
        console.log(`La tárifa de enviar ${this.peso} Kg a ${this.destino} es ${tarifaTotal}`);
    }
    enviar () {
        console.log('Enviando el producto ...');
    }
}

// const paquete1 = new Paquete( 'BA', 1.5 )
// const paquete2 = new Paquete( 'CO', 2 )

// paquete1.calcularTarifa()
// paquete1.enviar()

// paquete2.calcularTarifa()
// paquete2.enviar()

const validarDestino = d => TARIFAS[d] ? true : false
const validarPeso = p => p >= 1 && p <= 10 ? true : false

const procesarPaquetes = ( n ) => {
    for (let i = 0; i < n; i++) {
        // const destino = prompt(`Dame el destino del paquete ${i+1}`)
        // const peso = parseInt(prompt(`Dame el peso del paquete ${i+1}`))
        // if ( validarDestino(destino) && validarPeso(peso) ) {
        //     const paquete = new Paquete( destino, peso )
        //     paquete.calcularTarifa()
        //     paquete.enviar()
        // } else {
        //     console.log('Datos no válidos, no puedo procesar ese paquete');
        // }
        const destino = prompt(`Dame el destino del paquete ${i+1}`)
        if ( !validarDestino(destino) ) {
            console.log('Destino no válido')
            continue
        }
        const peso = parseInt(prompt(`Dame el peso del paquete ${i+1}`))
        if ( !validarPeso(peso) ) {
            console.log('Peso no válido')
            continue
        }

        const paquete = new Paquete( destino, peso )
        paquete.calcularTarifa()
        paquete.enviar()   
    }
}

const totalPaquetes = parseInt(prompt('¿Cuantos paquetes quieres enviar'))

if ( totalPaquetes >= 1 && totalPaquetes <= 5 ) {
    procesarPaquetes( totalPaquetes )
} else {
    console.log('No podemos enviar esos paquetes');
}