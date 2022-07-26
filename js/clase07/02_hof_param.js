console.log('HOF parámetro');

const porCadaElemento = ( listaDeDatos, funcionParaIteracion ) => {
    for (let i = 0; i < listaDeDatos.length; i++) {
        funcionParaIteracion( listaDeDatos[i] )
    }
}

const listaDeNombres = ['Juan', 'Maria', 'Hisao', 'Emanuel']

const saludar = (nombre) => { console.log(`Hola ${nombre}!!!`) }

// saludar('Adrian')

porCadaElemento( listaDeNombres, saludar )

const login = (nombre) => { console.log(`Haciendo login de ${nombre}...`) }

porCadaElemento( listaDeNombres, login)

porCadaElemento( listaDeNombres, (nombre) => {
    console.log(`Bienvenido ${nombre}`);
})

// function procesoComplejo(valor, callback) {
//     // ... ejecuta un montón de procesos
//     callback()
// }